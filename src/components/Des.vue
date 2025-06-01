<script setup></script>

<template>
  <div class="Intro">
    <div class="content">
      <div class="introSection">
        <div class="introSection__title">使用說明</div>
        <div class="introSection__des">
          畫面中央的小黑點為你的「視覺中心指標」。
          <br>
          請將它移動至畫面上的按鈕或標記處，並停留數秒，即可完成選擇。
        </div>
        <div class="thripleImg">
          <img src="@/assets/imgs/step1.png" alt="">
          <img src="@/assets/imgs/step2.png" alt="">
          <img src="@/assets/imgs/step3.png" alt="">
        </div>
        <div class="introSection__des">
          若你使用的是網頁狀態下，則需要透過點擊！
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
    .thripleImg{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 10px;
      img{
        width: calc(100% /3);
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
    .thripleImg{
      flex-direction: column;
      img{
        width: 100% !important;
        height: auto;
      }
    }
  }
  // 
</style>