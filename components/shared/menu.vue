<template>
  <b-navbar-nav>
    <b-nav-item
      v-for="menu in menus"
      :key="menu.nome"
      :href="menu.url"
      :class="menu.class"
    >
      {{ menu.nome }}
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  data(){
    return {
      menus: [
        {
          nome: 'Início',
          url: '/doinicioaosim',
          class: ''
        },
        {
          nome: 'Sobre',
          url: '/sobre',
          class: ''
        },
        {
          nome: 'Curso na sua igreja',
          url: '/curso-na-sua-igreja',
          class: ''
        },
        {
          nome: 'Curso de noivos presencial',
          url: '/curso-de-noives-presencial',
          class: ''
        },
        {
          nome: 'Curso de noivos online',
          url: '/curso-de-noivos-online',
          class: ''
        },
      ]
    }
  }
}
</script>