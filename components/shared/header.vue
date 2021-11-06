<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <b-navbar class="d-none d-lg-flex">
            <b-collapse id="nav-collapse" is-nav>
              <Menu />

              <b-navbar-nav class="ml-auto">
                <b-nav-item>Blog</b-nav-item>
                <b-nav-item class="btn-login">Entrar</b-nav-item>
                <b-nav-item
                  v-b-toggle.mobile-sidebar
                  class="menu-mobile d-md-none"
                  ><IconMenu
                /></b-nav-item>
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
import Menu from '@/components/shared/menu'
import IconMenu from '@/components/svg/icon-menu'

export default {
  components: {
    Menu,
    IconMenu
  }
}
</script>

<style lang="scss">

header {
  background-color: $white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  
  .container {
    max-width: 1360px;
  }

  .navbar {
    padding: 12px 0 ;
    .navbar-nav {
      .nav-link {
        font-size: 18px;
        line-height: 36px;
        padding: 5px 15px;  
        &:hover {
          color: $primary;
        }

        @media screen and (min-width: 992px) and (max-width: 1199px) {
          font-size: 14px;
        }

        @media screen and (min-width: 1200px) and (max-width: 1440px) {
          font-size: 16px;
        }
      }

      .btn-login {
        a {
          background-color: $primary;
          border-radius: 4px;
          color: $white;
          min-width: 125px;
          text-align: center;
          &:hover {
            background-color: $secondary;
            color: $white;
          }
        }
      }
    }
    
  }
}

</style>
