<script setup>
import { ref, onMounted } from 'vue';
import { SpeechFn } from '../assets/utils/functions/speech';

const props = defineProps({
  useVr: {
    type: Boolean,
    default: false
  }
})

const currentClassRoom = ref(1); // 當前教室位置
const assetsLoaded = ref(false);
const showBtn = ref(false);
const showBubble = ref(false);
const currentImg = ref('img1')
const currentBg = ref('class1')
const video = ref(null)
const video1 = ref(null)
const audio = ref(null)
const audio2 = ref(null)

const playMedia = () => {
  const vid = video.value
  const aud = audio.value
  vid.play()
  aud.play()

  let a = setTimeout(() => {
    assetsLoaded.value = true;
  },100)
  let b = setTimeout(() => {
    clearTimeout(a)
    currentImg.value = 'img2'
  }, 15000)

  aud.addEventListener('ended', () => {
  // 停止影片播放
  if (vid && !vid.paused) {
    clearTimeout(b)
    vid.pause();
    showBtn.value = true
  }
})


}

const changePage = (prof) => {
  const url = new URL(window.location.href)
  url.searchParams.set('section', 4)
  url.searchParams.set('prof', prof)
  window.location.href = url.toString()
}

const moveClass = (classNum) => {
  const sky = document.querySelector('a-sky');
  if (!sky) return;

  // 1. 淡出
  sky.setAttribute('animation__fadeout', {
    property: 'material.opacity',
    to: 0,
    dur: 800,
    easing: 'easeInOutQuad',
  });

  // 2. 換背景 & 淡入（在淡出完成後進行）
  setTimeout(() => {
    currentBg.value = `class${classNum}`;
    currentClassRoom.value = classNum

    sky.setAttribute('animation__fadein', {
      property: 'material.opacity',
      from: 0,
      to: 1,
      dur: 800,
      easing: 'easeInOutQuad',
    });
  }, 800);
}

const goBubblePage = () => {
  showBtn.value = false
  const vid1 = video1.value
  const aud2 = audio2.value
  currentImg.value = 'img3'
  currentBg.value = 'video360'

  // 播放第二段
  showBubble.value = true
  aud2.play()
  vid1.play();


  aud2.addEventListener('ended', () => {
    console.log('end-aud2')
  })
}

onMounted(() => {
  currentBg.value = 'class1'

  const assets = document.querySelector('a-assets');
  if (assets) {
    assets.addEventListener('loaded', () => {
      // assetsLoaded.value = true;
      // 載入完成後才顯示圖1
      currentImg.value = 'img1';
    });
  }

  // const video = document.getElementById('myVideo')
  // // 手動播放，避免自動播放失效
  // video?.play()
})
</script>

<template>
  <div>
    <div class="section0">
      <a-scene>
        <a-assets>
          <img id="class1" src="https://kyle-kao.github.io/findmyprofessor/R0010088.JPG" />
          <img id="class2" src="/class/class1.JPG" />
          <img id="class3" src="/class/class2.JPG" />
          <video ref="video" id="myVideo" src="/star1.mp4" crossorigin="anonymous" loop></video>
          <img id="img1" src="/text3.png" />
          <img id="img2" src="/text4.png" />
          <img id="img3" src="/text5.png" />
          <video ref="video1" id="video360" src="/bubble.mp4" loop crossorigin="anonymous"></video>
          <img id="bubble1" src="/1.png" />
          <img id="bubble2" src="/2.png" />
          <img id="bubble3" src="/3.png" />
          <img id="bubble4" src="/4.png" />
          <img id="bubble5" src="/5.png" />
          <img id="bubble6" src="/6.png" />
          <img id="bubble7" src="/7.png" />
          <img id="bubble8" src="/8.png" />
          <img id="bubble9" src="/9.png" />
        </a-assets>

        <!-- 影片  -->
        <a-video
          v-if="!showBtn && !showBubble"
          src="#myVideo"
          width="6"
          height="3.5"
          position="0 2 -3.5"
          autoplay
          loop
          crossorigin="anonymous"
          playsinline
        ></a-video>

        <a-sky :src="`#${currentBg}`" rotation="0 -90 0" :material="{ opacity: 1 }" ref="sky"></a-sky>
        <!-- <a-sky src="#video360" rotation="0 -90 0"></a-sky> -->

        <a-entity
          v-if="!assetsLoaded"
          id="vr-button"
          :visible="useVr"
          class="clickable"
          geometry="primitive: plane; height: 0.5; width: 1.5"
          material="color: #42b983"
          position="0 1 -3"
          @click="playMedia()"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
          <a-text
            value="Play"
            align="center"
            color="#fff"
            position="0 0.05 0.01"
            width="3"
            font="https://cdn.aframe.io/fonts/mozillavr.fnt"
          ></a-text>
        </a-entity>

          <!-- 教室外 -->
          <a-entity
            id="vr-button"
            :visible="!showBubble && (useVr && currentClassRoom === 1)"
            class="clickable"
            geometry="primitive: plane; height: 0.5; width: 1.5"
            material="color: #42b983"
            position="4 -1 .5"
            rotation="-90 0 0"
            @click="moveClass(2)"
            event-set__enter="_event: mouseenter; material.color: #70e4c2"
            event-set__leave="_event: mouseleave; material.color: #42b983"
          >
            <a-text
              value="Go >"
              align="center"
              color="#fff"
              position="0 0.05 0.01"
              width="3"
              font="https://cdn.aframe.io/fonts/mozillavr.fnt"
            ></a-text>
          </a-entity>

          <!-- VR教室 -->
          <a-entity
            id="vr-button"
            :visible="!showBubble && (useVr && currentClassRoom === 2)"
            class="clickable"
            geometry="primitive: plane; height: 0.5; width: 1.5"
            material="color: #42b983"
            position="-3 -1 3"
            rotation="-90 60 0"
            @click="moveClass(1)"
            event-set__enter="_event: mouseenter; material.color: #70e4c2"
            event-set__leave="_event: mouseleave; material.color: #42b983"
          >
            <a-text
              value="< Go"
              align="center"
              color="#fff"
              position="0 0.05 0.01"
              width="3"
              font="https://cdn.aframe.io/fonts/mozillavr.fnt"
            ></a-text>
          </a-entity>

          <a-entity
            id="vr-button"
            :visible="!showBubble && (useVr && currentClassRoom === 2)"
            class="clickable"
            geometry="primitive: plane; height: 0.5; width: 1.5"
            material="color: #42b983"
            position="-1 -2 3"
            rotation="-90 150 0"
            @click="moveClass(3)"
            event-set__enter="_event: mouseenter; material.color: #70e4c2"
            event-set__leave="_event: mouseleave; material.color: #42b983"
          >
            <a-text
              value="< Go"
              align="center"
              color="#fff"
              position="0 0.05 0.01"
              width="3"
              font="https://cdn.aframe.io/fonts/mozillavr.fnt"
            ></a-text>
          </a-entity>

          <!-- tai -->
          <a-entity
            id="vr-button"
            :visible="!showBubble && (useVr && currentClassRoom === 3)"
            class="clickable"
            geometry="primitive: plane; height: 0.5; width: 1.5"
            material="color: #42b983"
            position="-4 0 -2"
            rotation="-90 -40 0"
            @click="moveClass(2)"
            event-set__enter="_event: mouseenter; material.color: #70e4c2"
            event-set__leave="_event: mouseleave; material.color: #42b983"
          >
            <a-text
              value="< Go"
              align="center"
              color="#fff"
              position="0 0.05 0.01"
              width="3"
              font="https://cdn.aframe.io/fonts/mozillavr.fnt"
            ></a-text>
          </a-entity>

        <!-- 文案 -->
        <a-entity
          v-if="assetsLoaded && !showBtn"
          id="vr-button-img"
          :visible="useVr"
          class="clickable"
          :geometry="{ primitive: 'plane', height: `${currentImg === 'img1'? 1: (currentImg === 'img2'? .6: 1)}`, width: 3 }"
          :material="{ src:`#${currentImg}`, transparent: true }"
          position="0 0 -3"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
        </a-entity>

        <!-- Bubbles -UI -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble1; opacity: 1; transparent: true`"
          position="2.1 .7 -3"
          rotation="0 -30 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -冒險者 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble2; opacity: 1; transparent: true`"
          position="1.6 1.5 -3"
          rotation="0 -10 0"
          @click="changePage('tai')"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -vr -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble3; opacity: 1; transparent: true`"
          position="-2.5 2 -3"
          rotation="0 30 0"
          @click="changePage('han')"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -文本分析 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble4; opacity: 1; transparent: true`"
          position="-1.9 1 -3"
          rotation="0 10 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles - 統計 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble5; opacity: 1; transparent: true`"
          position="-3 1 -3"
          rotation="0 30 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles - 3D -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble6; opacity: 1; transparent: true`"
          position="2.3 2 -3"
          rotation="0 -30 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -策展 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble7; opacity: 1; transparent: true`"
          position="2.8 1.5 -3"
          rotation="0 -30 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -社群 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble8; opacity: 1; transparent: true`"
          position="3.5 2 -3"
          rotation="0 -30 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- Bubbles -音樂 -->
        <a-entity
          v-if="assetsLoaded && showBubble"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.4"
          :material="`src: #bubble9; opacity: 1; transparent: true`"
          position="-1.5 2.2 -3"
          rotation="0 10 0"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
        </a-entity>

        <!-- 下一步按鈕 -->
        <a-entity
          v-if="!showBubble && (assetsLoaded && showBtn)"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.8"
          material="color: #ffffff; opacity: 0.6"
          position="2.5 .5 -3"
          @click="goBubblePage"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
          <a-text
            value="Next >"
            align="center"
            color="#000"
            position="0 0.1 0.01"
            width="5"
            font="https://cdn.aframe.io/fonts/mozillavr.fnt"
          ></a-text>
        </a-entity>

        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>

      

      <audio id="audioNarration" ref="audio">
        <source src="/audios/speech2.m4a" type="audio/mp4" />
      </audio>
      <audio ref="audio2" id="audioNarration2">
        <source src="/audios/speech3.mp3" type="audio/mp4" />
      </audio>
    </div>

    <!-- <div v-else class="section1">
      <div class="section1_content">
        <div class="title"><p class="typing-effect">最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發</p></div>
        <div class="box">
          <button class="pre">< Pre</button>
          <button class="next">Next ></button>
        </div>
      </div>
    </div> -->
  </div>
  
</template>