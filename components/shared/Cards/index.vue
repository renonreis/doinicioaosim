<template>
  <div
    ref="card"
    class="card"
    :style="cardStyle"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="card-bg" :style="[cardBgTransform]"></div>
    <div class="card-info">
      <slot name="header" class="title"></slot>
      <slot name="content" class="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX;
    },
    mousePY() {
      return this.mouseY;
    },
    cardStyle() {
      const rX = this.mousePX * 3;
      const rY = this.mousePY * 3;
      return {
        transform: `perspective(800px) rotateY(${rY}deg) rotateX(${rX}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX;
      const tY = this.mousePY;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
  },

  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },

  methods: {
    handleMouseMove(e) {
      const box = this.$refs.card.getBoundingClientRect()

      this.mouseX = -(e.clientY - box.y - (box.height / 2)) / 100;
      this.mouseY = (e.clientX - box.x - (box.width / 2)) / 100;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      setTimeout(()=>{
        this.mouseX = 0
        this.mouseY = 0
      }, 500);
    },
  }
}
</script>

<style lang="scss">

.card {
  border: 0;
  border-radius: 8px;
  margin-bottom: 45px;
  padding: 90px 60px 90px;
  transition: all 0.3s;

  .card-info {
    h2 {
      color: $white;
    }
    p {
      color: $white;
      font-size: 18px;
      line-height: 35px;

      &:nth-last-child(1){
        margin-bottom: 0;
      }
    }
  }

  .card-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &--amor {
    .card-bg {
      background: url(@/static/images/home/noivado-baseado-no-amor.jpg);
      background-position: center;
      background-size: cover;
    }
  }

  &--verdade {
    .card-bg {
      background: url(@/static/images/home/noivado-baseado-na-verdade.jpg);
      background-position: center;
      background-size: cover;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 45px 20px 45px;
  }
}
</style>