<template>
    <div class="pieGraph">
        <div style="height:100%" ref="canvas"></div>
        <div class="button-group">
            起始角度：<el-input placeholder="请输入起始角度" v-on:keyup.enter.native="startAngle" v-model="angle" clearable></el-input>
            <el-button type="primary" size="small" plain @click="pie">饼图</el-button>
            <el-button type="primary" size="small" plain @click="ring">环形图</el-button>
            <el-button type="primary" size="small" plain @click="nanDing">南丁格尔图</el-button>
        </div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "pieGraph",
  data() {
    return {
      myChart: "",
      angle: ""
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
        "#33A0FF",
        "#FFA033",
        "#55E3ED",
        "#7083FF",
        "#ADE4FF",
        "#5CC9FF",
        "#93F5D4",
        "#C2FFFB",
        "#B17ACC",
        "#D6D6FF"
      ],
      // backgroundColor: 'rgba(255,255,255,0)',
        // 工具栏
        toolbox: {
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            restore: {},
            saveAsImage: {},
            dataView: { readOnly: false }
          }
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["展览", "培训", "演出", "讲座", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "60%",
            startAngle: 90,
            center: ["50%", "60%"],
            selectedMode: "single", //选中模式
            data: [
              {
                value: 335,
                name: "其他",
                // itemStyle: {
                //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //     { offset: 0, color: "#83bff6" },
                //     { offset: 0.5, color: "#188df0" },
                //     { offset: 1, color: "#188df0" }
                //   ])
                // },
                selected: true
              },
              { value: 310, name: "展览" },
              { value: 234, name: "培训" },
              { value: 135, name: "演出" },
              { value: 1548, name: "讲座" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    pie: function() {
      let option = this.myChart.getOption();
      option.series[0].radius = "60%";
      option.series[0].roseType = undefined;
      this.myChart.setOption(option);
    },
    ring: function() {
      let option = this.myChart.getOption();
      option.series[0].radius = ["50%", "60%"];
      option.series[0].roseType = undefined;
      this.myChart.setOption(option);
    },
    nanDing: function() {
      let option = this.myChart.getOption();
      option.series[0].radius = [30, "60%"];
      option.series[0].roseType = "radius";
      this.myChart.setOption(option);
    },
    startAngle: function() {
      let option = this.myChart.getOption();
      if (!this.angle) {
        this.angle = 90;
      }
      option.series[0].startAngle = this.angle;
      this.myChart.setOption(option);
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
.pieGraph {
  position: relative;
  height: 100%;
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
}
</style>


