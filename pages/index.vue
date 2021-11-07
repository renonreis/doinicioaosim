<template>
  <Main>
    <section class="banner">
      <picture>
        <source
          media="(min-width:992px)"
          srcset="~assets/images/curso-online/curso-de-noivos-online.jpg"
        />
        <img
          class="img-banner"
          src="~assets/images/curso-online/curso-de-noivos-online-mobile.jpg"
        />
      </picture>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 text-center content">
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
            <div class="video mt-5 pt-5">
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

          <div class="col-md-12">
            <div class="container-full">
              <div class="row lista-modulos">
                <div
                  v-for="modulo in modulos"
                  :key="modulo.id"
                  :class="modulo.class"
                  class="modulo"
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
          <div class="lista-como-funciona">
            <div
              v-for="item in como_funciona"
              :key="item.id"
              class="lista col-md-4 mb-5 text-md-center"
            >
              <div :class="item.sprite" class="icon"></div>
              <div class="description">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-for="curso in cursos" :key="curso.id" class="cursos">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-5 text">
            <h2>{{ curso.title }}</h2>
            <p>{{ curso.description }}</p>
          </div>
          <div class="col-md-6 image">
            <picture>
              <source
                media="(min-width:992px)"
                :srcset="require(`~/assets/images/curso/${curso.image}.jpg`)"
              />
              <img
                :src="
                  require(`~/assets/images/curso/${curso.image}-mobile.jpg`)
                "
              />
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section class="comece-agora">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="~assets/images/curso-online/curso-de-noivos-online.jpg"
        />
        <img
          class="img-comece"
          src="~assets/images/curso-online/curso-de-noivos-online-mobile.jpg"
        />
      </picture>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10">
            <h1>COMEÇAR BEM, FAZ BEM.</h1>
          </div>
          <div class="col-md-8">
            <p>
              Ao dizer sim no dia do seu casamento, é possível sim viver em paz
              e alegria todos os dias, esta é a vontade do nosso pai celestial
              que é boa, perfeita e agradável.
            </p>
            <a href="" class="btn large mt-4">Comece agora o curso de Noivos</a>
          </div>
          <div class="col-md-12">
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

    <section class="testimonial">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-11 text-center">
            <h2>
              MAIS DE 500 CASAIS JÁ REALIZARAM O CURSO VEJA ALGUNS DEPOIMENTOS
            </h2>
          </div>
          <div class="col-md-11">
            <client-only placeholder="Carregando...">
              <VueAgile :options="myOptions">
                <div
                  v-for="testimonial in testimonials"
                  :key="testimonial.id"
                  class="slide"
                >
                  <div class="box text-center">
                    <div class="cinco_estrelas"></div>
                    <p>{{ testimonial.description }}</p>
                    <p class="autor">{{ testimonial.autor }}</p>
                  </div>
                </div>

                <template slot="prevButton"><ArrowLeft /></template>
                <template slot="nextButton"><ArrowRight /></template>
              </VueAgile>
            </client-only>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import { VueAgile } from 'vue-agile'
import cursoNoivosOnline from '@/assets/json/cursos-de-noivos-online.json'

import Main from '@/components/shared/main.vue'
import ArrowLeft from '@/components/svg/arrow-left.vue'
import ArrowRight from '@/components/svg/arrow-right.vue'

export default {
  components: {
    VueAgile,

    Main,
    ArrowLeft,
    ArrowRight
  },
  data(){
    return {
      modulos: cursoNoivosOnline.modulos,
      como_funciona: cursoNoivosOnline.como_funciona,
      cursos: cursoNoivosOnline.cursos,
      testimonials: cursoNoivosOnline.depoimentos,

      myOptions: {
        navButtons: true,
        dots: false,
        infinite: false,
        autoplay: true
      }
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
  }

  @media screen and (max-width: 991px){ 
    min-height: 1120px;   
    .video {
        width: calc(100% + 110px);
        margin-left: -55px;
        iframe {
          border-radius: 0;
        }      
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

  @media screen and (max-width: 991px){
    padding: 160px 0 45px;
    &::before {
      content: url(@/assets/images/elements/curso-de-noivos-mobile.png);
    }
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

    @media screen and (max-width: 991px){
      display: flex;
      flex-wrap: nowrap;
      overflow-x: overlay;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;      

      .modulo {
        flex: 0 0 85%;
        scroll-snap-align: start;
        flex-shrink: 0;
      }
      
      .box {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        min-height: 470px;
        padding: 35px 10px 55px;

        .description {
          padding: 0 25px;
        }
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

  @media screen and (max-width: 991px){
    display: flex;
    flex-wrap: nowrap;
    overflow-x: overlay;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;      

    .lista {
      flex: 0 0 85%;
      scroll-snap-align: start;
      flex-shrink: 0;
      .icon {
        margin: 0;
      }

      .description {
        padding: 0 25px;
      }
    }
    
  }
}

.cursos {
  padding: 45px 0;
  &:nth-child(even){
    background-color: $bg-light;
    .image {
      order: -1;
    }
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 991px){
    text-align: center;
    .text {
      order: -1;
    }
    .image {
      margin-left: -15px;
      padding: 0;
      width: calc(100% + 30px);
      img {
        max-width: initial;
        width: initial;
      }
    }
  }
}

.comece-agora {
  padding: 180px 0 90px;
  background-color: $bg-neutral;
  position: relative;

  .img-comece {
    position: absolute;
    height: 660px;
    margin-left: 50%;
    object-fit: cover;
    object-position: top;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    z-index: 0;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      transform: initial;
      iframe {
        width: calc(100% + 30px);
        margin-left: -15px;
        border-radius: 0;
      }
    }
  }

  h1 {
    color: $white;
  }

  p {
    color: $white;
  }

  @media screen and (max-width: 991px){
    h1 {
      font-size: 38px;
      line-height: 50px;
    }
  }
}

.testimonial {
  background-color: $bg-light;
  .slide {
    .box {
      max-width: 725px;
      margin: 0 auto;
      font-style: italic;
      z-index: 99;

      .cinco_estrelas {
        margin: 0 auto;
      }

      .autor {
        font-weight: 600;
        font-style: normal;
      }

    }
  }
}
</style>