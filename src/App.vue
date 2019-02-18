<template>
  <div id="app">
    <el-container class="wrapper">
      <el-header style="line-height:60px;background-color:skyblue;text-align:center;">数据可视化
        <el-color-picker class="colorPicker"
          v-model="color"
          show-alpha
          @change='bindColor'
          :predefine="predefineColors">
        </el-color-picker>
      </el-header>
      <el-container class="mainBody">
        <el-aside width="200px">
          <el-menu default-active="/canvas/one" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                <span slot="title">Canvas</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/canvas/one">canvas-one</el-menu-item>
                <el-menu-item index="/canvas/two">canvas-two</el-menu-item>
                <el-menu-item index="/canvas/three">canvas-three</el-menu-item>
                <el-menu-item index="/canvas/four">canvas-four</el-menu-item>
                <el-menu-item index="/canvas/five">canvas-five</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                <span slot="title">D3</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/layouts">layouts</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                <span slot="title">Echarts</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/echarts/bar">柱状图</el-menu-item>
                <el-menu-item index="/echarts/geographical">地图</el-menu-item>
                <el-menu-item index="/echarts/lineGraph">折线图</el-menu-item>
                <el-menu-item index="/echarts/pieRing">内饼外环图</el-menu-item>
                <el-menu-item index="/echarts/pieGraph">饼图</el-menu-item>
                <el-menu-item index="/echarts/polar">极坐标</el-menu-item>
                <el-menu-item index="/echarts/polarBar">极坐标柱状图</el-menu-item>
                <el-menu-item index="/echarts/radar">雷达图</el-menu-item>
                <el-menu-item index="/echarts/scatter">散点图</el-menu-item>
                <el-menu-item index="/echarts/tree">树图</el-menu-item>
                <el-menu-item index="/echarts/treemap">矩形树</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div ref="coreBody" class="coreBody">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isCollapse: false,
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      color: 'rgba(255,255,255,1)'
    }
  },
  methods: {
    bindColor: function(){
      console.log('999')
      this.$refs.coreBody.style.backgroundColor = this.color;
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
.el-input{
  width: 200px;
}
.wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.mainBody{
  flex: auto;
}
.el-menu{
  border-right: none;
}
.colorPicker{
  float: right;
  margin-top: 10px;
}
.el-main {
  padding: 0;
}
.coreBody{
  width:100%;
  height:100%;
  padding:20px;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-aside{
  background-color: rgb(84, 92, 100);
}
</style>
