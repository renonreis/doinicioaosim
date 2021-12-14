<template>
  <section class="about">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8">
          <h2>PREPAREM-SE PARA UM NOVO TEMPO NA SUA VIDA</h2>
          <p class="primary mb-3 curso">CURSO DE NOIVOS E NAMORO CRISTÃO</p>
        </div>
        <div class="col-md-10">
          <p>
            O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
            se preparar para o casamento. Quer saber por quê? O casamento foi
            criado por Deus. Ele faz parte do plano original de Deus para a
            humanidade. Um plano de amor, santidade e comunhão. Mas com o
            pecado de Adão, o egoísmo entrou no homem causando a destruição
            nos relacionamentos. <br />
            Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
            Ele trouxe uma nova forma de amar. Por esse motivo hoje podemos
            desfrutar de um casamento pleno, em perfeito amor e protegido pela
            Palavra de Deus. Se você vai casar e deseja saber como viver o
            casamento e o relacionamento perfeito como Deus criou, esse curso
            é para você.
          </p>
          <nuxt-picture
            alt="viva-um-casamento-cheio-de-paz-amor-e-alegria"
            width="507"
            height="514"
            loading="lazy"
            class="darken d-block mt-5 mb-5"
            src="/curso-online/viva-um-casamento-cheio-de-paz-amor-e-alegria.jpg"
          />
        </div>
        <div class="col-md-8">
          <h2>VIVA UM CASAMENTO CHEIO DE PAZ, AMOR E ALEGRIA...</h2>
        </div>
        <div class="col-md-10">
          <p>
            O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
            se preparar para o casamento. Quer saber por quê? O casamento foi
            criado por Deus. Ele faz parte do plano original de Deus para a
            humanidade. Um plano de amor, santidade e comunhão. Mas com o
            pecado de Adão, o egoísmo entrou no homem causando a destruição
            dos relacionamentos. <br />
            Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
            Ele trouxe uma nova forma de amar. Por esse motivo hoje podemos
            desfrutar de um casamento pleno, em perfeito amor e protegido pela
            Palavra de Deus. Se você vai casar e deseja saber como viver o
            casamento e o relacionamento perfeito como Deus criou, esse curso
            é para você.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'About',
  props: {
    title: {
      type: String,
      default: 'CURSO DE NOIVOS ONLINE'
    },
    subtitle: {
      type: String,
      default: 'Um tempo de preparação que marcará para sempre a vida de vocês'
    },
    buttonTextMobile: {
      type: String,
      default: 'Faça agora sua inscrição'
    },
    buttonTextDesktop: {
      type: String,
      default: 'Faça sua Inscrição Curso de Noivos'
    },
    buttonUrl: {
      type: String,
      default: ''
    },
    youtubeUrl: {
      type: String,
      default: 'https://www.youtube.com/watch?v=uilkmUoXoLU'
    },
    backgroundMobile: {
      type: String,
      default: '/curso-online/curso-de-noivos-online-mobile.jpg'
    },
    backgroundDesktop: {
      type: String,
      default: '/curso-online/curso-de-noivos-online.jpg'
    }
  },
  data(){
    return {

    }
  },

  computed: {
    textInscricao(){
      return this.isMobile ? this.buttonTextMobile : this.buttonTextDesktop
    },
  },

  mounted () {
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