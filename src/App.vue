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
    blockquote,
    body,
    button,
    caption,
    dd,
    div,
    dl,
    dt,
    fieldset,
    figure,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    html,
    input,
    legend,
    li,
    menu,
    ol,
    p,
    pre,
    table,
    td,
    textarea,
    th,
    ul {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
</style>
