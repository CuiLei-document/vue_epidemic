<template>
  <div class="info">
    <h3 class="title">
      <i></i>
      <span>病毒信息</span>  
    </h3>
    <div class="content">
      <p>{{ information.note1 }}</p>
      <p>{{ information.note2 }}</p>
      <p>{{ information.note3 }}</p>
      <p>{{ information.remark1 }}</p>
      <p>{{ information.remark2 }}</p>
      <p>{{ information.remark3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>
<style  scope lang="scss" >
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  > .title {
    font-size: 0.17rem;
    display: flex;
    justify-content: flex-start;
    > i {
      display: inline-block;
      width: 0.04rem;
      height: 0.16em;
      margin-right: 0.03rem;
      vertical-align: middle;
      background: #4169e2;
    }
  }
}

.content {
  padding: 0.06rem 0.16rem;
  > p {
    font-size: 13px;
    margin: 5px 0;
  }
}
</style>