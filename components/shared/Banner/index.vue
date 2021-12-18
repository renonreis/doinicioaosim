<template>
  <section v-if="banner" class="banner" >
    <nuxt-picture
      alt="Curso de noivos online"
      width="479"
      height="1013"
      loading="lazy"
      class="img-banner d-flex d-lg-none"
      :src="banner.background.image.mobile"
    />
    <nuxt-picture
      alt="Curso de noivos online"
      width="2560"
      height="975"
      loading="lazy"
      class="img-banner d-none d-lg-flex"
      :src="banner.background.image.desktop"
    />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center content">
          <nuxt-picture
            alt="Do Início ao Sim Logo"
            width="357"
            height="102"
            loading="lazy"
            class="banner-logo d-block"
            src="/elements/do-inicio-ao-sim.png"
          />
          <h1 class="mb-3">{{ banner.title }}</h1>
          <p>{{ banner.subtitle }}</p>
          <n-link :to="banner.url.button" class="btn large mt-2 mb-5">{{ textInscricao }}</n-link>
        </div>
        <div class="col-12 text-center content">
          <div class="video">
            <LazyYoutube
              ref="vimeoLazyVideo"
              class="video-player"
              max-width="900px"
              :show-title="false"
              :src="banner.url.youtube"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LazyYoutube } from 'vue-lazytube'

export default {
  name: 'Banner',

  components: {
    LazyYoutube
  },

  props: {
    dados: {
      type: Object,
      required: true
    }
  },

  data(){
    return {
      banner: {
        title: '',
        subtitle: '',
        button: {
          text: {
            mobile: '',
            desktop: '',
          },
        },
        url: {
          button: '',
          youtube: ''
        },
        background: {
          image: {
            mobile: '#',
            desktop: '#'
          }
        }
      }
    }
  },

  computed: {
    textInscricao(){
      return this.isMobile ? this.banner.button.text.mobile : this.banner.button.text.desktop
    }
  },

  watch: {
    dados() {
      this.banner = this.dados
    }
  },

  mounted () {
    this.banner = this.dados

    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 992
    }
  }
}

</script>

<style lang="scss">
.banner {
  position: relative;
  min-height: 975px;

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
    min-height: 1120px;
    .video {
      width: calc(100% + 30px);
      margin-left: -15px;
      iframe {
        border-radius: 0;
      }
    }
  }
}
</style>