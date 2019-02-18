import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import canvasOne from '@/components/canvas/canvasOne'
import canvasTwo from '@/components/canvas/canvasTwo'
import canvasThree from '@/components/canvas/canvasThree'
import canvasFour from '@/components/canvas/canvasFour'
import canvasFive from '@/components/canvas/canvasFive'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/canvas/one',
      name: 'canvasOne',
      component: canvasOne
    },
    {
      path: '/canvas/two',
      name: 'canvasTwo',
      component: canvasTwo
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
      component: canvasFive
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
    }
  ]
})
