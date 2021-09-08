<template>
  <div class="spring">
    <h3 class="title">春节回家</h3>
    <div class="selected">
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import axios from '../utils/request'
import api from '../api/index'
export default {
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  mounted(){
      axios.get('http://iwenwiki.com/wapicovid19/query.php?from=10003&to=10004&key=171e165a7d991c5f6ecd5194c54778ef').then(res=>{
      })
    //   api.getSpring({
    //       key: "171e165a7d991c5f6ecd5194c54778ef"
    //   }).then((res)=>{
    //       console.log(res)
    //   },err=>{
    //       console.log(err)
    //   })
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
  },
};
</script>
<style lang="scss" scope>
.spring {
  width: 100%;
  height: 300px;
  background: #fff;
  > .title {
    padding-left: 16px;
  }
}
</style>