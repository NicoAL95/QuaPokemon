<template>
  <q-page class="">
    <div class="row">
      <div
        class="col-12 col-md-4"
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
      >
        <q-card class="my-card">
          <img :src="pokemon.sprites.front_shiny" />

          <q-card-section>
            <div class="text-h6">{{ pokemon.name }}</div>
            <div class="text-subtitle2">
              {{ pokemon.abilities[0].ability.name }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiClient from "src/boot/axios";
import HasilCari from "src/components/HasilCari.vue";

// State
const pokemonList = ref([]);
const eachPokemon = ref([]);

const fetchPokemonData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    // Kenapa response harus pakai await?
    let data = await response.json();
    let results = await data.results;

    results.forEach((item) => {
      pokemonList.value.push(fetchEachPokemon(item));
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchEachPokemon = async (item) => {
  try {
    const response = await fetch(
      `${"https://pokeapi.co/api/v2/pokemon/" + item.name}`
    );
    let data = await response.json();
    return data; // Mengembalikan data Pokemon
  } catch (error) {
    console.error(error);
    return null;
  }
};

onMounted(async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();
    let results = await data.results;

    // Promise all sebenrnya buat apa?
    const pokemonDataArray = await Promise.all(
      results.map((item) => fetchEachPokemon(item))
    );

    // Mengakses nilai asli array menggunakan .value
    pokemonList.value = pokemonDataArray.filter((data) => data !== null);
  } catch (error) {
    console.error(error);
  }
});
</script>
