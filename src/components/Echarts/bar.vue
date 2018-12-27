<template>
    <div class="bar">
        <div ref="canvas" style="height:100%;"></div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "bar",
  data() {
      return {
          myChart: ""
      }
  },
  methods: {
    initEchart: function() {
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 50; i++) {
        xAxisData.push("类目" + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        title: {
          text: "柱状图动画延迟"
        },
        legend: {
          data: ["bar", "bar2"],
          align: "left",
          selectedMode: 'single'
        },
        toolbox: {
          y: "middle",
          orient: "virtical",
          feature: {
            magicType: {
              type: ["line", "stack", "tiled", "bar"]
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "bar",
            type: "bar",
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            }
          },
          {
            name: "bar2",
            type: "bar",
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
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
<style>
.bar {
  position: relative;
  height: 100%;
}
</style>


