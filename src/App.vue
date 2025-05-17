<script setup>
import { ref, onMounted } from 'vue'
import { SpeechFn } from './assets/utils/functions/speech'

const useVR = ref(false)
const pageNum = ref(0)

const nextPage = (page) => {
  pageNum.value = page
  switch(page) {
    case 1 :
      SpeechFn("find my Professor", 'en-US', .8, 1, 1)
      break
  }
}

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

// 如果你想 onMounted 時自動問一次（可選）
onMounted(() => {
  const autoAsk = false // 想要自動問的話，改成 true
  if (autoAsk) {
    if (confirm('是否啟用 VR 模式？')) enterVR()
    else skipVR()
  }
})
</script>

<template>
  <div>
    <section v-if="pageNum === 0" class="sceneSection sceneSection-1">
      <a-scene :raycaster="useVR ? 'objects: .clickable' : null">
        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"></a-sky>

        <a-entity
          id="vr-button"
          v-if="useVR"
          class="clickable"
          geometry="primitive: plane; height: 0.5; width: 1.5"
          material="color: #42b983"
          position="0 1.6 -3"
          @click="nextPage(1)"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
          <a-text
            value="findmyProfessor"
            align="center"
            color="#fff"
            position="0 0 0.01"
            width="3"
          ></a-text>
        </a-entity>
        <button v-else class="clickbtn" @click="nextPage(1)">findmyProfessor</button>

        <a-camera v-if="useVR">
          <a-cursor></a-cursor>
        </a-camera>
        <a-camera v-else></a-camera>
      </a-scene>
    </section>

    <section v-else-if="pageNum === 1" class="sceneSection sceneSection-2">
      <a-scene :raycaster="useVR ? 'objects: .clickable' : null">
        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"></a-sky>

        <a-entity
          id="vr-button"
          v-if="useVR"
          class="clickable"
          geometry="primitive: plane; height: 0.5; width: 1.5"
          material="color: #42b983"
          position="0 1.6 -3"
          @click="nextPage(2)"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
          <a-text
            value="findmyProfessor"
            align="center"
            color="#fff"
            position="0 0 0.01"
            width="3"
          ></a-text>
        </a-entity>
        <div v-else class="contentBox">
          <div>
            <p class="typing-effect">findmyProfessor</p>
          </div>
          <button class="findingBtn" @click="nextPage(2)">出發了解教授...</button>
        </div>

        <a-camera v-if="useVR">
          <a-cursor></a-cursor>
        </a-camera>
        <a-camera v-else></a-camera>
      </a-scene>
    </section>

    <section v-else-if="pageNum === 2" class="sceneSection sceneSection-2">
      <a-scene :raycaster="useVR ? 'objects: .clickable' : null">
        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"></a-sky>

        <a-entity
          id="vr-button"
          v-if="useVR"
          class="clickable"
          geometry="primitive: plane; height: 0.5; width: 1.5"
          material="color: #42b983"
          position="0 1.6 -3"
          @click="nextPage(0)"
          event-set__enter="_event: mouseenter; material.color: #70e4c2"
          event-set__leave="_event: mouseleave; material.color: #42b983"
        >
          <a-text
            value="findmyProfessor"
            align="center"
            color="#fff"
            position="0 0 0.01"
            width="3"
          ></a-text>
        </a-entity>
        <div v-else class="contentBox">
          <div>
            <p class="typing-effect">findmyProfessor-page3</p>
          </div>
        </div>

        <a-camera v-if="useVR">
          <a-cursor></a-cursor>
        </a-camera>
        <a-camera v-else></a-camera>
      </a-scene>
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

<style scoped lang="scss">
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
