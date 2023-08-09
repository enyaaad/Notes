<script setup lang="ts">
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useNotesStore} from "@/stores/getNotesStore";
import Loader from "@/components/UI/Loader.vue";

const {note, loading, error} = storeToRefs(useNotesStore())
const {fetchNotesByID} = useNotesStore()

onMounted(()=>{
    fetchNotesByID({},$route.params.id);
})

</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading"><loader></loader></div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="note" class="content">
    </div>
  </div>
</template>

<style scoped>

</style>
