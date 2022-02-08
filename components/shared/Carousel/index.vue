<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide" :class="depoimentos[current].id">
        <div class="box text-center">
          <div class="cinco_estrelas"></div>
          <p>{{ depoimentos[current].description }}</p>
          <p class="autor">{{ depoimentos[current].autor }}</p>
        </div>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      <ArrowLeft />
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      <ArrowRight />
    </div>
  </div>
</template>

<script>
import cursoNoivosOnline from '@/static/json/cursos-de-noivos-online.json'

import ArrowLeft from '@/components/svg/arrow-left'
import ArrowRight from '@/components/svg/arrow-right'

export default {
  name: 'TestimonialCarousel',
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      depoimentos: cursoNoivosOnline.depoimentos,

      current: 0,
      direction: 1,
      transitionName: 'fade',
      show: false,
      slides: [
        { className: 'blue' },
        { className: 'red' },
        { className: 'yellow' },
      ],
    }
  },

  mounted() {
    this.show = true
  },

  methods: {
    slide(dir) {
      this.direction = dir
      dir === 1
        ? (this.transitionName = 'slide-next')
        : (this.transitionName = 'slide-prev')
      const len = this.slides.length
      this.current = (this.current + (dir % len) + len) % len
    },
  },
}
</script>

<style lang="scss">


/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

#slider {
  width: 100%;
  height: 30vh;
  overflow: hidden;
  position: relative;

  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }

  /* GO TO NEXT SLIDE */
  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-next-enter {
    transform: translate(100%);
  }
  .slide-next-leave-to {
    transform: translate(-100%);
  }

  /* GO TO PREVIOUS SLIDE */
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-prev-enter {
    transform: translate(-100%);
  }
  .slide-prev-leave-to {
    transform: translate(100%);
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box {
    max-width: 725px;
    margin: 0 auto;
    font-style: italic;
    z-index: 99;

    .cinco_estrelas {
      margin: 0 auto 15px;
    }

    .autor {
      font-style: normal;
    }
  }

  .btn {
    z-index: 1000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 0%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
    padding: 0;
    background-color: transparent;
  }

  .btn-next {
    left: auto;
    right: 0%;
  }

  @media screen and (max-width: 992px) {
    height: 70vh;

    .btn {
      top: initial;
      bottom: 0;
    }
  }
}
</style>