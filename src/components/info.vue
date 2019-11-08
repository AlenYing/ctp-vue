<template>
    <div class="main-bg">
            <div class="main-page radius shadow">
                <h2 style="color: white">艾麦灵市身份卡</h2>
                <div class="main-info">姓名：</div>
                <div class="main-info">应捷</div>
                <div class="main-info">阶级：</div>
                <div class="main-info">军人阶层</div>
                <div class="main-info">职业：</div>
                <div class="main-info">军长</div>
            </div>
    </div>
</template>

<script>
  // import {Tabbar, TabItem} from 'mint-ui';

  export default {
    name: "test-main",
    data() {
      return {
        name: "",
        career: ""
      }
    }
  }
</script>

<style scoped>
    .main-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        /*background-color: #222831;*/
    }

    .shadow {
        box-shadow: 5px 8px 10px black;
    }

    .radius {
        border-radius: 20px;
    }

    .main-page {
        position: absolute;
        left: 10vw;
        top: 7vh;
        width: 80vw;
        height: 80vh;
        background: url("../assets/a872d4d3d85a3af2f7dcc25aed28bacb.jpg") no-repeat;
        background-position: -50px -50px;
        padding: 5vh 5vh 5vh 5vh;
    }

    .main-info {
        font-weight: bold;
        position: relative;
        float: left;
        font-size: 3vh;
        color: white;
        margin-top: 1vh;

    }

    .main-info:nth-child(2n+1) {
        width: 40vw;
    }
</style>
