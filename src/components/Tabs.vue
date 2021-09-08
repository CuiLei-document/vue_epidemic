

<script>
import Content from "./Content.vue";
export default {
  props: {
    currentIndex: {
      type: [String, Number],
      default: "1",
    },
  },
  data() {
    return {
      pins: [],
    };
  },
  methods: {
    getIndex(index) {
      this.$emit("update:currentIndex", index);
    },
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content pins={this.pins} />
      </div>
    );
  },
};
</script>
<style lang="scss" scope>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>