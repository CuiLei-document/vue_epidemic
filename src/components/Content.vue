
<script>
export default {
  props: {
    pins: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    getIs() {
      
    },
  },
  render(){
      return (
          <div>
          {
              this.pins.map((node,index)=>{
                  return node.isActive ? node.$slots.default : ''
              })
          }
          </div>
      )
  }
};
</script>