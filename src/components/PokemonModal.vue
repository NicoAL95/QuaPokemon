<template>
  <q-dialog
    v-model="showModal"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ pokemon.name }}</div>
        <div class="text-subtitle2">{{ abilities }}</div>
        <!-- Tampilkan informasi lainnya sesuai kebutuhan -->
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="Close" @click="closeModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  pokemon: Object,
});

const emits = defineEmits(["close"]);

const showModal = ref(true);

const closeModal = () => {
  emits.close();
};
</script>
