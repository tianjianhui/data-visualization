<template>
    <div class="canvasThree">
        <span>X:</span><el-input placeholder="请输入起始横坐标" v-model="x" clearable></el-input>
        <span>y:</span><el-input placeholder="请输入起始纵坐标" v-model="y" clearable></el-input>
        <span>d:</span><el-input placeholder="参考点距离圆心的距离" v-model="d" clearable></el-input>
        <span>R:</span><el-input placeholder="月亮的大小" v-model="R" clearable></el-input>
        <span>rot:</span><el-input placeholder="月亮旋转角度" v-model="rot" clearable></el-input>
        <el-button type="primary" @click="drawMoon(context,x,y,d,R,rot)">绘制月亮</el-button><br>
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
export default {
    name: 'canvasThree',
    data(){
        return {
            context: '',
            x: '',
            y: '',
            d: '',
            R: '',
            rot: ''
        }
    },
    mounted(){
        var canvas = this.$refs.canvas;
        this.context = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
    },
    methods: {
        //月亮的外弧的圆心默认为（0，0）
        drawMoon: function(ctx,x,y,d,R,rot){
            ctx.save();
            ctx.translate(x,y);
            ctx.rotate(rot*Math.PI/180);
            ctx.scale(R,R);
            this.moon(ctx,d);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.restore();
        },
        moon: function(ctx,d){
            ctx.beginPath();
            ctx.arc(0,0,1,Math.PI/2,1.5*Math.PI,true);    //逆时针绘制外弧
            // ctx.moveTo(0,-1);
            ctx.arcTo(d,0,0,1,this.dis(d,0,0,1)/d)
            ctx.closePath();
        },
        dis: function(x1,y1,x2,y2){
            return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
        }
    }
}
</script>

