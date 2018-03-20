<template>
  <div class='proxyTable'>
    <div class="title"> proxyTable 反向代理</div>
    <button class="btn" @click="getData">获取数据</button>
    <div class="" v-for="(item,index) in categoryData.posts" :key="index">
      我是数据{{index}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'proxyTable',
  data() {
    return {
      categoryData: {},
    };
  },
  methods: {
    async getData() {
      await this.fetch(
        {
          url:
            '/api/stream/date/2017-12-19?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
          // '/api/artisan/count/artisan',
          method: 'GET',
        },
        { loading: true, alertInfoError: false, alertServerError: false }
      )
        .then(res => {
          console.log(res);
          this.categoryData = res.data;
        })
        .catch(error => {
          console.log(error);
        });
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
