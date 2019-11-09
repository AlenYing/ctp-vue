<template>
    <div class="main-bg">
        <div class="main-page radius">
            <h2 style="color: white;margin-bottom: 5vh;">Armarlin ID Card</h2>
            <div class="status">
                <div class="status_text">军长</div>
                <div class="info_title">身份<i class="icon">&#xe696;</i></div>
            </div>
        </div>
        <div class="infolist">
            <div class="infodetailblock">
                <div class="detailTextblock">
                    <div class="detailText">应捷</div>
                <div class="detailTextTitle">姓名</div></div>
            </div>
            <div class="infodetailblock">
                <div class="detailTextblock">
                    <div class="detailText">马甲乙</div>
                    <div class="detailTextTitle">所有仿生人</div></div>
            </div>
        </div>
        <!--            <div class="infodetailblock"></div>-->
        <!--            <div class="infodetailblock"></div>-->
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
        /*background-color: #262e54;*/
        background: linear-gradient(45deg, rgba(5, 6, 13), rgba(5, 6, 13, .5)), url("../assets/solider1.png");
    }

    .status {
        position: relative;
        height: 30vh;
    }

    .status_text {
        font-size: 10vh;
        color: white;
        letter-spacing: 2vh;
        margin-bottom: 6vh;
        font-weight: 600;
    }

    .info_title {
        font-size: 3vh;
        color: white;
        letter-spacing: 1vh;
        padding-left: 2vh;
    }

    .infolist {
        position: relative;
        display: flex;
        height: 15vh;
        background-color: rgba(255,255,255,0.8);
    }

    .infodetailblock {
        /*border-right: 1px solid black;*/
        height: 15vh;
        flex-grow: 1;
    }

    .detailTextblock {
        position: relative;
        height: 10vh;
        top: 2.5vh;
        text-align: center;
        border-right: 1px solid rgba(0,0,0,.4);
    }
    .infodetailblock:nth-last-child(1)>.detailTextblock{
        border: none;
    }

    .detailText {
        font-size: 5vh;
        letter-spacing: 2vh;
        text-align: center;
        margin-bottom: 2vh;
    }

    .detailTextTitle{
        color: grey;
        text-align: center;
        letter-spacing: 1vh;
    }
    .shadow {
        box-shadow: 5px 8px 10px black;
    }

    .radius {
        border-radius: 20px;
    }

    .main-page {
        position: relative;
        left: 10vw;
        top: 3vh;
        width: 80vw;
        height: 48vh;
        padding: 5vh 5vh 5vh 5vh;
        /*background:  url("../assets/solider.png");*/

        /*background-position: -600px -150px;*/
    }

    .main-info {
        /*font-weight: bold;*/
        position: relative;
        float: left;
        font-size: 2vh;
        color: white;
        margin-top: 1vh;

    }

    .main-info:nth-child(2n+1) {
        width: 50vw;
    }
</style>
