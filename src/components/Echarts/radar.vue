<template>
    <div class="radar">
        <div ref="canvas" style="height:100%;"></div>
        <div class="button-group">
            <div style="text-align:right;margin-bottom:10px;">起始角度：<el-input placeholder="请输入起始角度" v-on:keyup.enter.native="startAngle" v-model="angle" clearable></el-input></div>
            <div style="text-align:right;margin-bottom:10px;">指示器轴的分割段数：<el-input placeholder="请输入分割段数" v-on:keyup.enter.native="splitNumber" v-model="number" clearable></el-input></div>
            <div style="text-align:right;">
                <el-tooltip class="item" effect="dark" content="雷达图绘制类型" placement="top">
                    <el-button type="primary" size="small" plain @click="switchShape">{{shape}}</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="雷达图线类型" placement="top">
                    <el-button type="primary" size="small" plain @click="switchType">{{type}}</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="是否区域填充" placement="top">
                    <el-button type="primary" size="small" plain @click="switchArea">{{areaStyle}}</el-button>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "radar",
  data() {
    return {
      myChart: "",
      angle: "",
      number: "",
      shape: "polygon",
      type: "solid",
      areaStyle: "area"
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        title: {
          text: "自定义雷达图"
        },
        toolbox: {     //工具栏
          feature: {
            restore: {
                
            },
            saveAsImage: {},
            dataView: { readOnly: false }
          },
          orient: 'vertical',
          y: 'middle'
        },
        legend: {
          data: ["图一", "图二"]
        },
        radar: [
          {
            indicator: [
              { text: "指标一" },
              { text: "指标二" },
              { text: "指标三" },
              { text: "指标四" },
              { text: "指标五" }
            ],
            center: ["50%", "50%"],
            // radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            name: {
              formatter: "【{value}】",
              textStyle: {
                color: "#72ACD1"
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  "rgba(114, 172, 209, 0.2)",
                  "rgba(114, 172, 209, 0.4)",
                  "rgba(114, 172, 209, 0.6)",
                  "rgba(114, 172, 209, 0.8)",
                  "rgba(114, 172, 209, 1)"
                ],
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)",
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: "图一",
                symbol: "rect",
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    type: "dashed"
                  }
                }
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "图二",
                lineStyle: {
                  normal: {
                    type: "dashed"
                  }
                }
                // areaStyle: {
                //   normal: {
                //     color: "rgba(255, 255, 255, 0.5)"
                //   }
                // }
              }
            ]
          }
        ]
      });
    },
    startAngle: function() {
        let option = this.myChart.getOption();
        option.radar[0].startAngle = this.angle||90;
        this.myChart.setOption(option);
    },
    splitNumber: function() {
        let option = this.myChart.getOption();
        option.radar[0].splitNumber = this.number||4;
        this.myChart.setOption(option);
    },
    switchShape: function() {
        let option = this.myChart.getOption();
        option.radar[0].shape = this.shape;
        if(this.shape == 'polygon'){
            this.shape = 'circle';
        }else{
            this.shape = 'polygon';
        }
        this.myChart.setOption(option);
    },
    switchType: function() {
        let option = this.myChart.getOption();
        if(this.type == 'solid'){
            for(let i=0;i<option.series[0].data.length;i++){
                option.series[0].data[i].lineStyle.type = this.type;
            };
            this.type = 'dashed';
        }else{
            for(let i=0;i<option.series[0].data.length;i++){
                option.series[0].data[i].lineStyle.type = this.type;
            };
            this.type = 'solid';
        };
        this.myChart.setOption(option);
    },
    switchArea: function() {
        let option = this.myChart.getOption();
        if(this.areaStyle == 'area'){
            option.series[0].areaStyle = {};
            this.areaStyle = 'no area';
        }else{
            option.series[0].areaStyle = undefined;
            this.areaStyle = 'area';
        };
        this.myChart.setOption(option);
    }
  },
  mounted(){
      this.$nextTick(function(){
          this.initEchart();
      })
  }
};
</script>
<style>
.radar {
  height: 100%;
  position: relative;
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
}
</style>


