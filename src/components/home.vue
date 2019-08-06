<template>
  <div class="homePage">
    敬请期待...
    <em>天地不仁</em>
    <strong>以万物为刍狗</strong>
    <article>as you know,i am studing <abbr title="World Wide Web">WWW</abbr>,if you like it,you can study <u>World Wide Web</u> <s>lso</s></article>
    <Test></Test>
    <div class="cropper">
      <vueCropper
        ref="cropper"
        :img="option.img"
        :outputSize="option.size"
        :outputType="option.outputType"
        :autoCrop = true
      ></vueCropper>
    </div>
  </div>
</template>
<script>
import Bus from '../js/bus'
let a = 1
console.log('a',window.a)
var b = 2
console.log('b',window.b)
var Mock = require('mockjs');
var data = Mock.mock({
  'list|1-10':[{
    'id|+1':1
  }]
})
console.log(data);
console.log(Math.cbrt(8));
console.log(Math.pow(8,1/3));
console.log(8 ** (1/3));
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')
export default {
  name: 'home',
  data(){
    return{ 
      option: {
        img: require('../../static/640.jpeg'),
        size: 1,
        outputType: 'jpg'
      }
    }
  },
  mounted(){
    console.log('home')
    Bus.$emit('msg','bus输出')
  }
}

</script>
<style lang="stylus" scoped>
  yanse = red
  border(val){
    border val solid red
  }
  .block 
    padding 10px
  .homePage
    color yanse
    border(1px)
    @extend .block

  .cropper
    height 500px
</style>



