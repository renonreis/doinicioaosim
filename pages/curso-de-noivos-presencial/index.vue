<template>
  <Main>
    <Banner :dados="dadosBanner">
      <nuxt-picture
        alt="Curso de noivos online"
        width="479"
        height="1013"
        loading="lazy"
        class="img-banner d-flex d-lg-none"
        src="/curso-online/comecar-bem-faz-bem-mobile.jpg"
      />
      <nuxt-picture
        alt="Curso de noivos online"
        width="2560"
        height="975"
        loading="lazy"
        class="img-banner d-none d-lg-flex"
        src="/curso-online/comecar-bem-faz-bem.jpg"
      />
    </Banner>

    <About/>
  </Main>
</template>

<script>
const About = () => import('@/components/shared/about')
const Banner = () => import('@/components/shared/Banner')
const Main = () => import('@/components/shared/main')

export default {
  components: {
    About,
    Banner,
    Main
  },

  data(){
    return {
      dadosBanner: {},
    }
  },

  mounted() {
    this.setDadosBanner()
  },

  methods: {
    setDadosBanner() {
      this.dadosBanner = {
        title: 'CURSO DE NOIVOS PRESENCIAL',
        subtitle: 'Duas vezes ao ano na cidade de Curitiba. Um tempo de preparação que marcará para sempre a vida de vocês.',
        button: {
          text: {
            mobile: 'Faça sua Inscrição Curso de Noivos',
            desktop: 'Faça agora sua inscrição',
          },
        },
        url: {
          button: '#',
          youtube: 'https://www.youtube.com/watch?v=uilkmUoXoLU'
        }
      }
    }
  }
}
</script>