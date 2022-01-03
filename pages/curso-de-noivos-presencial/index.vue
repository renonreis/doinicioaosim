<template>
  <Main>
    <Banner
      :dados="dadosBanner"
    />

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
        },
        background: {
          image: {
            mobile: './curso-online/comecar-bem-faz-bem-mobile.jpg',
            desktop: './curso-online/comecar-bem-faz-bem.jpg'
          }
        }
      }
    }
  }
}
</script>