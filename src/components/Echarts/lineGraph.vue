<template>
  <div class="lineGraph">
    <div ref="canvas" style="height:100%;"></div>
    <div class="button-group">
      <el-button type="primary" size="small" plain @click="smoothLine">{{title2}}</el-button>
      <el-button type="primary" size="small" plain @click="switchChart">
        <i v-if="line" class="fa fa-area-chart" aria-hidden="true"></i>
        <i v-else class="fa fa-line-chart" aria-hidden="true"></i>
      </el-button>
      <el-button type="primary" size="small" plain @click="autoStart">{{title}}</el-button>
      <el-button type="primary" size="small" plain @click="addShadow">{{title1}}</el-button>
    </div>
  </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "lineGraph",
  data() {
    return {
      myChart: "",
      title: "自动算数据起始点",
      title1: "给线加阴影",
      title2: "平滑曲线",
      line: true
    };
  },
  methods: {
    initEcharts: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        // 标题栏
        title: {
          text: "折线图",
          subtext: "副标题",
          // itemGap: 2,
          // textStyle: {
          // color: 'white',
          // textBorderColor: 'gray',
          // textBorderWidth: '5px',
          // textShadowColor: 'lime',
          // textShadowBlur: '5px',
          // textShadowOffsetX: '5px',
          // textShadowOffsetY: '5px',
          // },
          left: "center"
        },
        //鼠标悬浮框
        tooltip: {
          trigger: "item" //触发类型
          // formatter: "{b}<br/>{c}"
        },
        // 工具栏
        toolbox: {
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            // dataZoom: {
            //   yAxisIndex: "none"
            // },
            restore: {},
            saveAsImage: {},
            dataView: { readOnly: false },
            magicType: {
              type: ["line", "bar"] //图形切换
            }
          }
        },
        backgroundColor: "rgba(255,255,255,0)",
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          name: "横坐标",
          boundaryGap: false, //标签位于刻度正下方
          // nameRotate: 90,       //名字旋转
          // splitNumber: 15        //分割段数   在类目轴中无效
          axisLine: {
            //坐标轴线相关设置
            symbol: ["none", "arrow"], //轴线箭头
            symbolOffset: [0, 12],
            lineStyle: {
              // color: 'red'                       //  轴线颜色
              // color: 'white'
            }
          },
          axisTick: {
            //刻度线相关设置
            color: 'white'
          },
          axisLabel: {
            //刻度标签相关设置
            rotate: 45, //刻度标签旋转度数
            margin: 10,
            showMinLabel: true, //是否显示最小刻度
            showMaxLabel: true,
          }
        },
        yAxis: {
          type: "value",
          name: "纵坐标",
          // scale: true
          axisLine: {
            lineStyle: {
              // color: 'white'
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
              color: "#00FFFF"
            }
          }
        ]
      });
    },
    autoStart: function() {
      let option = this.myChart.getOption();
      if (this.title == "自动算数据起始点") {
        this.title = "以零作为数据其实点";
        option.yAxis[0].scale = true;
        this.myChart.setOption(option);
      } else {
        this.title = "自动算数据起始点";
        option.yAxis[0].scale = false;
        this.myChart.setOption(option);
      }
    },
    addShadow: function() {
      let option = this.myChart.getOption();
      if (this.title1 == "给线加阴影") {
        this.title1 = "给线去阴影";
        option.series[0].lineStyle = {
          normal: {
            width: 3,
            shadowColor: "rgba(0,0,0,0.4)",
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        };
      } else {
        this.title1 = "给线加阴影";
        option.series[0].lineStyle = "";
        console.log(option);
      }
      this.myChart.setOption(option);
    },
    smoothLine: function() {
      let option = this.myChart.getOption();
      if (this.title2 == "平滑曲线") {
        this.title2 = "折线";
        option.series[0].smooth = true;
      } else {
        this.title2 = "平滑曲线";
        option.series[0].smooth = false;
      }
      this.myChart.setOption(option);
    },
    switchChart: function() {
      let option = this.myChart.getOption();
      if (this.line) {
        this.line = false;
        option.series[0].areaStyle = {
          color: {                             //加渐变区域
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0,255,255,1)"
              },
              {
                offset: 1,
                color: "rgba(0,255,255,0)"
              }
            ],
            globalCoord: true
          }
        };
      } else {
        this.line = true;
        option.series[0].areaStyle = undefined;
      }
      this.myChart.setOption(option);
    },
    autoMove: function() {
      //动画函数
      let option = this.myChart.getOption();
      let data = option.series[0].data;
      let number = Math.random() * 1000;
      data.splice(0, 1);
      data.push(number);
      this.myChart.setOption(option);
      setTimeout(this.autoMove, 800);
      // requestAnimationFrame(this.autoMove);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.initEcharts();
      // this.autoMove();
    });
  }
};
</script>
<style>
.lineGraph {
  position: relative;
  height: 100%;
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

