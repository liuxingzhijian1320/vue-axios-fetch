<template>
  <div class='proxyTable'>
    <div class="title"> vuex的写法</div>
    <button class="btn" @click="getData">vuex fetchData</button>
    <div v-for="(item,index) in categoryData.posts" :key="index">
      vuex-----{{index}}
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'proxyTable',
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    ...mapGetters(['categoryData']),
  },
  methods: {
    ...mapActions([
      'fetchHomeList', //页面列表的数据
    ]),
    getData() {
      this.fetchHomeList();
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 0.1rem 0;
}

.btn {
  width: 4rem;
  height: 1rem;
  color: #ffffff;
  margin-top: 0.2rem;
  background-image: -webkit-linear-gradient(
    180deg,
    rgb(254, 62, 98) 0%,
    rgb(255, 103, 131) 100%
  );
  box-shadow: 0px 3px 7px 0px rgba(254, 62, 98, 0.26);
  border-radius: 0.5rem;
  font-size: 0.36rem;
  border: 0;
}
</style>
