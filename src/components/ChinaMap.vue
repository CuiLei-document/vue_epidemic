<template>
  <div>
    <!-- <h3 class="title"><i></i> 疫情地图</h3> -->
    <div class="chinaMap"></div>
  </div>
</template>

<script>
import axios from "../utils/request.js";
export default {
  mounted() {
    axios.get("/news/wap/fymap2020_data.d.json").then(
      (res) => {

        let arrCity = [];
        let lists = res.data.data.list;
        for (let i = 0; i < lists.length; i++) {
          let temp = {
            name: lists[i].name,
            value: lists[i].value,
            // itemStyle: {
            //   normal: {
            //     areaColor: lists[i].value,
            //   },
            // },
          };
          arrCity.push(temp);
        }
        this.$charts.chinaMap(".chinaMap", arrCity);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  
};
</script>
<style lang="scss" scope >
.chinaMap {
  width: 375px;
  height: 400px;
}
.worldMap {
  width: 375px;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  // padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>