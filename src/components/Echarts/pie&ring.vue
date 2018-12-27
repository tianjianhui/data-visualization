<template>
    <div class="pie-ring" style="height:100%;position:relative;">
        <div style="height:100%" ref="canvas"></div>
        <div class="button-group">
            <el-button type="primary" size="small" plain @click="switchChart">{{title}}</el-button>
        </div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "pie-ring",
  data() {
    return {
      myChart: "",
      title: "南丁格尔"
    };
  },
  methods: {
    initEchart: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
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
        legend: {                     //图例
          orient: "vertical",
          x: "left",
          data: [
            "直达",
            "推送",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
            // data: ['访问来源','访问来源1']
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 300, name: "直达", selected: true },
              { value: 600, name: "营销广告" },
              { value: 1500, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源1",
            type: "pie",
            selectedMode: "mutiple",
            radius: ["40%", "55%"],
            label: {
              normal: {
                formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                backgroundColor: "#eee",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center"
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: "#eee",
                    backgroundColor: "#334455",
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 100, name: "推送", selected: true },
              { value: 200, name: "邮件营销", selected: true },
              { value: 300, name: "联盟广告" },
              { value: 300, name: "视频广告" },
              { value: 1000, name: "百度" },
              { value: 200, name: "谷歌" },
              { value: 100, name: "必应" },
              { value: 200, name: "其他" }
            ]
          }
        ]
      });
    },
    switchChart: function() {
        let option = this.myChart.getOption();
        if(this.title == '南丁格尔'){
            this.title = '内饼外环';
            option.series[0].roseType = 'radius';
            option.series[1].roseType = 'radius';
        }else{
            this.title = '南丁格尔';
             option.series[0].roseType = undefined;
             option.series[1].roseType = undefined;
        };
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
.button-group {
  position: absolute;
  top: 0;
  right: 0;
}
</style>


