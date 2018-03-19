<template>
  <div class='proxyTable'>
    proxyTable 反向代理
    <div class="getData" @click="getData">获取数据</div>
  </div>
</template>
<script>
export default {
  name: 'proxyTable',
  data() {
    return {
      detail: {},
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
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>
<style>
.getData {
  width: 100%;
  height: 1rem;
  background-color: #000;
  color: #ffffff;
  margin-top: 1rem;
}
</style>
