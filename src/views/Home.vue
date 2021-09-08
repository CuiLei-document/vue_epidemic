<template>
  <div id="home">
    <Header />
    <Information :information="information" />
    <CaseNum :caseNumData="caseNumData" />
    <ChinaMap />
    <MySwiper />
    <SpringHome />
    <input type="text" v-model="message" />输入框
    {{message}}
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Information from "../components/Information.vue";
import CaseNum from "../components/CaseNum.vue";
import ChinaMap from "../components/ChinaMap.vue";
import MySwiper from "../components/MySwiper.vue";
import SpringHome from "../components/SpringHome.vue";
import api from "../api/index";
export default {
  components: { Header, Information, CaseNum, ChinaMap, MySwiper, SpringHome },
  data() {
    return {
      banner: [],
      index: "1",
      information: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },
      caseNumData: {
        modifyTime: "", // 时间
        currentConfirmedCount: "", // 现存确诊人数
        confirmedCount: "", // 累计确诊人数
        suspectedCount: "", // 	累计境外输入人数
        curedCount: "", // 	累计治愈人数
        deadCount: "", //	累计死亡人数
        seriousCount: "", //	现存无症状人数
        currentConfirmedIncr: 0, // 	相比昨天现存确诊人数
        confirmedIncr: 0, // 相比昨天累计确诊人数
        curedIncr: 0, // 相比昨天新增治愈人数
        suspectedIncr: 0, //	新增境外输入人数
        deadIncr: 0, // 累计死亡人数
        seriousIncr: 0, //相比昨天现存无症状人数
      },
    };
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message
      },
      set(value) {
        this.$store.commit('setMessage',value)
        console.log(this.$store.state.message)
      },
    },
  },
  mounted() {
    this.$store.dispatch("asyncBanner");

    api
      .getNcov({
        key: "62e34ad34025d5d5127135efa58d4ca8",
      })
      .then((res) => {
        console.log(res);
        let newsList = res.data.newslist[0].desc;
        // 疫情信息
        this.information.note1 = newsList.note1;
        this.information.note2 = newsList.note2;
        this.information.note3 = newsList.note3;
        this.information.remark1 = newsList.remark1;
        this.information.remark2 = newsList.remark2;
        this.information.remark3 = newsList.remark3;
        // 疫情时间
        this.caseNumData.modifyTime = newsList.modifyTime;
        // 疫情分布
        this.caseNumData.currentConfirmedCount = newsList.currentConfirmedCount;
        this.caseNumData.confirmedCount = newsList.confirmedCount;
        this.caseNumData.suspectedCount = newsList.suspectedCount;
        this.caseNumData.curedCount = newsList.curedCount;
        this.caseNumData.deadCount = newsList.deadCount;
        this.caseNumData.seriousCount = newsList.seriousCount;
        this.caseNumData.currentConfirmedIncr = newsList.currentConfirmedIncr;
        this.caseNumData.confirmedIncr = newsList.confirmedIncr;
        this.caseNumData.curedIncr = newsList.curedIncr;
        this.caseNumData.suspectedIncr = newsList.suspectedIncr;
        this.caseNumData.curedIncr = newsList.curedIncr;
        this.caseNumData.deadIncr = newsList.deadIncr;
        this.caseNumData.seriousIncr = newsList.seriousIncr;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="scss">
</style>
