<template>
  <Main>
    <section id="Banner">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col col-md-11 text-center">
            <nuxt-picture
              alt="curso-de-noivos-do-inicio-ao-sim"
              width="235"
              height="183"
              loading="lazy"
              class="banner-logo d-block mb-4"
              src="/home/coracao-casamento-relacionamento-repleto-de-paz-amor-alegria.png"
            />
            <h1>
              Seu relacionamento <br/> repleto de paz, amor e alegria
            </h1>
            <p>Desfrute da boa, perfeita e agradável vontade de Deus para seu casamento</p>
            <n-link to="/curso-de-noivos-presencial" class="btn btn--outline medium mb-3">Curso de noivos presencial</n-link>
            <n-link to="/curso-de-noivos-online" class="btn btn--outline medium mb-3">Curso de noivos online</n-link>
          </div>
        </div>
      </div>
    </section>

    <section class="about-home">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h2>Curso de noivos e namoro cristão</h2>
          </div>
          <div class="col-md-10">
            <p>
              No INICIO Deus criou homem e mulher à Sua imagem e semelhança. Ele os uniu e os abençoou, e viu que foi muito bom. Este foi o primeiro casamento da história. Com a entrada do pecado no mundo, homem e mulher perderam a capacidade de amar e de viver a verdade, pois saíram da presença de seu Criador.
            </p>
            <p>
              Mas Deus amou a humanidade e enviou Jesus, por meio de quem recebemos o SIM para o amor verdadeiro, para vida em abundância, para a paz que ultrapassa o entendimento humano, para uma vida livre do pecado e do egoísmo. Em Jesus recebemos o SIM para todas as promessas de Deus.
            </p>
            <p>
              DO INICIO AO SIM quer trazer ao seu conhecimento tudo aquilo que foi dado a você por meio de Cristo Jesus, para que você usufrua as promessas de Deus em seu relacionamento, seja no namoro, noivado ou casamento. Prepare-se para este novo tempo na sua vida, vamos juntos rumo ao SIM!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="relacionamento">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2>Tenha um relacionamento baseado no amor e na verdade</h2>
            <p>Noivado é um tempo de preparação para um relacionamento baseado no amor e na verdade</p>
          </div>
          <div class="col-md-6">
            <div class="box box--amor text-left">
              <h2>Amor</h2>
              <p>Amar é um ato de entrega. É acordar todos os dias e viver por alguém que você quer bem, independente do que ela fez ou deixou de fazer. Seu amor se baseia única e exclusivamente em quem ela é.</p>
              <p>Este amor incondicional que não espera nada em troca é o amor do nosso pai celestial por cada um de nós.</p>
              <p>Somos extensão do amor de Deus neste mundo. Ao viver este perfeito amor no laço matrimonial,  isso transborda gerando transformação nas pessoas que estão próximo de você e ecoa por toda eternidade.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box box--verdade text-left">
              <h2>Verdade</h2>
              <p>A palavra de Deus é a verdade absoluta sobre tudo e sobre todos. Foi através da palavra do nosso pai celestial que tudo se fez e tudo se perdura até os dias de hoje.</p>
              <p>Deus nos deu a sua palavra, seus princípios, suas promessas para que pudéssemos viver tudo aquilo que Ele preparou para nós.</p>
              <p>Ao agasalhar a palavra de Deus no coração, uma nova perspectiva de vida surge. Não mais uma vida de engano, agora uma vida baseada na verdade que é lâmpada para nossos pés e luz para nosso caminhar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="casamento">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-11">
            <h2>Casamento é a forma de Deus revelar ao mundo a vida que Ele sonhou para nós</h2>
            <p>A palavra de Deus nos mostra que é possível sim se entregar por algém incondicionalmente sem esperar nada em troca. <br/>
            A palavra nos revela o amor perfeito, o amor que não suspeita mal, que não obriga o outro a nada. <br/>
            O amor que nos faz verdadeiramente livres que nos dá esperança e um futuro.</p>
          </div>
          <div class="col-12 col-md-4 text-motivos">
            <h3>Viva um novo <br/> tempo na sua vida</h3>
            <p>Ao dizer sim aos planos de Deus, um novo tempo se inicia, um tempo extraordináirio repleto de paz, amor e alegria, um tempo preparado por Deus.</p>
          </div>
          <div class="col-12 col-md-4 text-motivos">
            <h3>Desfrute daquilo que <br/> Deus sonhou para sua vida</h3>
            <p>Foi Ele quem criou o casamento, e nos deixou a sua palavra, seus princípios e promessas para que pudéssemos viver tudo aquilo que Ele sonhou para nós.</p>
          </div>
          <div class="col-12 col-md-4 text-motivos">
            <h3>Viva a mais perfeita <br/> unidade</h3>
            <p>Ao dizer sim a vontade boa, perfeita e agradável do nosso pai celestial, vocês passam a viver a mais perfeita unidade, ao ponto de se tornarem uma só carne, até que a morte os separe.</p>
          </div>
        </div>
      </div>
    </section>
  </Main>
</template>

<script>
import Main from '@/components/shared/main'

export default {
  components: {
    Main,
  },
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>