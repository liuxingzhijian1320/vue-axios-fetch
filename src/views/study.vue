<template>
  <div class="study">
    <div class="cirlce" v-if="show"></div>
    <div class="study-list">
      mapState:{{count}}
      <div></div>
      mapGetters:{{name}}
      <div></div>
      总结： 如果从state直接出来的数据需要加上命名空间的，如果从getters出来的名字一定要唯一性
      <div></div>
      <!-- 直接获取store的数据 {{store.state.study.testStore}} -->
      <div></div>
      <button class="btn-list" @click="add">增加</button>
      <button class="btn-list" @click="reduce">减少</button>
      <button class="btn-list" @click="params">加100</button>
      <button class="btn-list" @click="actionUpdateStateFuc">action修改state</button>
      <button class="btn-list" @click="promiseActionFuc">promise-action</button>
      <button class="btn-list" @click="asyncAwait">async / await</button>
      <div></div>
      总结：action的方法 可以通过store.dispatch的方法来调用的方法
      <div></div>
      <button class="btn-list" @click="mutationsFuc">mutations</button>
      <div></div>
      总结：Mutation 必须是同步函数
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import store from '../store';
console.info('store', store.state.study.testStore);
export default {
  name: 'study',
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      count: state => state.study.count,
    }),
    ...mapGetters(['name']),
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'paramsCrement',
      'actionUpdateState',
      'promiseAction',
    ]),
    ...mapMutations(['decrementMutations']),
    // 增加
    add() {
      // 方法一
      // store.dispatch('increment');
      // 方法二
      this.increment();
    },
    // 减少
    reduce() {
      // 方法一
      store.dispatch('decrement');
      // 方法二
      // this.decrement();
    },
    // 传递参数（荷载）
    params() {
      // store.dispatch('paramsCrement', {
      //   data: 100,
      // });
      this.paramsCrement({ data: 100 });
    },
    // action修改state
    actionUpdateStateFuc() {
      this.actionUpdateState();
    },
    // promise下的action操作
    promiseActionFuc() {
      // store.dispatch('promiseAction').then(() => {})
      this.promiseAction().then(() => {
        console.info('11');
        // setTimeout(() => {
        this.show = true;
        // }, 1000);
      });
    },
    // async / await
    asyncAwait() {
      alert('文档有');
    },
    // mutations 直接修改数据
    mutationsFuc() {
      // 2种写法，并且也是可以在传递荷载的
      // store.commit('decrementMutations');
      this.decrementMutations();
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.study-list {
  width: 100%;
  padding: 0.3rem;
  border-bottom: 1px solid #dfdfdf;
}
.btn-list {
  width: 2rem;
  height: 1rem;
  background-color: #dfdfdf;
}
.cirlce {
  width: 1rem;
  height: 1rem;
  background-color: red;
  border-radius: 50%;
}
</style>
