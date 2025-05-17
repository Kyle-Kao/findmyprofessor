<script setup>
import { ref, onMounted } from 'vue'
import { SpeechFn } from '../assets/utils/functions/speech'

const images = [
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg',
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg',
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg'
]
const useVR = ref(false)
const pageNum = ref(0)
const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

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
        <a-sky :src="images[currentIndex]"></a-sky>

        <!-- 左右控制按鈕 -->
        <a-entity position="0 1.6 -3">
          <a-plane
            position="-1 0 0"
            width="0.5"
            height="0.5"
            color="#FF6347"
            @click="prev"
          >
            <a-text value="Prev" align="center" position="0 0 0.01" color="#fff" width="2"></a-text>
          </a-plane>

          <a-plane
            position="1 0 0"
            width="0.5"
            height="0.5"
            color="#4682B4"
            @click="next"
          >
            <a-text value="Next" align="center" position="0 0 0.01" color="#fff" width="2"></a-text>
          </a-plane>
        </a-entity>

        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
    </section>
  </div>
</template>