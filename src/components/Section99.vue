<script setup>
import { ref, onMounted } from 'vue'
import { SpeechFn } from '../assets/utils/functions/speech'

const props = defineProps({
  useVr: {
    type: Boolean,
    default: false
  }
})

const images = [
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg',
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg',
  'https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg'
]

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
</script>

<template>
  <div>
    <section v-if="pageNum === 0" class="sceneSection sceneSection-1">
      <a-scene :raycaster="useVr ? 'objects: .clickable' : null">
        <!-- <video id="video360" autoplay loop muted playsinline crossorigin="anonymous">
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-9584/1080p.mp4" type="video/mp4" />
        </video>
        <a-sky src="#video360"></a-sky> -->

        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"></a-sky>

        <a-entity
          id="vr-button"
          v-if="useVr"
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

        <a-camera v-if="useVr">
          <a-cursor></a-cursor>
        </a-camera>
        <a-camera v-else></a-camera>
      </a-scene>
    </section>

    <section v-else-if="pageNum === 1" class="sceneSection sceneSection-2">
      <a-scene :raycaster="useVr ? 'objects: .clickable' : null">
        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"></a-sky>

        <a-entity
          id="vr-button"
          v-if="useVr"
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

        <a-camera v-if="useVr">
          <a-cursor></a-cursor>
        </a-camera>
        <a-camera v-else></a-camera>
      </a-scene>
    </section>

    <section v-else-if="pageNum === 2" class="sceneSection sceneSection-2">
      <a-scene :raycaster="useVr ? 'objects: .clickable' : null">
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