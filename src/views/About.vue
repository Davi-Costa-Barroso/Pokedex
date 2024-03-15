<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div v-if="pokemon" :class="[
      'sm: w-80 md:w-1/2',
      'shadow-2xl',
      'flex',
      'flex-col',
      'items-center',
      {
        'bg-red-500': pokemon.types.some(tipo => tipo.type.name === 'fire'),
        'bg-green-500': pokemon.types.some(tipo => tipo.type.name === 'grass'),
        'bg-brown-700': pokemon.types.some(tipo => tipo.type.name === 'ground'),
        'bg-blue-300': pokemon.types.some(tipo => tipo.type.name === 'water'),
        'bg-green-700': pokemon.types.some(tipo => tipo.type.name === 'bug'),
        'bg-purple-200': pokemon.types.some(tipo => tipo.type.name === 'normal'),
        'bg-yellow-400': pokemon.types.some(tipo => tipo.type.name === 'electric'),
        'bg-purple-700': pokemon.types.some(tipo => tipo.type.name === 'poison'),
        'bg-pink-700': pokemon.types.some(tipo => tipo.type.name === 'fairy'),
        'bg-gray-900': !pokemon.types.some(tipo => ['fire', 'grass', 'ground', 'water', 'bug', 'normal', 'electric', 'poison', 'fairy'].includes(tipo.type.name))
      }
    ]">
      <h3 class="text-2xl text-white uppercase text-center">{{ pokemon.name }}</h3>
      <div class="flex justify-center">
        <img class="w-48 hover:scale-125" :src="pokemon.sprites.front_default" alt="front" />
        <img class="w-48 hover:scale-125" :src="pokemon.sprites.back_default" alt="back" />
      </div>
      <div v-for="(tipo, index) in pokemon.types" :key="index" class="flex text-black flex justify-center">
        <h4 class="p-2 pl-5 pr-5 mb-1 rounded-2xl border-1 text-white text-center hover:scale-105" :class="{
      'bg-orange-500': pokemon.types.some(tipo => tipo.type.name === 'fire'),
      'bg-green-600': pokemon.types.some(tipo => tipo.type.name === 'grass'),
      'bg-brown-500': pokemon.types.some(tipo => tipo.type.name === 'ground'),
      'bg-blue-500': pokemon.types.some(tipo => tipo.type.name === 'water'),
      'bg-green-500': pokemon.types.some(tipo => tipo.type.name === 'bug'),
      'bg-purple-400': pokemon.types.some(tipo => tipo.type.name === 'normal'),
      'bg-yellow-500': pokemon.types.some(tipo => tipo.type.name === 'electric'),
      'bg-purple-500': pokemon.types.some(tipo => tipo.type.name === 'poison'),
      'bg-pink-500': pokemon.types.some(tipo => tipo.type.name === 'fairy'),
      'bg-gray-500': !pokemon.types.some(tipo => ['fire', 'grass', 'ground', 'water', 'bug', 'normal', 'electric', 'fairy', 'poison'].includes(tipo.type.name))
    }">
          {{ tipo.type.name }}
        </h4>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link to="/">
        <button class="bg-gray-500 text-white font-bold pl-10 pr-10 p-1 rounded-md hover:scale-105">
          Voltar
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
export default {
  name: 'AboutView',
  setup() {
    const route = useRoute();
    const state = reactive({
      pokemon: null
    })
    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.pokemon = data;
      })
    return { ...toRefs(state) }
  }
}
</script>