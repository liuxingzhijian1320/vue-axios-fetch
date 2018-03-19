<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="outer">
      <div class="inner">我scss的写法</div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import rem from './assets/scripts/rem';
export default {
  name: 'App',
  //适配的写法
  beforeMount() {
    rem();
  },
};
</script>

<style lang="scss">
@import '~src/assets/styles/_reset.scss';
@import '~src/assets/styles/_mixin.scss';
[v-cloak] {
  display: none;
}
body {
  font-size: 0.28rem;
}
.outer {
  .inner {
    color: red;
    font-size: 0.26rem;
    text-align: center;
  }
}
</style>
