<template>
  <section class="banner d-flex">
    <slot />
    <div class="container d-flex justify-content-center">
      <div class="row align-items-md-center">
        <div class="col-12 text-center content">
          <div class="d-none d-lg-inline-flex" role="button" @click="showModal">
            <nuxt-picture loading="lazy" class="mb-4" src="/icons/play.png" />
          </div>
          <h1 class="mb-3">{{ title }}</h1>
          <p>{{ subtitle }}</p>
          <a :href="urlButton" class="btn large mt-2 mb-5">{{
            textInscricao
          }}</a>
        </div>
      </div>
    </div>
    <Modal v-if="isModalVisible" @close="closeModal">
      <LazyYoutube autoplay="true" max-width="850px" :src="urlYoutube" />
    </Modal>
  </section>
</template>

<script>
import { LazyYoutube } from 'vue-lazytube'

import Modal from '@/components/shared/Modal'

export default {
  name: 'Banner',

  components: {
    LazyYoutube,
    Modal,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    buttonTextMobile: {
      type: String,
      required: true,
    },
    buttonTextDesktop: {
      type: String,
      required: true,
    },
    urlButton: {
      type: String,
      default: '',
    },
    urlYoutube: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isModalVisible: false,
    }
  },

  computed: {
    textInscricao() {
      return this.isMobile ? this.buttonTextMobile : this.buttonTextDesktop
    },
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 992
    },
    showModal() {
      this.isModalVisible = true

      document.body.classList.add('overflow-hidden')
    },
    closeModal() {
      this.isModalVisible = false
      document.body.classList.remove('overflow-hidden')
    },
  },
}
</script>

<style lang="scss">
.banner {
  overflow: hidden;
  min-height: 975px;
  position: relative;

  &::before {
    background-color: $black;
    content: '';
    position: absolute;
    height: 975px;
    top: 0;
    width: 100%;
  }

  .img-banner img {
    position: absolute;
    height: 975px;
    margin-left: 50%;
    object-fit: cover;
    object-position: top;
    top: 0;
    transform: translateX(-50%);
    width: 100%;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      transform: initial;
    }
  }

  .content {
    color: $white;
    padding-top: 65px;

    .banner-logo {
      margin-bottom: 65px;
    }

    h1 {
      color: $white;
    }

    p {
      color: $white;
    }
  }

  @media screen and (max-width: 991px) {
    min-height: 760px;
    .video {
      width: calc(100% + 30px);
      margin-left: -15px;
      iframe {
        border-radius: 0;
      }
    }
  }
}

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
