<script setup>
const nextPage = (page) => {
  const url = new URL(window.location.href)
  url.searchParams.set('section', page)
  window.location.href = url.toString()
}
</script>

<template>
  <div class="entry">
      <!-- <div style="width: 100dvw; background-color: #000; position: sticky; left: 0; top: 0; z-index: 3;">
        <div class="navBar">
          <div class="left">Find</div>
          <div class="right">
            <div>Home</div>
            <div>Intro</div>
            <div>Record</div>
            <div class="go">GO</div>
          </div>
        </div>
      </div> -->
      <div class="entryClass">
        <!-- 背景影片 -->
        <video class="bg-video" autoplay muted loop playsinline>
          <source src="/open_door.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="entryClass_content">
          <div class="title">指導教授在哪裡？</div>
          <span>結合VR與「尋找指導教授」主題的互動體驗遊戲。</span>
          <button class="go" @click="nextPage(1)">GO</button>
        </div>
      </div>
      <div class="entrySelect">
        <div class="entrySelect_content">
          <div class="title">選擇有興趣的主題</div>
          <div class="box">
            <div>
              <div class="icon"><img src="../assets/imgs//select1.png" alt=""></div>
              <div class="des">選主題</div>
            </div>
            <div>
              <div class="icon"><img src="../assets/imgs/select.png" alt=""></div>
              <div class="des">選老師</div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <p>Copyright &copy; 2025. All rights reserved</p>
      </footer>
    </div>
</template>