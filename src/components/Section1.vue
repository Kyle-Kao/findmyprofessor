<script setup>
import { onMounted } from 'vue';
import { SpeechFn } from '../assets/utils/functions/speech';

onMounted(() => {
  SpeechFn("最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發", 'zh-TW', 1.2, 1, 1)
})
</script>

<template>
  <div class="section1">
    <a-scene>
      <a-sky src="/findmyprofessor/public/test1.JPG" rotation="0 -90 0"></a-sky>
    </a-scene>

    <div class="section1_content">
      <div class="title"><p class="typing-effect">最後的晚餐動畫，播放完畢後，顯示下一步驟 Topic 暫放next作觸發</p></div>
      <div class="box">
        <button class="pre">< Pre</button>
        <button class="next">Next ></button>
      </div>
    </div>
  </div>
</template>