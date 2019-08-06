<template>
    <div class="canvasOne">
        <el-input placeholder="请输入坐标" v-on:keyup.enter.native="drawPicture" v-model="coordinate" clearable></el-input>
        <el-color-picker v-model="color" show-alpha></el-color-picker>
        <el-button type="primary" plain @click="drawPicture">绘图</el-button>
        <el-button type="primary" plain @click="drawPicture1">画五角星</el-button>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
import Bus from '../../js/bus'
export default {
    name: 'canvasOne',
    data(){
        return {
            coordinate: '',
            color: 'rgba(0,0,0,1)',
            context: '',
            R: 300,
            r: 100
        }
    },
    mounted(){
        var canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
    },
    methods: {
        drawPicture: function (){
            let data = this.coordinate.slice(1,-1).split('),(');
            console.log(data);
            console.log(data[0].slice(0,data[0].indexOf(',')));
            console.log(data[0].slice(data[0].indexOf(',')+1));
			this.context.beginPath();
			this.context.moveTo(data[0].slice(0,data[0].indexOf(',')),data[0].slice(data[0].indexOf(',')+1));
			for(var i=1;i<data.length;i++){
				this.context.lineTo(data[i].slice(0,data[i].indexOf(',')),data[i].slice(data[i].indexOf(',')+1));
			}
            this.context.lineWidth = 1;
			this.context.strokeStyle = this.color;
			this.context.stroke();
		},
        drawPicture1: function(){
            this.context.beginPath();
            for(let i=0;i<5;i++){
                this.context.lineTo(Math.cos((18+i*72)/180*Math.PI)*this.R+400,-Math.sin((18+i*72)/180*Math.PI)*this.R+400);
                this.context.lineTo(Math.cos((54+i*72)/180*Math.PI)*this.r+400,-Math.sin((54+i*72)/180*Math.PI)*this.r+400);
            };
            this.context.closePath();
            this.context.lineWidth = 6;
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     alert('123');
    //     console.log(to.fullPath)
    //     console.log(from.fullPath)
    // next( vm => {
    //     // 通过 `vm` 访问组件实例
    // })
    // },
    created(){
        console.log('canvasOne')
       Bus.$on('msg',(res)=>{
           console.log('res',res)
       })
    }
}
</script>
<style scoped>
  .el-input{
      width: 800px;
  }
</style>


