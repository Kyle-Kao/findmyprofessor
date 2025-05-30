<script setup>
import prof1 from '@/assets/imgs/prof1.png'
import prof2 from '@/assets/imgs/prof2.png'
import prof3 from '@/assets/imgs/prof3.png'
import prof4 from '@/assets/imgs/prof4.png'
import prof5 from '@/assets/imgs/prof5.png'
import prof6 from '@/assets/imgs/prof6.png'
import prof7 from '@/assets/imgs/prof7.png'
import prof8 from '@/assets/imgs/prof8.png'
import prof9 from '@/assets/imgs/prof9.png'
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const professors = [
  {
    name: '陳圳卿',
    title: '教授 / 系主任',
    img: prof1,
    en: 'Chun-Ching Chen'
  },
  {
    name: '王聖銘',
    title: '副教授',
    img: prof2,
    en: 'Wang, Sheng-Ming'
  },
  {
    name: '戴楠青',
    title: '教授',
    img: prof3,
    en: 'Tai, Nan-Ching'
  },
  {
    name: '韓秉軒',
    title: '副教授',
    img: prof4,
    en: 'Han Ping-Hsuan'
  },
  {
    name: '吳可久',
    title: '教授 / 院長',
    img: prof5,
    en: 'Ko-Chiu Wu'
  },
  {
    name: '曹筱玥',
    title: '教授',
    img: prof6,
    en: 'Hsiao-Yueh Tsao'
  },
  {
    name: '龍祈澔',  
    title: '副教授',
    img: prof7,
    en: 'Lung, Chi-Hao'
  },
  {
    name: '黃儀婷',
    title: '教授',
    img: prof8,
    en: 'Yi-Ting Huang'
  },
  {  
    name: '鄭建文',
    title: '副教授',
    img: prof9,
    en: 'Chien-Wen Cheng'
  }
]

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

const activeIndex = ref(0)

const currentImage = computed(() => {
  // 根據 activeIndex 對應不同圖片
  const images = ['class3', 'class3', 'class2', 'class1', 'class3','class3','class3','class3','class3']
  return images[activeIndex.value]
})

const props = defineProps({
  useVr: {
    type: Boolean,
    default: false
  }
})

const assetsLoaded = ref(false);
const showBtn = ref(false);
const showSwiper = ref(false);
const currentImg = ref('img1')
const currentBg = ref('class3')
const video = ref(null)
const video1 = ref(null)
const audio = ref(null)

const playMedia = () => {
  const vid = video.value
  const vid1 = video1.value
  const aud = audio.value
  vid.play()
  aud.play()

  setTimeout(() => {
    assetsLoaded.value = true;
  },100)

  aud.addEventListener('ended', () => {
    showSwiper.value = true
  // 停止影片播放
  if (vid && !vid.paused) {
    vid.pause();
  }
})
}

const changePage = (page) => {
  const url = new URL(window.location.href)
  url.searchParams.set('section', page)
  window.location.href = url.toString()
}

onMounted(() => {
  // currentBg.value = 'class3'

  // const assets = document.querySelector('a-assets');
  // if (assets) {
  //   assets.addEventListener('loaded', () => {
  //     // assetsLoaded.value = true;
  //     // 載入完成後才顯示圖1
  //     currentImg.value = 'img1';
  //   });
  // }

  // const video = document.getElementById('myVideo')
  // // 手動播放，避免自動播放失效
  // video?.play()
})
</script>

<template>
  <div>
    <div class="bg-container" :class="{ showSwiper: showSwiper }">
      <h2 class="title">選擇心目中的教授</h2>
      <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="3"
        :space-between="30"
        :centeredSlides="true"
        :watchSlidesProgress="true"
        :slideToClickedSlide="true"
        navigation
        pagination
        class="mySwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(prof, index) in professors" :key="index" :class="{ activeSlide: index === activeIndex }">
          <div class="card">
            <img :src="`${prof.img}`" alt="prof" class="photo" />
            <div class="info">
              <div>{{ prof.name }}</div>
              <div>{{ prof.en }}</div>
              <div>{{ prof.title }}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="section0">
      <a-scene>
        <a-assets>
          <img id="class1" src="/class/class1.JPG" />
          <img id="class2" src="/class/class2.JPG" />
          <img id="class3" src="/class/class3.JPG" />
          <video ref="video" id="myVideo" src="/star1.mp4" crossorigin="anonymous" loop></video>
          <img id="img1" src="/selectProf.png" />
          <img id="img2" src="/text4.png" />
          <video ref="video1" id="video360" src="/bubble.mp4" loop crossorigin="anonymous"></video>
        </a-assets>

        <!-- 影片  -->
        <a-video
          v-if="false"
          src="#myVideo"
          width="6"
          height="3.5"
          position="0 2 -3.5"
          autoplay
          loop
          crossorigin="anonymous"
          playsinline
        ></a-video>

        <a-sky :src="`#${currentImage}`" rotation="0 -90 0"></a-sky>
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

        <!-- 文案 -->
        <a-entity
          v-if="false"
          id="vr-button-img"
          :visible="useVr"
          class="clickable"
          geometry="primitive: plane; height: .6; width: 3"
          :material="`src: #${currentImg}; transparent: true`"
          position="0 0 -3"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
        </a-entity>

        <!-- 上一頁 -->
      <a-entity
        v-if="assetsLoaded && showSwiper"
        class="clickable"
        geometry="primitive: plane; height: 0.4; width: 0.8"
        material="color: #ffffff; opacity: 0.6"
        position="-2.5 .5 -3"
        @click="changePage(1)"
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
      v-if="assetsLoaded && showSwiper"
      class="clickable"
      geometry="primitive: plane; height: 0.4; width: 0.8"
      material="color: #ffffff; opacity: 0.6"
      position="2.5 .5 -3"
      @click="changePage(3)"
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
        <source src="/audios/speech5.mp3" type="audio/mp4" />
      </audio>

      <a-scene v-if="false">
        <a-assets>
          <img id="img1" src="/text1.png" />
          <img id="img2" src="/text2.png" />
        </a-assets>
        
        <a-sky src="#video360" rotation="0 -90 0"></a-sky>

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

      <a-entity
        v-if="assetsLoaded"
        id="vr-button-img"
        :visible="useVr"
        class="clickable"
        geometry="primitive: plane; height: 1.3; width: 4"
        :material="`src: #${currentImg}; opacity: .8; transparent: true`"
        position="0 .8 -3"
        event-set__enter="_event: mouseenter; material.color: #70e4c2"
        event-set__leave="_event: mouseleave; material.color: #42b983"
      >
      </a-entity>

      <!-- <button v-else class="clickbtn" @click="playMedia()">播放</button> -->

        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
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

<style lang="scss">

.bg-container {
  display: none;
  user-select: none;
  z-index: 3;
  position: absolute;
  min-height: auto;
  max-width: 700px;
  padding: 2rem;
  text-align: center;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.showSwiper{ 
    display: block;
  }
}
.title{
  position: absolute;
  top: -65%;
  left: 50%;
  transform: translateX(-50%);
}
.swiper-horizontal{
  padding: 20px;
}
.mySwiper .swiper-slide {
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: scale(0.9);
  opacity: 0.6;
}
.mySwiper .swiper-slide.activeSlide {
  transform: scale(1.05);
  opacity: 1;
  z-index: 10;
}
.title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
.card {
  background: white;
  border: 4px solid black;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}
.photo {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.info {
  margin-top: 1rem;
}
</style>