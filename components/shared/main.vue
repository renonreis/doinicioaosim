<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/shared/header.vue'
import Footer from '@/components/shared/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
