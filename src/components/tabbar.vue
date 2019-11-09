<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>
        <div class="routerTabbar">
            <div class="gobutton" @click="go('info')"></div>
            <div class="gobutton" @click="go('skill')"></div>
            <div class="gobutton" @click="go('')"></div>
            <div class="gobutton" @click="go('')"></div>

        </div>
    </div>
</template>


<script>
  export default {
    name: "tabbar",
    data() {

    },
    methods: {
      go: function (detail) {
        if (this.$route.path != `/main/${detail}`)
        // window.console.log(this.$route.path);
          this.$router.push(`/main/${detail}`)
      }
    }
  }
</script>
<style scoped>
    .routerTabbar {
        /*outline: 1px solid red;*/
        position: fixed;
        bottom: 2vh;
        height: 8vh;
        width: 80%;
        padding: 1vh 2vh 1vh 2vh;
        left:10vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .gobutton {
        width:7vh;
        height:7vh;
        border-radius: 50%;
        /*background-image: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);*/
        background-color: #1819b0;
    }

    .gobutton:nth-child(1)
    {
        margin-left: unset;
    }
</style>
