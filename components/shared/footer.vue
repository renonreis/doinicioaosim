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
          <p>
            <span>Siga-nos</span>
            <a
              v-for="media in socialMedia"
              :key="media.id"
              :href="`${media.link}`"
              target="_blank"
              rel="noopener"
            >
              <span
                class="d-inline-flex align-middle"
                :class="media.icon"
              ></span>
            </a>
          </p>
          <p>
            <span>Instale agora</span>
            <a
              v-for="link in appLinks"
              :key="link.id"
              :href="link.link"
              target="_blank"
              rel="noopener"
            >
              <span
                class="d-inline-flex align-middle"
                :class="link.icon"
              ></span>
            </a>
          </p>
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
              <a
                href="https://www.ummense.com/promo/doinicioaosim"
                target="_blank"
              >
                <span class="d-inline-flex align-middle ummense mr-4"></span>
              </a>
              desenvolvido com
              <span
                class="d-inline-flex align-middle icon_coracao"
                alt="amor"
              ></span>
              por
              <a href="https://www.evonline.com.br/"
                ><span
                  class="d-inline-flex align-middle icon_evonline"
                  alt="Evonline"
                ></span
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      href="https://api.whatsapp.com/send?phone=5541987913030"
      class="whatsapp-float d-block"
    >
      <nuxt-picture
        alt="Fale conosco por Whatsapp"
        width="166"
        height="112"
        loading="lazy"
        src="/elements/whatsapp.png"
      />
    </a>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      socialMedia: [
        {
          id: 1,
          link: 'https://www.instagram.com/doinicioaosim_oficial/',
          icon: 'icon_instagram'
        },
        {
          id: 2,
          link: 'https://www.facebook.com/doinicioaosim/',
          icon: 'icon_facebook'
        },
        {
          id: 3,
          link: 'https://www.youtube.com/c/DoInícioaoSim',
          icon: 'icon_youtube'
        },
      ],
      appLinks: [
        {
          id: 1,
          link: 'https://apps.apple.com/mn/app/do-in%C3%ADcio-ao-sim/id1502254589',
          icon: 'download_on_the_app_store'
        },
        {
          id: 2,
          link: 'https://play.google.com/store/apps/details?id=com.uapp.doinicioaosim&hl=pt',
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
    content: url(@/static/images/elements/rodape-curso-de-noivos.png);
    margin-left: 50%;
    position: absolute;
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
    p {
      align-items: center;
      display: flex;
      font-size: 18px;
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

  .whatsapp-float {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 99;
  }
}
</style>
