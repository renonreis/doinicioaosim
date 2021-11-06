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
main {
  margin-top: 70px;
}
</style>
