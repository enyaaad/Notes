<script setup lang="ts">
import {PropType} from "vue";
import {Note} from "@/models/types/Note";
import {storeToRefs} from "pinia";
import {useNotesStore} from "@/stores/getNotesStore";
import Loader from "@/components/UI/Loader.vue";

const {note, loading, error} = storeToRefs(useNotesStore())
const {fetchNotesByID} = useNotesStore()


fetchNotesByID({},$route.params.id);

</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading"><loader></loader></div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="note" class="content">
      <h2>{{ note.title }}</h2>
      <p>{{ note.body }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
