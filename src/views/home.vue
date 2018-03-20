<template>
  <div class="home">
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

<style lang="scss">
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
