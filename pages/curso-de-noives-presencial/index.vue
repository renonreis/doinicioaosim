<template>
  <Main>
    <section class="banner">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="~assets/images/curso-online/curso-de-noivos-online.jpg"
        />
        <img
          class="img-banner"
          src="~assets/images/curso-online/curso-de-noivos-online-mobile.jpg"
        />
      </picture>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Main</h1>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import Main from '@/components/shared/main.vue'

export default {
  components: {
    Main
  }
}
</script>

<style lang="scss" scoped>

.banner {
  position: relative;
  min-height: 1240px;
  .img-banner {
    position: absolute;
    height: 975px;
    margin-left: 50%;
    object-fit: cover;
    object-position: top;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;

    @media screen and (max-width: 768px) {
      height: auto;
      margin-left: 0;
      transform: initial;
    }
  }
}


</style>