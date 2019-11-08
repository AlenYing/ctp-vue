<template>
    <div>
        <div class="main-title">
            <h1 style="text-align: center">CALL TO POWER</h1>
            <h2 style="text-align: center">Login</h2>
        </div>

        <div class="login-account shadow radius">
            <div class="input-icon"><i class="icon ">&#xe616;</i></div>

            <input v-model="account" class="login-account-input radius">
        </div>
        <div class="login-account shadow radius">
            <div class="input-icon"><i class="icon ">&#xe64c;</i></div>
            <input type="password" v-model="password" class="login-account-input radius">
        </div>
        <div class="login-button-box radius shadow" @click="send">登录
        </div>

    </div>
</template>

<script>
  import "../mock"
  export default {
    name: "HelloWorld",
    data() {
      return {
        account: "",
        password: ""
      };
    },
    methods: {
      send: function () {
        this.$router.push('/main')
      }
    }
  };
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1280489 */
        src: url('//at.alicdn.com/t/font_1280489_womsf1omoac.eot');
        src: url('//at.alicdn.com/t/font_1280489_womsf1omoac.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1280489_womsf1omoac.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1280489_womsf1omoac.woff') format('woff'),
        url('//at.alicdn.com/t/font_1280489_womsf1omoac.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1280489_womsf1omoac.svg#iconfont') format('svg');
    }


    main {
        box-sizing: border-box;
        position: relative;
        height: 90vh;
        width: 90vw;
        margin: 0 auto;
        padding: 2vh 2vh 2vh 2vh;
    }

    input {
        outline-width: 0;
        outline-style: none;
        outline-color: invert;
        outline-color: transparent;
        border: none;
        border-style: none;
        box-shadow: none;
        text-shadow: none;
        -webkit-appearance: none;
        -webkit-user-select: text;
    }



    .main-title {
        position: relative;
        width: 80vw;
        height: 10vh;
        margin: 0 auto;
        top:8vh;
    }

    .main-title img {
        width: 100%;
        height: 20vh;
    }


    .login-account {
        top: 15vh;
        position: relative;
        background-color: #fff;
        width: 70vw;
        margin: 0 auto;
        margin-bottom: 5vh;
        height: 13vw;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
    }

    .login-account .login-account-input {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        font-size: 4vw;
        padding-left: 13vw;
    }

    .icon {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .input-icon {
        position: absolute;
        width: 13vw;
        padding-left: 3vw;
        text-align: center;
    }

    .input-icon i {
        position: relative;
        line-height: 13vw;
        font-size: 6vw !important;
        color: #b3b3b3 !important;
    }

    .login-button-box {
        position: relative;
        top: 16vh;
        width: 70vw;
        margin: 0 auto;
        height: 13vw;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        line-height: 13vw;
        font-size: 4.5vw;
        font-weight: 900;
        background-image: linear-gradient(135deg, #90F7EC 10%, #32CCBC 100%);
    }
</style>
