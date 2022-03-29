<template>
  <Main>
    <Banner
      title="CURSO DE NOIVOS PRESENCIAL"
      subtitle="Duas vezes ao ano na cidade de Curitiba. Um tempo de preparação que marcará para sempre a vida de vocês."
      button-text-mobile="Faça sua Inscrição Curso de Noivos"
      button-text-desktop="Faça agora sua inscrição"
      :url-button="urlCursoPresencial"
      url-youtube="https://youtu.be/mOEFwgUR3Tc"
    >
      <nuxt-picture
        alt="Curso de noivos online"
        width="479"
        height="1013"
        loading="lazy"
        class="img-banner d-flex d-lg-none"
        src="/curso-online/comecar-bem-faz-bem-mobile.jpg"
      />
      <nuxt-picture
        alt="Curso de noivos online"
        width="2560"
        height="975"
        loading="lazy"
        class="img-banner d-none d-lg-flex"
        src="/curso-online/comecar-bem-faz-bem.jpg"
      />
      <video v-if="isMobile" id="myVideo" autoplay muted loop>
        <source
          src="~/static/videos/curso-de-noivos-presencial-m.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
      <video v-if="!isMobile" id="myVideo" autoplay muted loop>
        <source
          src="~/static/videos/curso-de-noivos-presencial.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
    </Banner>

    <section class="about fixed-menu">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h2>DESFRUTE DE UM RELACIONAMENTO CHEIO DE PAZ, AMOR E ALEGRIA</h2>
            <p class="primary mb-3 curso">CURSO DE NOIVOS E NAMORO CRISTÃO</p>
          </div>
          <div class="col-md-10">
            <p>
              No início Deus criou homem e mulher à Sua imagem e semelhança. Ele
              os uniu e os abençoou, e viu que foi muito bom. Este foi o
              primeiro casamento da história. Com a entrada do pecado no mundo,
              homem e mulher perderam a capacidade de amar, pois saíram da
              presença de seu Criador.
            </p>
            <p>
              Mas Deus amou a humanidade e enviou Jesus, por meio de quem
              recebemos o SIM para o amor verdadeiro, para vida em abundância,
              para a paz que ultrapassa o entendimento, para uma vida livre do
              pecado e do egoísmo. Em Jesus recebemos o SIM para todas as
              promessas de Deus.
            </p>
            <p>
              DO INICIO AO SIM quer trazer ao seu conhecimento tudo aquilo que
              foi dado a você por meio de Cristo Jesus, para que você usufrua as
              promessas de Deus em seu relacionamento, seja no namoro, noivado
              ou casamento.
            </p>
            <nuxt-picture
              alt="prepare-se-para-seu-casamento"
              width="507"
              height="514"
              loading="lazy"
              class="darken d-block mt-5 mb-5"
              src="/curso-presencial/prepare-se-para-seu-casamento.jpg"
            />
          </div>
          <div class="col-md-8">
            <h2>PREPARE-SE PARA SEU CASAMENTO</h2>
          </div>
          <div class="col-md-10">
            <p>
              Fazer o Curso de Noivos é a melhor forma de você se preparar para
              uma vida conjugal. Através do Curso de Noivos Do Início ao Sim
              você irá aprender como viver um relacionamento cheio de paz e
              entender como viver a vontade de Deus plenamente.
            </p>
            <p>
              É possível sim viver um Casamento sem medo, com muita paz e
              alegria em todos os momentos (até nas dificuldades)!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="sem-brigas">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-9">
            <h2>
              EXPERIMENTE A BOA, PERFEITA E AGRADÁVEL VONTADE DE DEUS NO SEU
              RELACIONAMENTO
            </h2>
            <p>
              Ao receber o amor e o perdão de Deus através de Cristo Jesus
              nascemos de novo. Passamos a habitar numa nova posição, e nos
              tornamos seres espirituais capazes de enxergar as circunstancias
              não mais com os olhos da alma (cinco sentidos) mas com os olhos
              espirituais (Palavra). Nossos olhos foram abertos para que
              possamos enxergar o próximo com o mesmo amor com que Ele nos vê.
              Isso muda nossa história!
            </p>
            <p class="box-destaque">
              Não se amoldem ao padrão deste mundo, mas transformem-se pela
              renovação da sua mente, para que sejam capazes de experimentar e
              comprovar a boa, agradável e perfeita vontade de Deus. Romanos
              12:2
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
            <a :href="urlCursoPresencial" class="btn large"
              >Gostei! Quero fazer o curso</a
            >
            <nuxt-picture
              alt="como-funciona-o-curso-de-noivos"
              width="507"
              height="514"
              loading="lazy"
              class="darken d-block mt-5 mb-5 pt-5"
              src="/curso-presencial/como-funciona-o-curso-de-noivos.jpg"
            />
          </div>

          <div class="col-lg-9 text-center mb-4">
            <h2>COMO FUNCIONA O CURSO DE NOIVOS ON-LINE?</h2>
          </div>
          <div class="col-md-12 lista-como-funciona">
            <div class="row">
              <div
                v-for="item in comoFunciona"
                :key="item.id"
                class="lista col-md-6 col-lg-4 mb-5 text-lg-center"
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
            <nuxt-picture
              :alt="`${curso.image}`"
              width="479"
              height="540"
              loading="lazy"
              class="d-flex d-lg-none"
              :src="`curso/${curso.image}-mobile.jpg`"
            />
            <nuxt-picture
              :alt="`${curso.image}`"
              width="675"
              height="540"
              loading="lazy"
              class="d-none d-lg-flex"
              :src="`curso/${curso.image}.jpg`"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="comece-agora">
      <nuxt-picture
        alt="comecar-bem-faz-bem"
        width="479"
        height="865"
        loading="lazy"
        class="img-comece d-flex d-lg-none"
        src="/curso-presencial/deixando-o-eu-para-se-tornar-nos-mobile.jpg"
      />
      <nuxt-picture
        alt="comecar-bem-faz-bem"
        width="2560"
        height="657"
        loading="lazy"
        class="img-comece d-none d-lg-flex"
        src="/curso-presencial/deixando-o-eu-para-se-tornar-nos.jpg"
      />

      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10">
            <h2 class="titulo">DEIXANDO O EU, PARA SE TORNAR NÓS</h2>
          </div>
          <div class="col-md-8">
            <p class="text-white">
              Uma das coisas mais fascinantes e bonitas da vida é viver em
              unidade. Assim como Deus Pai, Deus Filho e Deus Espírito Santo
              vivem em unidade, assim nós também podemos viver em perfeita
              unidade.
            </p>
            <a :href="urlCursoPresencial" class="btn large mt-4"
              >Comece agora o curso de Noivos</a
            >
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
            <Carousel />
          </div>
        </div>
      </div>
    </section>

    <section class="perguntas-frequentes">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4 text-center">
            <h2>PERGUNTAS FREQUENTES SOBRE O CURSO</h2>
          </div>
          <div class="col-12">
            <div class="row accordion" role="tablist">
              <div v-for="faq in faqs" :key="faq.id" class="col-md-6">
                <b-card no-body>
                  <b-card-header class="p-1" role="tab">
                    <p
                      v-b-toggle="`accordion-${faq.id}`"
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span>{{ faq.question }}</span>
                      <ArrowFaq />
                    </p>
                  </b-card-header>
                  <b-collapse
                    :id="`accordion-${faq.id}`"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        {{ faq.answer }}
                        <a v-if="faq.link" :href="faq.link">clique aqui.</a>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="inscricao">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center mb-5 pb-3">
            <video v-if="isMobile" width="660" autoplay muted loop>
              <source
                src="~/static/videos/coracao-animado.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
            <video v-if="!isMobile" width="480" autoplay muted loop>
              <source
                src="~/static/videos/coracao-animado.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>
          <div class="col-lg-7 text-center">
            <nuxt-picture
              alt="curso-de-noivos-do-inicio-ao-sim"
              width="236"
              height="68"
              loading="lazy"
              class="banner-logo d-block mb-4"
              src="/elements/curso-de-noivos-do-inicio-ao-sim.png"
            />
            <h2>FAÇA SUA INSCRIÇÃO E COMECE AGORA MESMO!</h2>
            <p class="primary imersao">UMA IMERSÃO INESQUECÍVEL</p>
          </div>
          <div class="col-lg-8 text-center">
            <div class="resumo-modulos">
              <p>
                Presenteie quem você ama e descubra como viver a vontade boa,
                perfeita e agradável de Deus em seu casamento
              </p>
              <ul>
                <li v-for="item in listaModulos" :key="item.id">
                  <p>
                    <span
                      :class="item.icon"
                      class="d-inline-flex align-middle"
                    ></span>
                    {{ item.text }}
                  </p>
                </li>
              </ul>
            </div>
            <p class="primary mt-5 price">R$ 97,00</p>
            <a :href="urlCursoPresencial" class="btn xlarge">{{
              comecaoAgora
            }}</a>
            <p class="text-button">
              <a href="/solicitar-subsidio"
                >Deseja fazer o curso e não tem como pagar?</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import cursoNoivoProsencial from '@/static/json/cursos-de-noivos-presencial.json'

import ArrowFaq from '@/components/svg/icon-arrow-faq'
import Banner from '@/components/shared/Banner'
import Main from '@/components/shared/main'
import Carousel from '@/components/shared/Carousel'

export default {
  components: {
    ArrowFaq,
    Banner,
    Main,
    Carousel,
  },

  data() {
    return {
      modulos: cursoNoivoProsencial.modulos,
      comoFunciona: cursoNoivoProsencial.como_funciona,
      cursos: cursoNoivoProsencial.cursos,
      depoimentos: cursoNoivoProsencial.depoimentos,
      faqs: cursoNoivoProsencial.faqs,
      listaModulos: cursoNoivoProsencial.inclusos,

      isMobile: false,

      urlCursoPresencial:
        'https://portal.sistemaprover.com.br/frontend/inscricao-externa?i=jyKIVtQtakAeiqICbAkv-YOnRMpcud1aRDSdLkYv1fE,',
    }
  },

  computed: {
    comecaoAgora() {
      return this.isMobile
        ? 'Comece agora o curso de noivos'
        : 'Faça sua Inscrição Curso de Noivos Online'
    },
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 992
    },
  },
}
</script>

<style lang="scss" src="./styles.scss"></style>
