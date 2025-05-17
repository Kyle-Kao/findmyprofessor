<script setup>
import { ref, onMounted } from 'vue'
import Section1 from './components/Section1.vue';

const currentSection = ref(1)

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  currentSection.value = parseInt(params.get('section')) || 1
})
</script>

<template>
  <div>
    <Section1 v-if="currentSection === 1"/>

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
