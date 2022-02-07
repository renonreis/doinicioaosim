<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col d-none d-lg-flex">
          <b-navbar type="none">
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="mr-auto">
                <b-nav-item to="/" class="d-none d-lg-flex">INÍCIO</b-nav-item>
                <b-nav-item to="/sobre" class="d-none d-lg-flex">SOBRE</b-nav-item>
                <b-nav-item to="/blog" class="d-none d-lg-flex">BLOG</b-nav-item>
                <b-nav-item to="/curso-na-sua-igreja" class="d-none d-lg-flex">CURSO NA SUA IGREJA</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>

        <div class="col-md-2 d-none d-lg-flex text-center align-self-center">
          <nuxt-picture
            alt="Do Início ao Sim Logo"
            width="213"
            height="27"
            loading="lazy"
            class="m-auto"
            src="/elements/logo-do-inicio-ao-sim.png"
          />
        </div>

        <div class="col">
          <b-navbar type="none">
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  to="/curso-de-noivos-presencial"
                  class="d-none d-lg-flex"
                >CURSO DE NOIVOS PRESENCIAL</b-nav-item>
                <b-nav-item
                  to="/curso-de-noivos-online"
                  class="d-none d-lg-flex"
                >CURSO DE NOIVOS ONLINE</b-nav-item>
                <b-nav-item href="#" class="btn-login d-none d-lg-flex">Entrar</b-nav-item>
                <div v-b-toggle.mobile-sidebar role="button" class="menu-mobile d-lg-none">
                  <nuxt-picture loading="lazy" src="/icons/menu.png" alt="Menu - Do início ao Sim" />
                </div>
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

                <b-navbar-nav vertical>
                  <b-nav-item to="/">Início</b-nav-item>
                  <b-nav-item to="/sobre">Sobre</b-nav-item>
                  <b-nav-item to="/blog">Blog</b-nav-item>
                  <b-nav-item to="/curso-na-sua-igreja">Curso na sua Igreja</b-nav-item>
                  <b-nav-item to="/curso-de-noivos-presencial">Curso de Noivos Presencial</b-nav-item>
                  <b-nav-item to="/curso-de-noivos-online">Curso de Noivos Online</b-nav-item>
                  <b-nav-item href="#" target="_blank" class="btn-login">
                    <span class="px-4 text-center">Entrar</span>
                  </b-nav-item>
                  <div v-b-toggle.mobile-sidebar role="button" class="menu-mobile d-lg-none">
                    <IconMenu />
                  </div>
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
const IconMenu = () => import('@/components/svg/icon-menu')

export default {
  components: {
    IconMenu,
  },
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
          font-size: 14px;
          padding: 5px 7px;
        }
      }

      .menu-mobile {
        img {
          width: 48px;
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

          @media screen and (min-width: 1200px) and (max-width: 1440px) {
            min-width: 75px;
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
