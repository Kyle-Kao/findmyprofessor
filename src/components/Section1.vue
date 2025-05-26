<script setup>
import { onMounted } from 'vue';
import { SpeechFn } from '../assets/utils/functions/speech';

onMounted(() => {
  SpeechFn("最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發", 'zh-TW', 1.2, 1, 1)

  const video = document.getElementById('video360')
  // 手動播放，避免自動播放失效
  video?.play()
})
</script>

<template>
  <div class="section1">
    <a-scene>
      <a-sky src="https://kyle-kao.github.io/findmyprofessor/test1.jpg" rotation="0 -90 0"></a-sky>
    </a-scene>

    <!-- 影片  -->
    <!-- <video
      id="video360"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      crossorigin="anonymous"
      style="display: none"
    >
      <source src="/bubble.mp4" type="video/mp4" />
    </video>
    <a-scene>
      <a-sky src="#video360" rotation="0 -90 0"></a-sky>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene> -->

    <div class="section1_content">
      <div class="title"><p class="typing-effect">最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發</p></div>
      <div class="box">
        <button class="pre">< Pre</button>
        <button class="next">Next ></button>
      </div>
    </div>
  </div>
</template>