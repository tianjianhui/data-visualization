<template>
    <div class="canvasFive">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
export default {
    name: 'canvasFive',
    data(){
        return {
            canvas: '',
            context: ''
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.initCanvas();
            this.drawBox(0,0,800,800,'red');
            this.mouseEvent();
        })
    },
    methods: {
        initCanvas: function(){         //初始画布
            this.canvas = this.$refs.canvas;
            this.canvas.width = 800;
            this.canvas.height = 800;
            this.context = this.canvas.getContext('2d')
        },
        drawBox: function(x,y,w,h,color){      //画米字格
            this.context.strokeStyle = color;
            this.context.save();
            this.context.lineWidth = 5;
            this.context.rect(x,y,w,h);
            this.context.stroke();
            this.context.restore();
            this.context.lineWidth = 1;
            this.context.moveTo(x,y);
            this.context.lineTo(x+w,y+h);
            this.context.moveTo(x+w,y);
            this.context.lineTo(x,y+h);
            this.context.moveTo(x+w/2,y);
            this.context.lineTo(x+w/2,y+h);
            this.context.moveTo(x,y+h/2);
            this.context.lineTo(x+w,y+h/2);
            this.context.stroke();
        },
        mouseEvent: function(){                   //鼠标事件
            var isDown = false;
            this.canvas.onmousedown = (e)=>{
                e.preventDefault();
                isDown = true;
                let coordinate = this.windowsToCanvas(e.clientX,e.clientY);
                // console.log(coordinate);
                this.context.beginPath();
                this.context.strokeStyle = 'lime';
                this.context.lineWidth = 30;
                this.context.lineCap = 'round';
                this.context.lineJoin = 'round';
                this.context.moveTo(coordinate.x,coordinate.y);
            };
            this.canvas.onmousemove = (e)=>{
                e.preventDefault();
                if(isDown){
                    // console.log(e);
                    let coordinate = this.windowsToCanvas(e.clientX,e.clientY);
                    this.context.lineTo(coordinate.x,coordinate.y);
                    this.context.stroke();
                }
            }
            this.canvas.onmouseup = (e)=>{
                e.preventDefault();
                isDown = false;
            }
            this.canvas.onmouseout = (e)=>{
                e.preventDefault();
                isDown = false;
            }
        },
        windowsToCanvas: function(x,y){          //将相对屏幕的坐标值转换为相对画布的坐标值
            let rect = this.canvas.getBoundingClientRect();               //画布在屏幕中的位置
            let left = rect.left;
            let top = rect.top;
            return {
                x: x-left,
                y: y-top
            }
        }
    }
}
</script>
<style>
    
</style>


