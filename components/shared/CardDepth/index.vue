<template>
  <div
    ref="card"
    class="card-depth"
    :style="cardStyle"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="card-bg" :style="[cardBgTransform]"></div>
    <div class="card-info">
      <slot name="header" class="title"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDepth',
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX
    },
    mousePY() {
      return this.mouseY
    },
    cardStyle() {
      const rX = this.mousePX * 3
      const rY = this.mousePY * 3
      return {
        transform: `perspective(800px) rotateY(${rY}deg) rotateX(${rX}deg)`,
      }
    },
    cardBgTransform() {
      const tX = this.mousePX
      const tY = this.mousePY
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      }
    },
  },

  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  },

  methods: {
    handleMouseMove(e) {
      if (window.innerWidth >= 1200) {
        const box = this.$refs.card.getBoundingClientRect()

        this.mouseX = -(e.clientY - box.y - box.height / 2) / 100
        this.mouseY = (e.clientX - box.x - box.width / 2) / 100
      }
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.no-link {
  text-decoration: none !important;
}

.card-depth {
  border: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
  padding: 90px 60px 90px;
  transition: all 0.3s;

  @media screen and (max-width: 991px) {
    padding: 40px 20px 40px;
  }

  .card-info {
    h2 {
      color: $white;
    }
    p {
      color: $white;
      font-size: 18px;
      line-height: 35px;

      &:nth-last-child(1) {
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

  &--blog {
    border-radius: 4px;
    justify-content: end;
    margin-bottom: 40px;
    min-height: 445px;
    padding: 30px 25px 15px;

    .card-info {
      border-radius: 4px;
      transition: ease-in-out 0.6s;
      transform: translateY(45px);

      h2 {
        font-size: 21px;
        line-height: 25px;
        max-width: 210px;
        margin-bottom: 15px;

        span {
          background-color: #102333;
        }
      }
    }

    .card-bg {
      background-position: center !important;
      background-size: cover !important;
      border-radius: 4px;
      &:after {
        background-color: $black;
        border-radius: 4px;
        content: '';
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: ease-in-out 0.6s;
        width: 100%;
      }
    }

    &:hover {
      .card-info {
        transform: translateY(0px);
      }

      .card-bg {
        &:after {
          opacity: 0.35;
        }
      }
    }

    &_one {
      .card-bg {
        background: url(@/static/images/home/um-novo-ponto-de-vista.jpg);
      }
    }

    &_two {
      .card-bg {
        background: url(@/static/images/home/como-ser-livre-no-seu-relacionamento.jpg);
      }
    }

    &_tree {
      .card-bg {
        background: url(@/static/images/home/lugar-de-honra.jpg);
      }
    }

    &_four {
      .card-bg {
        background: url(@/static/images/home/como-saber-a-hora-certa-de-casar.jpg);
      }
    }

    &_five {
      .card-bg {
        background: url(@/static/images/home/o-amor-permaneca-nele-min.jpg);
      }
    }

    &_six {
      .card-bg {
        background: url(@/static/images/home/existe-idade-certa-para-namorar.jpg);
      }
    }

    &_seven {
      .card-bg {
        background: url(@/static/images/home/adao-e-eva-no-jardim.jpg);
      }
    }

    &_eight {
      .card-bg {
        background: url(@/static/images/home/a-promessa-que-traz-vida.jpg);
      }
    }
  }
}
</style>
