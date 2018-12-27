<template>
    <div class="geographical">
        <div style="height:100%;" ref="canvas">
        </div>
        <div class="button-group">
            <el-button type="primary" size="small" plain @click="clearColor">清空映射颜色</el-button>
            <el-button type="primary" size="small" plain @click="addColor">添加映射颜色</el-button>
        </div>
    </div>
</template>
<script>
var echarts = require("echarts");
var geoJson = require("../../map.json");
export default {
  name: "geographical",
  data() {
    return {
      color: ["DimGray", "Olive", "Lime"],
      myChart: "",
      option: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.initEcharts();
    });
  },
  methods: {
    initEcharts: function() {
      this.myChart = echarts.init(this.$refs.canvas);
      echarts.registerMap("DJ", geoJson);
      this.myChart.setOption({
        //标题栏
        title: {
          text: "德江县人口密度 （2011）",
          subtext: "人口密度数据来自Wikipedia",
          sublink:
            "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12"
        },
        //鼠标悬浮框
        tooltip: {
          trigger: "item",     //触发类型
          formatter: "{b}<br/>{c} (p / km2)"
        },
         //工具栏（保存为图片...）
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        //颜色映射
        visualMap: {
          min: 800,
          max: 50000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: this.color
          }
        },
        series: [
          {
            // name: '香港18区人口密度',
            type: "map",
            mapType: "DJ", // 自定义扩展图表类型
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { 
                label: { show: true }, 
                // areaColor: 'red'        //高亮板块颜色
                borderWidth:2,
                borderColor:'#fff'
              }
            },
            roam: true, //是否开启鼠标缩放和平移漫游,可以单独设为scale或move
            center: [108.563260527344, 28.3197585273438], //当前当前视角的中心点
            aspectScale: 1.0, // 这个参数用于 scale 地图的长宽比
            zoom: 1, //当前视角的缩放比例
            scaleLimit: {
              //滚轮缩放的极限控制，通过min, max最小和最大的缩放值
              min: 0.5,
              max: 2.5
            },
            selectedMode: "multiple", //选中模式，表示是否支持多个选中
            data: [
              { name: "江口县", value: 20057.34 },
              { name: "石阡县", value: 15477.48 },
              { name: "思南县", value: 31686.1 },
              { name: "松桃苗族自治县", value: 6992.6 },
              { name: "碧江区", value: 44045.49 },
              { name: "万山区", value: 40689.64 },
              { name: "沿河土家族自治县", value: 37659.78 },
              { name: "印江土家族苗族自治县", value: 45180.97 },
              { name: "玉屏侗族自治县", value: 55204.26 },
              { name: "德江县", value: 55204.26 }
            ]
            // 自定义名称映射
            // nameMap: {
            //     'Central and Western': '中西区',
            //     'Eastern': '东区',
            //     'Islands': '离岛',
            //     'Kowloon City': '九龙城',
            //     'Kwai Tsing': '葵青',
            //     'Kwun Tong': '观塘',
            //     'North': '北区',
            //     'Sai Kung': '西贡',
            //     'Sha Tin': '沙田',
            //     'Sham Shui Po': '深水埗',
            //     'Southern': '南区',
            //     'Tai Po': '大埔',
            //     'Tsuen Wan': '荃湾',
            //     'Tuen Mun': '屯门',
            //     'Wan Chai': '湾仔',
            //     'Wong Tai Sin': '黄大仙',
            //     'Yau Tsim Mong': '油尖旺',
            //     'Yuen Long': '元朗'
            // }
          }
        ]
      });
    },
    clearColor: function() {
      this.color = [];
    //   this.initEcharts();
    },
    addColor: function() {
      this.$prompt("请输入正确的颜色名称或颜色格式", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.color.push(value);
        //   console.log(this.color);
          this.initEcharts();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style>
.geographical {
  position: relative;
  height: 100%;
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
}
</style>


