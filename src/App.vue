<script setup>
import { ref, onMounted } from 'vue'
import { SpeechFn } from './assets/utils/functions/speech';
import Section1 from './components/Section1.vue';

const currentSection = ref(1)
const useVR = ref(false)

const enterVR = () => {
  SpeechFn("我會講話你是不是嚇一跳？", 'zh-TW', 1, 1.6, 1)

  useVR.value = true
  const enterVRButton = document.querySelector('a-scene')?.components?.vrModeToggle?.enterVRButton
  enterVRButton?.click()
}

const skipVR = () => {
  useVR.value = false

  const scene = document.querySelector('a-scene')
  if (scene && scene.components.raycaster) {
    scene.removeAttribute('raycaster')
  }
  const cam = document.querySelector('a-camera')
  if (cam && cam.components.cursor) {
    cam.removeAttribute('cursor')
  }
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  currentSection.value = parseInt(params.get('section')) || 1

  const autoAsk = false // 想要自動問的話，改成 true
  if (autoAsk) {
    if (confirm('是否啟用 VR 模式？')) enterVR()
    else skipVR()
  }
})
</script>

<template>
  <div>
    <Section1 v-if="currentSection === 1" :use-vr="useVR"/>

    <section>
      <h1>區塊2</h1>
    </section>

    <section class="controller">
      <div class="prompt-box">
        <p>是否要啟用 VR 模式？</p>
        <button @click="enterVR">是</button>
        <button @click="skipVR">否</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.sceneSection {
  width: 100vw;
  height: 100vh;
  position: relative;
}
a-scene {
  width: 100%;
  height: 100%;
  display: block;
}

/* VR 問題視窗樣式 */
.prompt-box {
  position: absolute;
  bottom: 2%;
  left: 20px;
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  text-align: center;
  z-index: 2;
}
.prompt-box button {
  margin: 0 10px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
