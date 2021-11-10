<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <b-navbar>
            <b-collapse id="nav-collapse" is-nav>
              <Menu class="d-none d-lg-flex" />

              <b-navbar-nav class="ml-auto">
                <b-nav-item to="/blog" class="d-none d-lg-flex">
                  Blog
                </b-nav-item>
                <b-nav-item href="#" class="btn-login d-none d-lg-flex">
                  Entrar
                </b-nav-item>
                <b-nav-item
                  v-b-toggle.mobile-sidebar
                  class="menu-mobile d-lg-none"
                  ><IconMenu
                /></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

          <b-sidebar
            id="mobile-sidebar"
            aria-labelledby="sidebar-no-header-title"
            no-header
            backdrop
            right
            shadow
          >
            <template #default="{ hide }">
              <div class="p-3">
                <p>
                  <span class="btn small mb-4" @click="hide">X</span>
                </p>
                <h4 id="sidebar-no-header-title" class="text-center">
                  <n-link to="/">
                    <nuxt-picture
                      loading="lazy"
                      class="img-comece d-none d-lg-flex"
                      src="/elements/curso-de-noivos-do-inicio-ao-sim.png"
                    />
                  </n-link>
                </h4>

                <Menu vertical />

                <b-navbar-nav vertical>
                  <b-nav-item to="/blog"> Blog </b-nav-item>
                  <b-nav-item href="#" target="_blank" class="btn-login">
                    <span class="px-4 text-center">Entrar</span>
                  </b-nav-item>
                  <b-nav-item
                    v-b-toggle.mobile-sidebar
                    class="menu-mobile d-lg-none"
                    ><IconMenu
                  /></b-nav-item>
                </b-navbar-nav>
              </div>
            </template>
          </b-sidebar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const Menu = () => import('@/components/shared/menu')
const IconMenu = () => import('@/components/svg/icon-menu')

export default {
  components: {
    Menu,
    IconMenu
  }
}
</script>

<style lang="scss">

header {  
  position: absolute;  
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

  @media screen and (min-width: 992px){
    background-color: $white;
    position: fixed;
  }
}

.b-sidebar-body {
  background-color: $white;
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

</style>
