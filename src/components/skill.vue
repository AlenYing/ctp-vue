<template>
    <div class="main-bg">
        <div class="main-page radius shadow">
            <h2 style="color: white;margin-bottom: 4vh;">技能表</h2>
            <div class="skillblock">
                <div class="main-info" @click="choosePerson()">使用子弹</div>
            </div>
            <div class="skillblock">
                <div class="main-info">对仿生人使用模块</div>
            </div>
        </div>
        <personlist v-if="show"></personlist>
    </div>
</template>
<script>
  import personlist from "./personlist";

  export default {
    name: "skill",
    components: {
      "personlist": personlist
    },
    data() {
      return {
        name: "",
        career: "",
        show:false
      };
    },
    methods: {
      choosePerson: function () {
        window.console.log(222);
          this.show = true;
      },

    }
  };

</script>

<style scoped>
    .main-bg {
        position: absolute;
        width: 100%;
        height: 100%;
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
        background-position: -120px -100px;
        padding: 5vh 5vh 5vh 5vh;
    }

    .main-info {
        width: 100%;
        height: 100%;
        font-weight: bold;
        position: relative;
        float: left;
        font-size: 3vh;
        color: white;
        margin-top: 1vh;
        text-align: center;
    }

    .main-info:nth-child(2n) {
        width: 60vw;
    }

    .skillblock {
        width: 100%;
        margin: 2vh 2vh 0vh 0vh;
        height: 10vh;
        background-color: rgba(3, 3, 3, 0.6);
        text-align: center;
    }

    .skillblock:hover {
        box-shadow: 5px 8px 10px black;
    }
</style>
