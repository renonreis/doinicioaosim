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
          <div class="col text-center content">
            <picture>
              <img
                class="banner-logo"
                src="~assets/images/elements/do-inicio-ao-sim.png"
              />
            </picture>
            <h1 class="mb-3">CURSO DE NOIVOS ON-LINE</h1>
            <p>
              Um tempo de preparação que marcará para sempre a vida de vocês
            </p>
            <a href="" class="btn large mt-2 mb-5"
              >Faça sua Inscrição Curso de Noivos
            </a>
            <div class="mt-5 pt-5">
              <iframe
                width="900"
                height="510"
                src="https://www.youtube-nocookie.com/embed/uilkmUoXoLU?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h2>PREPAREM-SE PARA UM NOVO TEMPO NA SUA VIDA</h2>
            <h4 class="primary mb-3">CURSO DE NOIVOS E NAMORO CRISTÃO</h4>
          </div>
          <div class="col-md-10">
            <p>
              O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
              se preparar para o casamento. Quer saber por quê? O casamento foi
              criado por Deus. Ele faz parte do plano original de Deus para a
              humanidade. Um plano de amor, santidade e comunhão. Mas com o
              pecado de Adão, o egoísmo entrou no homem causando a destruição
              nos relacionamentos. <br />
              Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
              Ele trouxe uma nova forma de amar. Por esse motivo hoje podemos
              desfrutar de um casamento pleno, em perfeito amor e protegido pela
              Palavra de Deus. Se você vai casar e deseja saber como viver o
              casamento e o relacionamento perfeito como Deus criou, esse curso
              é para você.
            </p>
            <picture>
              <img
                class="darken mt-5 mb-5"
                src="~assets/images/curso-online/viva-um-casamento-cheio-de-paz-amor-e-alegria.jpg"
              />
            </picture>
          </div>
          <div class="col-md-8">
            <h2>VIVA UM CASAMENTO CHEIO DE PAZ, AMOR E ALEGRIA...</h2>
          </div>
          <div class="col-md-10">
            <p>
              O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
              se preparar para o casamento. Quer saber por quê? O casamento foi
              criado por Deus. Ele faz parte do plano original de Deus para a
              humanidade. Um plano de amor, santidade e comunhão. Mas com o
              pecado de Adão, o egoísmo entrou no homem causando a destruição
              dos relacionamentos. <br />
              Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
              Ele trouxe uma nova forma de amar. Por esse motivo hoje podemos
              desfrutar de um casamento pleno, em perfeito amor e protegido pela
              Palavra de Deus. Se você vai casar e deseja saber como viver o
              casamento e o relacionamento perfeito como Deus criou, esse curso
              é para você.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="sem-brigas">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-9">
            <h2>...SEM BRIGAS, MEDO, CIÚMES, CULPA, EGOÍSMO...</h2>
            <p>
              O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
              se preparar para o casamento. Quer saber por quê? O casamento foi
              criado por Deus. Ele faz parte do plano original de Deus para a
              humanidade.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="modulos">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 mb-4 text-center">
            <h2>QUAIS SÃO OS TEMAS ABORDADOS NO CURSO DE NOIVOS?</h2>
            <p>
              No Curso de Noivos Online vocês terão acesso aos seguintes
              módulos:
            </p>
          </div>

          <div
            v-for="modulo in modulos"
            :key="modulo.id"
            :class="modulo.class"
            class="lista-modulos"
          >
            <div class="box">
              <div :class="modulo.sprite" class="icon"></div>
              <div class="description">
                <h3>{{ modulo.title }}</h3>
                <p class="subtitle">{{ modulo.subtitle }}</p>
                <p>{{ modulo.description }}</p>
              </div>
            </div>
          </div>

          <div class="col-md-9 text-center">
            <a href="" class="btn large">Gostei! Quero fazer o curso</a>
            <picture>
              <img
                class="darken mt-5 mb-5 pt-5"
                src="~assets/images/curso-online/como-funciona-o-curso-de-noivos-online.jpg"
              />
            </picture>
          </div>

          <div class="col-md-12 text-center mb-4">
            <h2>COMO FUNCIONA O CURSO DE NOIVOS ON-LINE?</h2>
          </div>
          <div
            v-for="item in como_funciona"
            :key="item.id"
            class="lista-como-funciona col-md-4 mb-5 text-center"
          >
            <div :class="item.sprite" class="icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import cursoNoivosOnline from '@/assets/json/cursos-de-noivos-online.json'

import Main from '@/components/shared/main.vue'

export default {
  components: {
    Main
  },
  data(){
    return {
      modulos: cursoNoivosOnline.modulos,
      como_funciona: cursoNoivosOnline.como_funciona
    }
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

  .content {
    color:$white;
    padding-top: 65px;
    
    .banner-logo {
      margin-bottom: 65px;
    }

    h1 {
      color: $white;
    }

    p {
      color: $white;
    }

    iframe {
      border-radius: 10px;
    }
  }
}

.about {
  overflow: hidden;
  padding: 210px 0 90px;
  position: relative;

  &::before {
    content: url(@/assets/images/elements/curso-de-noivos.png);
    position: absolute;
    margin-left: 50%;
    object-position: center;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
  }

  &::after {
    background: $bg-light;
    bottom: 0;
    content: '';
    display: block;
    height: 800px;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

}

.sem-brigas {
  background: $bg-neutral;
}

.modulos {
  padding: 90px 0 45px;
  position: relative;

  &::after {
    background: $bg-light;
    bottom: 0;
    content: '';
    display: block;
    height: 1130px;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .lista-modulos {
    .box {
      align-items: center;
      background-color: $bg-light;
      border-radius: 10px;
      display: flex;
      margin-bottom: 30px;
      min-height: 240px;
      padding: 15px 10px;

      .icon {
        margin-right: 15px;
      }

      h3 {
        color: $primary;
        font-weight: 400;
        margin: 0;
      }

      .subtitle {
        color: $text-light;
        font-size: 13px;
        line-height: 25px;
        margin: 0 0 0 0;
      }

      p {
        font-size: 16px;
        line-height: 30px;
        margin: 0 0 0 0;
      }
    }
  }


}

.lista-como-funciona {
  .icon {
    margin: 0 auto;
  }

  h3 {
    color: $primary;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    margin: 0;
  }
}
</style>