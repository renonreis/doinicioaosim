<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
const Header = () => import('./header')
const Footer = () => import('./footer')

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
main {
  @media screen and (min-width: 992px) {
    margin-top: 70px;
  }
}
</style>
