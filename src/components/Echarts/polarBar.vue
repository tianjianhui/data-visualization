<template>
    <div class="polarBar">
        <div ref="canvas" style="height:100%;"></div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "polarBar",
  data() {
    return {
      myChart: ""
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        angleAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          z: 10
        },
        toolbox: {     //工具栏
          feature: {
            magicType: {
              type: ["bar", "line", "stack", "tiled"]
            },
            saveAsImage: {},
            dataView: { readOnly: false }
          }
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: "polar",
            name: "A",
            stack: "a"
          },
          {
            type: "bar",
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"]
        }
      });
    }
  },
  mounted() {
      this.$nextTick(function(){
          this.initEchart();
      })
  }
};
</script>
<style>
.polarBar{
    height: 100%;
}
</style>


