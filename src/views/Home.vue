<template>
  <div class="home">
    <h3>Pokedex</h3>
    {{ pokemons }}
  </div>
</template>  

<script>
import { reactive, toRefs } from "vue";

export default {
  name: 'HomeView',
  setup() {

    const state = reactive({
      pokemons: [],
      urlId: {},
    })

    fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
      .then((res) => res.json())
      .then((data) => {
        state.pokemons = data.results;
        state.urlId = data.results.reduce((acc, cur, idx) =>
          acc = { ...acc, [cur.name]: idx + 1 }, {})
        console.log(state)
      })

    return { ...toRefs(state) }
  },
}
</script>
