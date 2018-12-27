<template>
    <div class="canvasFour">
        <div><el-button type="primary" plain @click="drawPicture1">圆环</el-button></div>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
export default {
    name: 'canvasFour',
    data () {
        return {
            context: ''
        }
    },
    created() {

    },
   mounted(){
        var canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
    },
    methods: {
        drawPicture1: function(){
            this.context.beginPath();
            this.context.arc(200,200,150,0,2*Math.PI,false);
            this.context.fillStyle = "blue";
            this.context.arc(200,200,100,0,2*Math.PI,true);
            this.context.shadowColor = "#ccc";
            // this.context.shadowOffsetX = "10";
            this.context.shadowOffsetY = "10";
            this.context.shadowBlur = "10";
            this.context.fill();
        }
    }
}
</script>

