<template>
    <div class="canvasTwo">
        <span>X:</span><el-input placeholder="请输入起始横坐标" type="number" v-model.number="rect.x" clearable></el-input>
        <span>y:</span><el-input placeholder="请输入起始纵坐标" v-model.trim="rect.y" clearable></el-input>
        <span>width:</span><el-input placeholder="请输入矩形宽度" v-model.lazy="rect.w" clearable></el-input>
        <span>height:</span><el-input placeholder="请输入矩形高度" v-model="rect.h" clearable></el-input>
        <span>r:</span><el-input placeholder="请输入圆角" v-model="rect.r" clearable></el-input>
        <el-button type="primary" @click="drawRect(context,rect)">绘制圆角矩形</el-button>
        <canvas ref="canvas"></canvas>
    </div>
</template>
<style>
    .el-input{
        width: 150px;
    }
</style>

<script>
export default {
    name: 'canvasTwo',
    data(){
        return {
            rect: {
                x: '',
                y: '',
                w: '',
                h: '',
                r: ''
            },
            context: ''
        }
    },
    created(){
    },
    mounted(){
        var canvas = this.$refs.canvas;
        this.context = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
    },
    methods: {
        drawRect: function(ctx,rect){
            ctx.save();
            ctx.translate(rect.x,rect.y);
            ctx.beginPath();
            ctx.arc((rect.w-rect.r),(rect.h-rect.r),rect.r,0,Math.PI/2);
            ctx.lineTo(rect.r,rect.h);
            ctx.arc(rect.r,(rect.h-rect.r),rect.r,Math.PI/2,Math.PI);
            ctx.lineTo(0,rect.r);
            ctx.arc(rect.r,rect.r,rect.r,Math.PI,3*Math.PI/2);
            ctx.lineTo((rect.w-rect.r),0);
            ctx.arc((rect.w-rect.r),rect.r,rect.r,3*Math.PI/2,2*Math.PI);
            ctx.closePath();
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.restore();
        }
    }
}
</script>

