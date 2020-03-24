<template>
  <div class="sky" ref="sky">
    <div class="stars">
      <div v-for="(item,index) in starsCount" :key="index" class="star" ref="star"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starsCount: 1000, //星星数量
      distance: 800, //间距
      screenHeight:document.documentElement.clientHeight || document.body.clientHeight,
      timer: false
    };
  },
  mounted() {
    this.$refs.sky.style.height = this.screenHeight + "px";
    window.onresize = () => {//监听尺寸
      return (() => {
        window.screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.screenHeight = window.screenHeight;
      })();
    };
    const starArr = this.$refs.star;
    starArr.forEach(item => {
      const speed = 0.2 + Math.random() * 1;
      const thisDistance = this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
  },
  watch: {
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.timer = true;
        setTimeout(()=>{
          this.$refs.sky.style.height = this.screenHeight + "px";
          this.timer = false;
        }, 200);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
.sky {
  position: relative;
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #c5c5b4
  );
  background-attachment: fixed;
  overflow: hidden;
}
.stars {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: perspective(500px);
  transform-style: preserve-3d;
  perspective-origin: 50% 100%;
  animation: rotate 90s infinite linear;
  -webkit-transform: perspective(500px);
  -webkit-transform-style: preserve-3d;
  -webkit-perspective-origin: 50% 100%;
  -webkit-animation: rotate 90s infinite linear;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}
</style>