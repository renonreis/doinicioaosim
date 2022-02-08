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
import Header from './header'
import Footer from './footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
main {
  @media screen and (min-width: 992px) {
    margin-top: 70px;
  }
}
</style>
