<template>
    <div class="d3-select">
        <h1>d3选择器</h1>
        <tr>
            <td>apple🍎</td>
            <td>orange🍊</td>
            <td>pineApple🍍</td>
        </tr>
    </div>
</template>
<script>
import * as d3 from 'd3';
export default {
    name: 'd3-select',
    data(){
        return {
            index:0
        }
    },
    mounted(){
        d3.select('h1').style('color','red')       //d3.select只会选择第一个
        d3.select("td").on('click',function(){      
            d3.select(this).style('color','red')     //d3.select(this)会选择当前元素
        })
        d3.selectAll('td').on('click',function(){       //d3.selectAll会覆盖掉d3.select
            let dom = d3.select(this);
            console.log(dom.style('background'))
            if(dom.style('background')=='orange'){
                dom.style('background','none')
            }else{
                dom.style('background','orange').style('color','white')       //selection.property可以取value和checked等属性
            }
        })
        let data = [1,2,3,4,5,6];
        let svg = d3.select('.d3-select').append('svg').attr('width',800).attr('height',500);
        let rects = svg.selectAll('rect').data(data).enter().append('rect').attr('fill','steelblue').attr('width',20).attr('height',100)
        .attr('x',function(d,i){return 20+i*160/data.length}).attr('y',function(d){ return 20 })
        rects.on('click',function(d,i){
            this.index = i;
            console.log(this.index);
            d3.select(this).classed('stroke',true)
        })

        d3.select('h1').text('改变后的文本');
        d3.select('h1').html('<span>hahhahh</span>')
    }
}
</script>
<style>
.stroke{
    stroke: deepskyblue;
    stroke-width: 5;
}
</style>


