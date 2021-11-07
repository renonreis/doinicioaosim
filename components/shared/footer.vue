<template>
  <footer>
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 text-center">
          <p class="abba">
            <span
              >Projeto idealizado e ministrado pela Comunhão Cristã Abba e
              Ministerio de Jovens</span
            >
            <span
              class="
                d-inline-flex
                align-middle
                comunhao_crista_abba_aj_abba_jovem
              "
            ></span
            ><br />
            © 2021 - Curso de Noivos Do Início ao Sim - CNPJ 20.012.672/0001-24
            - Rua Augusto de Mari, 3400 - Portão - Curitiba - Paraná - WhatsApp
            41 98791-3030
          </p>
        </div>
        <div class="col external-links d-flex justify-content-center">
          <h4>
            <span>Siga-nos</span>
            <a
              v-for="media in socialMedia"
              :key="media.id"
              :href="media.link"
              target="_blank"
            >
              <span
                class="d-inline-flex align-middle"
                :class="media.icon"
              ></span>
            </a>
          </h4>
          <h4>
            <span>Instale agora</span>
            <a
              v-for="link in appLinks"
              :key="link.id"
              :href="link.link"
              target="_blank"
            >
              <span
                class="d-inline-flex align-middle"
                :class="link.icon"
              ></span>
            </a>
          </h4>
        </div>
      </div>
    </div>

    <div class="subfooter">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <p>
              "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito,
              para que todo o que nele crer não pereça, mas tenha a vida
              eterna”. <strong>João 3:16</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <p>
              <span class="d-inline-flex align-middle ummense mr-4"></span>
              desenvolvido com
              <span
                class="d-inline-flex align-middle icon_coracao"
                alt="amor"
              ></span>
              por
              <span
                class="d-inline-flex align-middle icon_evonline"
                alt="Evonline"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      socialMedia: [
        {
          id: 1,
          link: '#',
          icon: 'icon_instagram'
        },
        {
          id: 2,
          link: '#',
          icon: 'icon_facebook'
        },
        {
          id: 3,
          link: '#',
          icon: 'icon_youtube'
        },
      ],
      appLinks: [
        {
          id: 1,
          link: '#',
          icon: 'download_on_the_app_store'
        },
        {
          id: 2,
          link: '#',
          icon: 'download_get_it_on_google_play'
        },
      ]  
    }    
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $bg-neutral;
  overflow: hidden;
  padding: 210px 0 0;
  position: relative;

  &::before {
    content: url(@/assets/images/elements/rodape-curso-de-noivos.png);
    margin-left: -50%;
    position: absolute;
    margin-left: 50%;
    object-position: center;
    pointer-events: none;
    top: 0;
    transform: translateX(-50%);
  }

  p {
    font-size: 14px;

    &.abba {
      font-size: 16px;
      span {
        font-weight: 500;
      }
    }
  }

  .external-links {
    h4 {
      font-weight: 400;
      margin: 0 25px;
      a {
        margin: 0 5px;
      }
    }
  }

  .subfooter {
    background-color: $bg-light;
    padding: 12px 0;
    p {
      font-size: 15px;
      font-style: italic;
      margin: 0;
    }
  }

  .copyright {
    background-color: $white;
    padding: 20px 0;
    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 991px){
    p {
      line-height: 25px;
    }

    .abba {
      display: flex;
      flex-direction: column;
      align-content: center;
      .comunhao_crista_abba_aj_abba_jovem {
        margin: 25px auto;
        order: -1;
      }
    }

    .external-links {
      flex-direction: column;
      align-content: center;
      h4 {
        text-align: center;
        margin-bottom: 25px;
        span {
          display: block;
        }
        a {
          margin: 0 5px 10px;
          display: inline-block;
        }
      }
      
    }
  }
}
</style>
