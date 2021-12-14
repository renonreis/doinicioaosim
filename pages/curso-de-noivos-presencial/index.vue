<template>
  <Main>
    <Banner
      title="CURSO DE NOIVOS PRESENCIAL"
      subtitle="Duas vezes ao ano na cidade de Curitiba. Um tempo de preparação que marcará para sempre a vida de vocês."
      button-url="#"
      background-mobile="/curso-online/comecar-bem-faz-bem-mobile.jpg"
      background-desktop="/curso-online/comecar-bem-faz-bem.jpg"
    />

    <About/>
  </Main>
</template>

<script>
const About = () => import('@/components/shared/about')
const Banner = () => import('@/components/shared/banner')
const Main = () => import('@/components/shared/main')

export default {
  components: {
    About,
    Banner,
    Main
  }
}
</script>