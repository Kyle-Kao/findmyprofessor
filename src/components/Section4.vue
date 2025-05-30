<script setup>
import { ref, onMounted } from 'vue';
import { SpeechFn } from '../assets/utils/functions/speech';

const props = defineProps({
  useVr: {
    type: Boolean,
    default: false
  }
})

const assetsLoaded = ref(false);
const showBtn = ref(false);
const showBubble = ref(false);
const currentImg = ref('img1')
const currentBg = ref('panorama')
const video = ref(null)
const video1 = ref(null)
const audio = ref(null)

const playMedia = () => {
  const vid = video.value
  const aud = audio.value
  vid.play()
  aud.play()

  setTimeout(() => {
    assetsLoaded.value = true;
  },100)

  aud.addEventListener('ended', () => {
  // 停止影片播放
  if (vid && !vid.paused) {
    vid.pause();
    showBtn.value = true
  }
})
}

const changePage = (page) => {
  const url = new URL(window.location.href)
  const urlParams = new URLSearchParams(window.location.search)
  const prof = urlParams.get('prof')
  url.searchParams.set('section', page)
  url.searchParams.set('prof', prof)
  window.location.href = url.toString()
}

onMounted(() => {
  currentBg.value = 'img1'

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
          <img id="img1" src="/text6.png" />
          <video ref="video" id="video360" src="/touch.mp4" loop crossorigin="anonymous"></video>
        </a-assets>

        <a-sky :src="`#video360`" rotation="0 -130 0"></a-sky>

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

        <!-- 文案 -->
        <a-entity
          v-if="assetsLoaded && !showBtn"
          id="vr-button-img"
          :visible="useVr"
          class="clickable"
          geometry="primitive: plane; height: 1; width: 3"
          :material="{ src:`#${currentImg}`, transparent: true }"
          position="0 0 -3"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
        </a-entity>

        <!-- 上一頁 -->
        <a-entity
          v-if="assetsLoaded && showBtn"
          class="clickable"
          geometry="primitive: plane; height: 0.4; width: 0.8"
          material="color: #ffffff; opacity: 0.6"
          position="-2.5 .5 -3"
          @click="changePage(3)"
          event-set__enter="_event: mouseenter; material.color: #cccccc"
          event-set__leave="_event: mouseleave; material.color: #ffffff"
          animation__hover="property: scale; startEvents: mouseenter; to: 1.1 1.1 1.1; dur: 200"
          animation__leave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 200"
        >
          <a-text
            value="< Pre"
            align="center"
            color="#000"
            position="0 .1 0.01"
            width="5"
            font="https://cdn.aframe.io/fonts/mozillavr.fnt"
          ></a-text>
        </a-entity>

        <!-- 下一步按鈕 -->
      <a-entity
        v-if="assetsLoaded && showBtn"
        class="clickable"
        geometry="primitive: plane; height: 0.4; width: 0.8"
        material="color: #ffffff; opacity: 0.6"
        position="2.5 .5 -3"
        @click="changePage(5)"
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
        <source src="/audios/speech4.mp3" type="audio/mp4" />
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