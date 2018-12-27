<template>
    <div class="tree">
        <div ref="canvas" style="height:100%;"></div>
        <div class="button-group">
            <div style="text-align:right;margin-bottom:10px;">树图初始展开的层级：<el-input placeholder="请输入层级" v-on:keyup.enter.native="startTier" v-model="tier" clearable></el-input></div>
            <!-- <div style="text-align:right;margin-bottom:10px;">指示器轴的分割段数：<el-input placeholder="请输入分割段数" v-on:keyup.enter.native="splitNumber" v-model="number" clearable></el-input></div> -->
            <div style="text-align:right;">
                <el-tooltip class="item" effect="dark" content="树图布局(正交和径向)" placement="top">
                    <el-button type="primary" size="small" plain @click="switchShape">{{layout}}</el-button>
                </el-tooltip>
                <div v-if="layout == 'radial'" style="margin-top:10px;">
                   <el-tooltip class="item" effect="dark" content="从左到右" placement="top">
                        <el-button type="primary" size="small" plain @click="switchType1">LR</el-button>
                    </el-tooltip>
                     <el-tooltip class="item" effect="dark" content="从右到左" placement="top">
                        <el-button type="primary" size="small" plain @click="switchType2">RL</el-button>
                    </el-tooltip>
                     <el-tooltip class="item" effect="dark" content="从上到下" placement="top">
                        <el-button type="primary" size="small" plain @click="switchType3">TB</el-button>
                    </el-tooltip>
                     <el-tooltip class="item" effect="dark" content="从下到上" placement="top">
                        <el-button type="primary" size="small" plain @click="switchType4">BT</el-button>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var echarts = require("echarts");
// var data = require("../../tree.json");
import data from "../../tree";
import { throws } from 'assert';
export default {
  name: "tree",
  data() {
    return {
      myChart: "",
      layout: "radial",
      tier: '',
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
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
          top: "2%",
          left: "3%",
          orient: "vertical",
          data: [
            {
              name: "tree"
              // icon: "rectangle"
            }
          ]
          // borderColor: "#c23531"
        },
        series: [
          {
            type: "tree",
            name: "tree",
            data: [data],
            roam: true,     //开启鼠标缩放和平移漫游
            top: "10%",
            left: "10%",
            bottom: "2%",
            right: "20%",
            layout: "orthogonal",
            symbolSize: 10,
            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                // align: "right"
              }
            },
            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  // align: "left"
                }
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      });
    },
    switchShape: function() {
      let option = this.myChart.getOption();
      option.series[0].layout = this.layout;
      if (this.layout == "radial") {
        this.layout = "orthogonal";
      } else {
        this.layout = "radial";
      }
      this.myChart.setOption(option);
    },
    switchType1: function() {
      let option = this.myChart.getOption();
      option.series[0].orient = 'LR';
      option.series[0].label.position = 'left';
      option.series[0].leaves.label.position = 'right';
      option.series[0].leaves.label.rotate = 0;
      this.myChart.setOption(option);
    },
    switchType2: function() {
      let option = this.myChart.getOption();
      option.series[0].orient = 'RL';
      option.series[0].label.position = 'right';
      option.series[0].leaves.label.position = 'left';
      option.series[0].leaves.label.rotate = 0;
      this.myChart.setOption(option);
    },
    switchType3: function() {
      let option = this.myChart.getOption();
      option.series[0].orient = 'TB';
      option.series[0].label.position = 'top';
      option.series[0].leaves.label.position = 'bottom';
      option.series[0].leaves.label.rotate = 90;
      this.myChart.setOption(option);
    },
    switchType4: function() {
      let option = this.myChart.getOption();
      option.series[0].orient = 'BT';
      option.series[0].label.position = 'bottom';
      option.series[0].leaves.label.position = 'top';
      option.series[0].leaves.label.rotate = 90;
      this.myChart.setOption(option);
    },
    startTier: function() {
      let option = this.myChart.getOption();
      option.series[0].initialTreeDepth = this.tier || 2;
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
.tree {
  position: relative;
  height: 100%;
}
.button-group {
  position: absolute;
  right: 0;
  top: 0;
}
</style>


