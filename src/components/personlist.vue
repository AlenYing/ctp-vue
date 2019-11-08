<template>
    <div>
        <div class="list-bg radius">
            <div class="title" @click="back()">返回</div>
            <div v-for="name in personName" :key="name" class="listblock radius">
                <span class="listtext"> {{name.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "personlist",
    data() {
      return {
        personName:
          [
            {name: '宋安邦'},
            {name: '应捷'},
            {name: '嘻嘻嘻哈哈'}
          ]
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .list-bg {
        position: absolute;
        left: 10vw;
        top: 7vh;
        width: 80vw;
        height: 80vh;
        padding: 5vh 5vh 5vh 5vh;
        background-color: white;
    }

    .listblock {
        background-color: white;
        margin: 2vh 2vh;
        height: 10vh;
        text-align: center;
        vertical-align: middle;
        box-shadow: 0 1vw 10vw -4vw rgba(0, 0, 0, .2);
    }
    .listblock:active{
        border: 1px solid black;
    }
    .listtext{
        position: relative;
        line-height: 10vh;
        font-size: 3.5vh;
        font-weight: 600;
    }
</style>
