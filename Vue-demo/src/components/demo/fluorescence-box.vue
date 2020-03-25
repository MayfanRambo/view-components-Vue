<template>
  <div class="box">
    <div class="fluorescence-box">
      <div class="content">
        <p @click="rotate">Begin</p>
        <p @click="stop">Stop</p>
      </div>
      <div class="fluorescence fluorescence-filter" :style="{background:background}"></div>
      <div class="fluorescence fluorescence-border" :style="{background:background}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angle:235,
      background:'linear-gradient(235deg,#89ff00,#060c21,#00bcd4);',
      timer:null
    };
  },
  methods:{
    stop(){
      clearInterval(this.timer)
      this.timer = null;
    },
    rotate(){
      if(this.timer){
        clearInterval(this.timer)
        this.timer = null
      }
      this.timer = setInterval(()=>{
        this.angle++;
        this.background = `linear-gradient(${this.angle}deg,#89ff00,#060c21,#00bcd4)`
        if(this.angle == 595){
          this.angle = 235
        }
      },30)
    },
  }
};
</script>

<style lang="less" scoped>
.box {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #130f40;
  padding-top:100px;
  transition: 0.4s;
  z-index: -10;
  .fluorescence-box{
    width: 300px;
    height: 500px;
    margin: auto;
    background: #130f40;
    color: #fff;
    text-align: center;
    border: 1px solid;
    position: relative;
    .content{
      width: 100%;
      height: 100%;
      background: #130f40;
      position: absolute;
      top:0;
      left: 0;
      z-index: 10;
      p{
        margin-top:140px;
        line-height: 30px;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
      }
    }
    .fluorescence{
      position: absolute;
      top:-2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(235deg,#89ff00,#060c21,#00bcd4);
    }
    .fluorescence-filter{
      z-index: 1;
    }
    .fluorescence-border{
      z-index: 2;
      filter:blur(40px)
    }
  }
}
</style>