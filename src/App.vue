<script setup>
import { ref, onMounted } from 'vue'
import { SpeechFn } from './assets/utils/functions/speech';
import Section99 from './components/Section99.vue';
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Section4 from './components/Section4.vue'
import Section5 from './components/Section5.vue'
import Section6 from './components/Section6.vue'
import Entry from './components/Entry.vue'
import Intro from './components/Intro.vue';
import Des from './components/Des.vue';

const currentSection = ref(0)
const useVR = ref(false)

const enterVR = () => {
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

const nextPage = (page) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(window.location.search)
  currentSection.value = parseInt(params.get('section')) || 0

  url.searchParams.set('section', page)
  window.location.href = url.toString()
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  // currentSection.value = params.get('section') || 0
  currentSection.value = parseInt(params.get('section')) || 0

  const autoAsk = false // 想要自動問的話，改成 true
  if (autoAsk) {
    if (confirm('是否啟用 VR 模式？')) enterVR()
    else skipVR()
  }
})
</script>

<template>
  <div>
    <div style="width: 100dvw; background-color: #000; position: sticky; left: 0; top: 0; z-index: 3;">
      <div class="navBar">
        <div class="left" @click="nextPage(0)">Find</div>
        <div class="right">
          <div @click="nextPage(101)">介紹</div>
          <div @click="nextPage(102)">說明</div>
          <div @click="nextPage(1)" class="go">GO</div>
        </div>
      </div>
    </div>

    <Entry v-if="currentSection === 0"/>

    <Section1 v-else-if="currentSection === 1" :use-vr="true"/>

    <Section2 v-else-if="currentSection === 2" :use-vr="true"/>

    <Section3 v-else-if="currentSection === 3" :use-vr="true"/>

    <Section4 v-else-if="currentSection === 4" :use-vr="true"/>

    <Section5 v-else-if="currentSection === 5" :use-vr="true"/>

    <Section6 v-else-if="currentSection === 6" :use-vr="true"/>

    <Section99 v-else-if="currentSection === 99" :use-vr="useVR"/>

    <Intro v-else-if="currentSection === 101" />

    <Des v-else-if="currentSection === 102" />

    <section v-if="false" class="controller">
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
