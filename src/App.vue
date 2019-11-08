<template>
    <div id="app">
        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  export default {
    name: "app",
    components: {}
  };
</script>

<style>

</style>
