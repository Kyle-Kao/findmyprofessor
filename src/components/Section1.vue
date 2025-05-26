<script setup>
import { ref, onMounted } from 'vue';
import { SpeechFn } from '../assets/utils/functions/speech';

const props = defineProps({
  useVr: {
    type: Boolean,
    default: false
  }
})

const video = ref(null)
const audio = ref(null)

const playMedia = () => {
  const vid = video.value
  const aud = audio.value
  vid.play()
  aud.play()

  aud.addEventListener('ended', () => {
  // 停止影片播放
  if (vid && !vid.paused) {
    vid.pause();
  }
  
})
}


onMounted(() => {
  // SpeechFn("最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發", 'zh-TW', 1.2, 1, 1)

  // const video = document.getElementById('video360')
  // // 手動播放，避免自動播放失效
  // video?.play()
})
</script>

<template>
  <div class="section1">
    <!-- <a-scene>
      <a-sky src="https://kyle-kao.github.io/findmyprofessor/test1.jpg" rotation="0 -90 0"></a-sky>
    </a-scene> -->

    <!-- 影片  -->
    <video
    ref="video"
      id="video360"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      crossorigin="anonymous"
      style="display: none"
    >
      <source src="/jesus.mp4" type="video/mp4" />
    </video>

    <audio id="audioNarration" ref="audio">
      <source src="/audios/speech1.m4a" type="audio/mp4" />
    </audio>

    <a-scene>
      <a-sky src="#video360" rotation="0 -90 0"></a-sky>

      <a-entity
      id="vr-button"
      v-if="useVr"
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
    <button v-else class="clickbtn" @click="playMedia()">播放</button>

      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>

    <!-- <div class="section1_content">
      <div class="title"><p class="typing-effect">最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發</p></div>
      <div class="box">
        <button class="pre">< Pre</button>
        <button class="next">Next ></button>
      </div>
    </div> -->
  </div>
</template>