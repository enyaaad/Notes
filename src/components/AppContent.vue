<script setup lang="ts">
import {storeToRefs} from 'pinia'
import ListContent from "@/components/ListContent.vue";
import {useNotesStore} from "@/stores/getNotesStore";
import {onMounted} from "vue";
import LoadingLoader from "@/components/UI/LoadingLoader.vue";

const {notes, loading} = storeToRefs(useNotesStore())
const {fetchNotes} = useNotesStore()

onMounted(():void => {
  fetchNotes({})
})
</script>

<template>
  <main>

    <LoadingLoader v-if="loading"/>

    <div v-if="notes.length">
      <ListContent :data="notes"/>
    </div>

  </main>
</template>
