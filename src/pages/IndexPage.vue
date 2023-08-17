<template>
  <q-page class="">
    <div class="row">
      <div
        class="col-12 col-md-3"
        v-for="pokemon in displayedPokemon"
        :key="pokemon.id"
      >
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <q-pagination
          v-model="currentPage"
          :min="1"
          :max="totalPages"
          :max-pages="6"
          :boundary-numbers="false"
          layout="r-l-prev-next"
          class="justify-center dark"
          direction-links
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PokemonCard from "src/components/PokemonCard.vue";
import usePokemonModel from "src/ViewModel/PokemonModel";

const { displayedPokemon, currentPage, totalPages } = usePokemonModel();
</script>
