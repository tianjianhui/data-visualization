<template>
    <div class="canvas-clip">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
export default {
    name: 'canvas-clip',
    data(){
        return{
            context: '',
            width: 800,
            height: 600
        }
    },
    mounted(){
        this.$nextTick(function(){
            var canvas = this.$refs.canvas;
            this.context = canvas.getContext('2d');
            canvas.width = this.width;
            canvas.height = this.height;
            this.searchlight();
        })
    },
    methods:{
        searchlight: function(){       //探照灯
            let con = this.context;
            con.beginPath();
            con.fillStyle = 'black';
            con.fillRect(0,0,this.width,this.height);
            con.beginPath();
            con.arc(this.width/2,this.height/2,150,0,Math.PI*2);
            con.fillStyle = '#fff';
            con.fill();
            con.clip();
            con.font = "bold 150px Arial";
            con.textAlign = 'center';
            con.fillStyle = '#058';
            con.fillText('hello world',this.width/2,this.height/2);
        }
    }
}
</script>

