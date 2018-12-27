<template>
    <div class="treemap" style="height:100%;">
         <div ref="canvas" style="height:100%;"></div>
    </div>
</template>
<script>
var echarts = require("echarts");
import data from "../../treemap";
export default {
  name: "treemap",
  data() {
    return {
      myChart: ""
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        series: [
          {
            name: "test Data",
            type: "treemap",
            leafDepth: 1,
            data: data
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.initEchart();
    });
  }
};
</script>

