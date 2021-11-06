<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <b-navbar>
            <b-collapse id="nav-collapse" is-nav>
              <Menu />

              <b-navbar-nav class="ml-auto">
                <b-nav-item>Blog</b-nav-item>
                <b-nav-item class="btn-login">Entrar</b-nav-item>
                <b-nav-item v-b-toggle.mobile-sidebar><IconMenu /></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

          <b-sidebar id="mobile-sidebar" title="Sidebar" backdrop right shadow>
            <div class="px-3 py-2">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </div>
          </b-sidebar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/_global/menu'
import IconMenu from '@/components/svg/icon-menu'

export default {
  components: {
    Menu,
    IconMenu
  }
}
</script>

<style src="./styles.scss" lang="scss" scoped></style>
