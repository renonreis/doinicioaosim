<template>
  <Main>
    <Banner
      title="CURSO DE NOIVOS ONLINE"
      subtitle="Um tempo de preparação que marcará para sempre a vida de vocês"
      button-text-mobile="Faça sua Inscrição Curso de Noivos"
      button-text-desktop="Faça agora sua inscrição"
      url-button
      url-youtube="https://www.youtube.com/watch?v=uilkmUoXoLU"
    >
      <nuxt-picture
        alt="Curso de noivos online"
        width="479"
        height="1013"
        loading="lazy"
        class="img-banner d-flex d-lg-none"
        src="/curso-online/curso-de-noivos-online-mobile.jpg"
      />
      <nuxt-picture
        alt="Curso de noivos online"
        width="2560"
        height="975"
        loading="lazy"
        class="img-banner d-none d-lg-flex"
        src="/curso-online/curso-de-noivos-online.jpg"
      />
      <video v-if="isMobile" id="myVideo" autoplay muted loop>
        <source src="~/static/videos/curso-de-noivos-online-m.mp4" type="video/mp4" />Your browser does not support HTML video.
      </video>
      <video v-if="!isMobile" id="myVideo" autoplay muted loop>
        <source src="~/static/videos/curso-de-noivos-online.mp4" type="video/mp4" />Your browser does not support HTML video.
      </video>
    </Banner>

    <section class="about">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h2>PREPAREM-SE PARA UM NOVO TEMPO NA SUA VIDA</h2>
            <p class="primary mb-3 curso">CURSO DE NOIVOS E NAMORO CRISTÃO</p>
          </div>
          <div class="col-md-10">
            <p>
              O Curso de Noivos Do Início ao Sim é uma excelente maneira de você
              se preparar para o casamento. Quer saber por quê? O casamento foi
              criado por Deus. Ele faz parte do plano original de Deus para a
              humanidade. Um plano de amor, santidade e comunhão. Mas com o
              pecado de Adão, o egoísmo entrou no homem causando a destruição
              nos relacionamentos.
              <br />Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
              Ele trouxe uma nova forma de amar. Por esse motivo hoje podemos
              desfrutar de um casamento pleno, em perfeito amor e protegido pela
              Palavra de Deus. Se você vai casar e deseja saber como viver o
              casamento e o relacionamento perfeito como Deus criou, esse curso
              é para você.
            </p>
            <nuxt-picture
              alt="viva-um-casamento-cheio-de-paz-amor-e-alegria"
              width="507"
              height="514"
              loading="lazy"
              class="darken d-block mt-5 mb-5"
              src="/curso-online/viva-um-casamento-cheio-de-paz-amor-e-alegria.jpg"
            />
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
              dos relacionamentos.
              <br />Jesus veio ao mundo resgatar a comunhão com Deus e com o próximo.
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
                    <div :class="modulo.sprite" class="icon lazy"></div>
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
            <a href class="btn large">Gostei! Quero fazer o curso</a>
            <nuxt-picture
              alt="como-funciona-o-curso-de-noivos"
              width="507"
              height="514"
              loading="lazy"
              class="darken d-block mt-5 mb-5 pt-5"
              src="/curso-online/como-funciona-o-curso-de-noivos-online.jpg"
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
                <div :class="item.sprite" class="icon lazy"></div>
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
        src="/curso-online/comecar-bem-faz-bem-mobile.jpg"
      />
      <nuxt-picture
        alt="comecar-bem-faz-bem"
        width="2560"
        height="657"
        loading="lazy"
        class="img-comece d-none d-lg-flex"
        src="/curso-online/comecar-bem-faz-bem.jpg"
      />

      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10">
            <h2 class="titulo">COMEÇAR BEM, FAZ BEM.</h2>
          </div>
          <div class="col-md-8">
            <p class="text-white">
              Ao dizer sim no dia do seu casamento, é possível sim viver em paz
              e alegria todos os dias, esta é a vontade do nosso pai celestial
              que é boa, perfeita e agradável.
            </p>
            <a href class="btn large mt-4">Comece agora o curso de Noivos</a>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-11 text-center">
            <h2>MAIS DE 500 CASAIS JÁ REALIZARAM O CURSO VEJA ALGUNS DEPOIMENTOS</h2>
          </div>
          <div class="col-md-11">
            <client-only placeholder="Carregando...">
              <agile :key="depoimentos.length" :options="myOptions">
                <div v-for="depoimento in depoimentos" :key="depoimento.id" class="slide">
                  <div class="box text-center">
                    <div class="cinco_estrelas"></div>
                    <p>{{ depoimento.description }}</p>
                    <p class="autor">{{ depoimento.autor }}</p>
                  </div>
                </div>

                <template slot="prevButton">
                  <ArrowLeft />
                </template>
                <template slot="nextButton">
                  <ArrowRight />
                </template>
              </agile>
            </client-only>
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
                  <b-collapse :id="`accordion-${faq.id}`" accordion="my-accordion" role="tabpanel">
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
              <source src="~/static/videos/coracao-animado.mp4" type="video/mp4" />Your browser does not support HTML video.
            </video>
            <video v-if="!isMobile" width="480" autoplay muted loop>
              <source src="~/static/videos/coracao-animado.mp4" type="video/mp4" />Your browser does not support HTML video.
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
                    <span :class="item.icon" class="d-inline-flex align-middle"></span>
                    {{ item.text }}
                  </p>
                </li>
              </ul>
            </div>
            <p class="primary mt-5 price">R$ 97,00</p>
            <a href class="btn xlarge">{{ comecaoAgora }}</a>
            <p class="text-button">
              <a href="/solicitar-subsidio">Deseja fazer o curso e não tem como pagar?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import { VueAgile } from 'vue-agile'
import cursoNoivosOnline from '@/static/json/cursos-de-noivos-online.json'

const ArrowFaq = () => import('@/components/svg/icon-arrow-faq')
const ArrowLeft = () => import('@/components/svg/arrow-left')
const ArrowRight = () => import('@/components/svg/arrow-right')
const Banner = () => import('@/components/shared/Banner')
const Main = () => import('@/components/shared/main')

export default {
  name: 'CursoNoivosOnline',
  components: {
    ArrowFaq,
    ArrowLeft,
    ArrowRight,
    Banner,
    Main,
    agile: VueAgile,
  },
  data() {
    return {
      modulos: cursoNoivosOnline.modulos,
      comoFunciona: cursoNoivosOnline.como_funciona,
      cursos: cursoNoivosOnline.cursos,
      depoimentos: [
        {
          id: 1,
          description:
            'Durante o curso, eu pude enxergar com mais clareza, o que de fato é o casamento como instituição estabelecida por Deus. Posso dizer, que agora, me sinto muito mais seguro e preparado para viver um casamento feliz e abençoado, que alegre a Deus em todos os aspectos.',
          autor: 'THIAGO M. NASCIMENTO - VILHENA/RO',
        },
        {
          id: 2,
          description:
            'Eu acredito que o nosso casamento vai ser incrível e abençoado. Acredito que Deus irá fazer grandes coisas por nós e que nós faremos grandes coisas por meio dEle.',
          autor: 'LEONARDO COSTA - CURITIBA/PR',
        },
        {
          id: 3,
          description:
            'No decorrer do curso, foi muito perceptível o agir de Deus em minha vida, me fez perceber alguns pontos que vinha tendo algumas dificuldades, então com a ajuda Dele pode melhorar nesses aspectos.',
          autor: 'LEO C. DALLMAN - POMERODE/SC',
        },
        {
          id: 4,
          description:
            'Através do Curso de Noivos, Deus tem transformado meu pessimismo em relação ao casamento. Ao observar casais, vejo bastante infelicidade e frustração e isso faz com que o casamento pareça algo ruim. Conhecer o que a Bíblia diz me fez entender que é um plano de Deus, quem criou essa união. Por isso, é belo e bom.',
          autor: 'REBECA M. GARCIA - CAMPOS BELOS/GO',
        },
        {
          id: 5,
          description:
            'Deus me  mostrou um lado do casamento que eu não conhecia. Era acostumado com os casamentos do mundo e Deus me mostrou um lado bem melhor, através desse curso, dos exemplos, das ministrações.',
          autor: 'PAMELA FERREIRA - LUIZ ANTÔNIO/SP',
        },
        {
          id: 6,
          description:
            'Estamos muito felizes em ter concluído o curso de noivos com vocês. Foi muito importante e edificante para nós. Ficamos admirados com o carinho e cuidado de vocês na realização desse curso. Inspirador.',
          autor: 'LARISSA FREIRE - BELO HORIZONTE/MG',
        },
        {
          id: 7,
          description:
            'Trata de pontos importantes para a vida de um casal dentro da palavra de Deus, acredito que será benção a todos que fizerem.',
          autor: 'HAMUD S. DA SILVA - COLOMBO/PR',
        },
        {
          id: 8,
          description:
            'Recomendo pois o curso tem uma visão muito ampla do que tem que ser uma vida familiar e debaixo da graça de Deus!',
          autor: 'LUCAS JARDIM - LUIZ ANTÔNIO/SP',
        },
        {
          id: 9,
          description:
            'O curso foi altamente benéfico para meu relacionamento. Tivemos muito avanço como casal e me ajudou a ter mais confiança que tudo vai dar certo.',
          autor: 'THIALLE D. S. LIMA - MATARACA/PB',
        },
        {
          id: 10,
          description:
            'Através do Curso de Noivos pude ter mais certeza ainda do propósito de Deus para a minha vida como pessoa, como noiva e futura esposa. O curso trabalhou diversos assuntos que já havia escutado falar na igreja mas de forma mais amplificada e esclarecedora. Gostei muito!',
          autor: 'TAMMY A. MASSOLIN - CHAPECÓ/SC',
        },
        {
          id: 11,
          description:
            'Todas as afirmações tem base bíblica, coisa que para mim é muito importante. A dinâmica com as perguntas praticamente obriga o casal conversar e sabemos que quanto mais conversamos mais conhecemos a pessoa e isso falta em muitos relacionamentos.',
          autor: 'NICOLAS NUNES - SOLEDADE-RS',
        },
        {
          id: 12,
          description:
            'O curso atendeu nossas expectativas, achei todas as aulas muito bíblicas e que os assuntos abordados são extremamente importantes para conversar antes de casar, talvez a maioria dos casais nem sabe metade do que foi falado aqui.',
          autor: 'VALDI GUINTILIANO - SOLEDADE/RS',
        },
        {
          id: 13,
          description:
            'Acredito que o curso tenha nos auxiliado a enxergar melhor o casamento, ter uma visão diferente dele que não tínhamos antes, e da relação de Deus com esta união.',
          autor: 'BRUNA L. KLABUNDE - POMOERODE/SC',
        },
        {
          id: 14,
          description:
            'Eu e meu noivo pudemos estar mais alinhados aos assuntos abordados. Conversávamos sobre as aulas e foi importante para identificarmos o ponto de vista um do outro. Tenho certeza que meu casamento será extraordinário.',
          autor: 'FERNANDA A. HENN - SÃO PAULO/SP',
        },
      ],
      faqs: cursoNoivosOnline.faqs,
      listaModulos: cursoNoivosOnline.inclusos,

      myOptions: {
        navButtons: true,
        dots: false,
        infinite: false,
        autoplay: true,
      },

      isMobile: false,
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

    document.addEventListener('DOMContentLoaded', function () {
      let lazyloadImages

      if ('IntersectionObserver' in window) {
        lazyloadImages = document.querySelectorAll('.lazy')
        const imageObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const image = entry.target
              image.classList.remove('lazy')
              imageObserver.unobserve(image)
            }
          })
        })

        lazyloadImages.forEach(function (image) {
          imageObserver.observe(image)
        })
      } else {
        let lazyloadThrottleTimeout
        lazyloadImages = document.querySelectorAll('.lazy')

        function lazyload() {
          if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout)
          }

          lazyloadThrottleTimeout = setTimeout(function () {
            const scrollTop = window.scrollY
            lazyloadImages.forEach(function (img) {
              if (img.offsetTop < window.innerHeight + scrollTop) {
                img.src = img.dataset.src
                img.classList.remove('lazy')
              }
            })
            if (lazyloadImages.length === 0) {
              document.removeEventListener('scroll', lazyload)
              window.removeEventListener('resize', lazyload)
              window.removeEventListener('orientationChange', lazyload)
            }
          }, 20)
        }

        document.addEventListener('scroll', lazyload)
        window.addEventListener('resize', lazyload)
        window.addEventListener('orientationChange', lazyload)
      }
    })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 992
    },
  },
}
</script>

<style lang="scss" src="./styles.scss"></style>