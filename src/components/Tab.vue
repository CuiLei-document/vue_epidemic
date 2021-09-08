

<script>
export default {
  name: "Tab",
  props: {
    label: {
      type: String,
      default: "Tab1",
    },
    index: {
      type: [String, Number],
      default: "1",
    },
  },
  computed: {
    isActive() {
      if (this.$parent.currentIndex) {
        return this.$parent.currentIndex === this.index;
      }
    },
  },
  render() {
    let className = {
      tab: true,
      active: this.isActive,
    };
    return (
      <li onClick={this.onNum} class={className}>
        {this.label}
      </li>
    );
  },
  mounted() {
      this.$parent.pins.push(this)
  },
  methods: {
    onNum() {
      this.$parent.getIndex(this.index);
    },
  },
};
</script>
<style lang="scss" scope>
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}

.tab.active {
  border-bottom: 2px solid blue;
}
</style>