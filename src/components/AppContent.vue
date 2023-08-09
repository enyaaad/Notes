<script setup lang="ts">

  import ListContent from "@/components/ListContent.vue";
  import {useNotesStore} from "@/stores/getNotesStore";
  import {storeToRefs} from 'pinia'
  import Loader from "@/components/UI/Loader.vue";

  const {notes, loading, error} = storeToRefs(useNotesStore())
  const {fetchNotes} = useNotesStore()

  fetchNotes({})

</script>

<template>
  <main>
    <p v-if="loading">
      <loader></loader>
    </p>
    <p v-if="error">
      {{error}}
    </p>
    <p v-if="notes">
      <ListContent :data="notes"></ListContent>
    </p>
  </main>
</template>

<style scoped>

</style>
