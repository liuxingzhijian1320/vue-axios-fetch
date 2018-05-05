<template>
  <div class="home">

    <router-link class="study" :to="{name:'study'}" tag="div">study</router-link>

    <ul class="table-ul">
      <router-link :to="{name:'proxyTable'}" tag="li" class="table-list">
        proxyTable
      </router-link>
      <router-link :to="{name:'vuexProxyTable'}" tag="li" class="table-list">
        VUEX-proxyTable
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="scss" scoped>
@keyframes slideBoth {
  from {
    transform: translateX(0) rotate(0deg);
  }
  to {
    transform: translateX(700%) rotate(1200deg);
  }
}
.study {
  width: 1rem;
  height: 1rem;
  background: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: slideBoth 6s infinite linear;
}
.table-ul {
  width: 100%;
  height: 1rem;
  background: #dfdfdf;
  display: flex;
  .table-list {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      color: red;
    }
  }
}
</style>
