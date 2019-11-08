<template>
    <div>
        <router-link to="/main/info" style="margin-right: 5vh;">前往个人信息</router-link>
        <router-link to="/main/skill">前往技能页面</router-link>
        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
  export default {
    name: "tabbar",
    data() {

    }
  }
</script>
<style scoped>
    router-link {

    }
</style>
