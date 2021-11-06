<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/_global/header.vue'
import Footer from '@/components/_global/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
