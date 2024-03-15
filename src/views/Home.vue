<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-red-500 h-full sm:w-80 md:w-1/2">
      <div class="justify-center text-center">
        <img src="../assets/pokedex.png" class="mx-auto hover:scale-105"/>
        <input type="text" placeholder="Nome do pokémon" v-model="nomePokemon" name="pokemon" id="pokemon"
          class="mt-5 p-2 rounded-md border-0 shadow-md ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-red-500" />
        </div>
      <div v-if="nomePokemon" class="p-4 flex flex-wrap justify-center m-4 bg-gray-100 border-2 border-gray-900">
        <div class="m-1 font-bold text-white text-2x bg-blue-400 p-2 rounded-md shadow-md hover:scale-105" v-for="(pokemon, index) in filtroPokemon" :key="index">
          <router-link :to="`/about/${urlId[pokemon.name]}`">
            {{pokemon.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

export default {
  name: 'HomeView',
  setup() {

    const state = reactive({
      pokemons: [],
      urlId: {},
      nomePokemon: "",
      filtroPokemon: computed(() => updatePokemon()),
    })

    function updatePokemon() {
      if (!state.nomePokemon) {
        return []
      }
      return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.nomePokemon))
    }

    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
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
