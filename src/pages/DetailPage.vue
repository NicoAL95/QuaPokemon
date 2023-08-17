<template>
  <q-page class="">
    <q-card class="my-card">
      <img :src="pokemon.sprites?.front_shiny" />

      <q-card-section>
        <div class="text-h6">{{ pokemon.name }}</div>
        <div class="text-subtitle2">{{ abilities }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// Detail page belom sempet bang
import { ref, defineProps } from "vue";

const props = defineProps({
  pokemon: Object,
});

const abilities = (pokemon) => {
  if (pokemon.abilities?.length > 0) {
    return pokemon.abilities[0].ability.name;
  }
  return "No abilities";
};
</script>
