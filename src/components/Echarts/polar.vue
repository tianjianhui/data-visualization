<template>
    <div class="polar" style="height:100%;">
        <div ref="canvas" style="height:100%;"></div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "polar",
  data() {
    return {
      myChart: ""
    };
  },
  methods: {
    initEchart: function() {
      var data = [];
      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          // center: ['50%', '54%']
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {                        //角度坐标轴
          type: "value",
          startAngle: 0,
          axisPointer: {
            show: true
          }
        },
        radiusAxis: {                        //半径坐标轴
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
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

