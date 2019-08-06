import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import canvasOne from '@/components/canvas/canvasOne'
import canvasTwo from '@/components/canvas/canvasTwo'
import canvasThree from '@/components/canvas/canvasThree'
import canvasFour from '@/components/canvas/canvasFour'
import canvasFive from '@/components/canvas/canvasFive'
import canvasClip from '@/components/canvas/canvas-clip'
import layouts from '@/components/D3/layouts'
import bar from '@/components/Echarts/bar'
import geographical from '@/components/Echarts/geographical'
import lineGraph from '@/components/Echarts/lineGraph'
import pieRing from '@/components/Echarts/pie&ring'
import pieGraph from '@/components/Echarts/pieGraph'
import polar from '@/components/Echarts/polar'
import polarBar from '@/components/Echarts/polarBar'
import radar from '@/components/Echarts/radar'
import scatter from '@/components/Echarts/scatter'
import tree from '@/components/Echarts/tree'
import treemap from '@/components/Echarts/treemap'
import Select from '@/components/D3/select'

Vue.use(Router)
console.log('router.js')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
      // component: ()=> import('@/components/home')
    },
    {
      path: '/canvas/one',
      name: 'canvasOne',
      component: canvasOne,
      meta: {
        title: 'canvas-one'
      }
    },
    {
      path: '/canvas/two',
      name: 'canvasTwo',
      component: canvasTwo,
      meta: {
        title: 'canvas-two'
      }
    },
    {
      path: '/canvas/three',
      name: 'canvasThree',
      component: canvasThree
    },
    {
      path: '/canvas/four',
      name: 'canvasFour',
      component: canvasFour
    },
    {
      path: '/canvas/five',
      name: 'canvasFive',
      component: canvasFive,
      meta:{
        keepAlive:true //需要被缓存的组件
      } 
    },
    {
      path: '/canvas/clip',
      name: 'canvasClip',
      component: canvasClip
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: layouts
    },
    {
      path: '/echarts/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/echarts/geographical',
      name: 'geographical',
      component: geographical
    },
    {
      path: '/echarts/lineGraph',
      name: 'lineGraph',
      component: lineGraph
    },
    {
      path: '/echarts/pieRing',
      name: 'pieRing',
      component: pieRing
    },
    {
      path: '/echarts/pieGraph',
      name: 'pieGraph',
      component: pieGraph
    },
    {
      path: '/echarts/polar',
      name: 'polar',
      component: polar
    },
    {
      path: '/echarts/polarBar',
      name: 'polarBar',
      component: polarBar
    },
    {
      path: '/echarts/radar',
      name: 'radar',
      component: radar
    },
    {
      path: '/echarts/scatter',
      name: 'scatter',
      component: scatter
    },
    {
      path: '/echarts/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/echarts/treemap',
      name: 'treemap',
      component: treemap
    },
    {
      path: '/d3/select',
      name: 'd3-select',
      component: Select
    },
    {path:'*',redirect:'/'}
  ],
  // scrollBehavior(to,form,savedPosition){
  //   //scrollBehavior方法接收to，form路由对象
  //   //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
  //   //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
  //   //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
  //    return {x:0,y:0}
  //   //表示在用户切换路由时让是所有页面都返回到顶部位置
  //   //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
  //    if(savedPosition){
  //       return savedPosition
  //    }else{
  //      return {x:0,y:0}
  //    }
  //    //如果想要模拟滚动到锚点的行为:
  //    if(to.hash){
  //      return {
  //        selector:to.hash
  //      }
  //    }
  //   },
  // mode: 'history'
})
