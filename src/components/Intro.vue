<script setup></script>

<template>
  <div class="Intro">
    <div class="title">指導教授在哪裡？絕對難不倒你！</div>
    <div class="content">
      <div class="introSection">
        <div class="introSection__title">遊戲簡介</div>
        <div class="introSection__des">玩家將化身為一名即將入學的碩士新生，透過六大關卡展開一場結合 VR 實境探索與名畫互動的「尋找指導教授之旅」。此遊戲打造沉浸式的探索冒險，幫助學生做出選擇，減少迷惘與焦慮。</div>
      </div>
      <div class="introSection">
        <div class="introSection__title">遊戲目標</div>
        <div class="introSection__des">幫助玩家了解不同教授的研究領域與個人風格，探索自身學術興趣，並最終選擇最契合的指導教授。</div>
      </div>
      <div class="introSection">
        <div class="introSection__title">遊戲核心元素</div>
        <ul class="introSection__des">
          <li>VR 互動：沉浸式體驗與互動</li>
          <li>會動的名畫：語音引導或情境對話</li>
          <li>模擬上課體驗：觀看教授上課影片</li>
          <li>個人化偏好建模：依據選擇建議教授名單</li>
        </ul>
      </div>
      <div class="introSection">
        <div class="introSection__title">關卡說明</div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image1.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡一 收到錄取通知</div>
            <p class="first">介紹：<span>玩家將在電腦桌前收到錄取信，畫面中《最後的晚餐》畫作會進行語音引導與規則說明，象徵人生新旅程的開始。</span></p>
            <p class="second">目的：<span>遊戲規則說明</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>這幅畫描繪耶穌與門徒共進最後晚餐、對話與預告未來，象徵人生新階段的開始。</li>
                <li>角色對話設計靈感來自門徒間的不同反應，也象徵學生對指導教授選擇的多元觀點。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>點擊「前往光華館四樓」按鈕，觸發《最後的晚餐》人物語音說明。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image2.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡二 光華館四樓</div>
            <p class="first">介紹：<span>牆上掛著《星夜》，畫中出現教授研究主題的文字泡泡。</span></p>
            <p class="second">目的：<span>幫助玩家探索感興趣的研究方向，建立偏好模型。</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>星夜象徵夢想與直覺，泡泡象徵研究方向的多樣性。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>點擊文字泡泡，選擇感興趣的研究主題。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image3.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡三 設計系館電梯口</div>
            <p class="first">介紹：<span>畫中《吶喊》人物提問後出現文字泡泡，內容包含教授特質。</span></p>
            <p class="second">目的：<span>建立玩家對教授風格的偏好。</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>表達選擇的焦慮與壓力。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>點擊有興趣的風格泡泡。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image4.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡四 教授研究室門口</div>
            <p class="first">介紹：<span>依據前兩關選擇，系統推薦教授門口。</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>《創造亞當》的指尖象徵知識連結與互動的開始。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>點擊「敲門」按鈕，進入模擬課程。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image5.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡五 教授教學現場</div>
            <p class="first">介紹：<span>觀看教授上課影片，模擬與教授互動。</span></p>
            <p class="second">目的：<span>幫助玩家感受是否適合。</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>延續《創造亞當》的互動象徵。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>觀看影片</li>
                <li>選擇教授或返回主選單</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="introSection__box">
          <img src="@/assets/imgs/image6.png" alt="">
          <div class="container">
            <div class="mainTitle">關卡六 系辦門口</div>
            <p class="first">介紹：<span>系統整合玩家偏好資料，推薦適合的指導教授。</span></p>
            <p class="second">目的：<span>呈現個人偏好報告與選擇指導教授</span></p>
            <div class="third">
              設計理念：
              <ul>
                <li>融化鐘象徵時間壓力與決策關鍵。</li>
              </ul>
            </div>
            <div class="forth">
              任務：
              <ul>
                <li>點擊「恭喜找到指導教授，開啟研究生涯」按鈕。</li>
              </ul>
            </div>
            <div class="deco">恭喜找到指導教授，開啟研究生涯</div>
          </div>
        </div>
      </div>
      <div class="introSection">
        <div class="introSection__title">流程圖</div>
        <div class="introSection__img">
          <img src="@/assets/imgs/flow.png" alt="">
        </div>
      </div>
      <div class="introSection">
        <div class="introSection__title">Prototype</div>
        <div class="des">
          <a href="https://www.figma.com/proto/8qzB31PUivZXa3WhPwszOV/%E6%95%99%E6%8E%88?page-id=0%3A1&node-id=1-1266&viewport=3505%2C-2473%2C1&t=vW5C29WZfMlXUCr3-1&scaling=contain&content-scaling=fixed&starting-point-node-id=68%3A670" target="_blank">Figma Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Intro{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
      background-color: #1a237e;
      color: #fff;
      font-size: 32px;
      width: 100dvw;
      height: 75dvh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 900px;
      padding-bottom: 30px;
    }
  }
  .introSection{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 20px 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    &__title{
      color: #1a237e;
      font-size: 30px;
      padding: 10px;
    }
    &__des{
      color: #333;
      font-size: 20px;
      padding: 10px;
    }
    &__box{
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      margin-bottom: 40px;
      img{
        flex: 1;
        width: 300px;
        height: auto;
        border-radius: 20px;
      }
      &>div{
        flex: 3;
      }
      .container{
        .mainTitle{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .first, .second, .third, .forth{
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 10px;
          span{
            font-weight: normal;
            font-size: 18px;
          }
          ul{
            padding-left: 20px;
            li{
              font-weight: normal;
              font-size: 18px;
            }
          }
        }
        .deco{
          background-color: #3949ab;
          color: #fff;
          padding: 10px;
          border-radius: 10px;
        }
      }
    }
    &__img{
      width: 100%;
      img{
        width: 100%;
        height: auto;
      }
    }
    li{
      list-style: disc;
    }
  }

  @media(max-width: 768px) {
    .Intro{
      .title{
        padding: 0 10px;
        font-size: 20px;
        text-align: center;
      }
    }
    .introSection{
      padding: 20px;
    }
    .introSection__box{
      flex-direction: column;
    }
  }
</style>