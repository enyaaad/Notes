<script setup lang="ts">
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useNotesStore} from "@/stores/getNotesStore";
import Loader from "@/components/UI/Loader.vue";
import {useRoute} from "vue-router";

const {note, loading, error} = storeToRefs(useNotesStore())
const {fetchNotesByID} = useNotesStore()

onMounted(()=>{
    const routeId = useRoute().params.id
    console.log();
    fetchNotesByID({},Number(routeId));
})
</script>

<template>
  <div class="post">
    <div v-if="loading" class="loading"><loader></loader></div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="note" class="content">
        {{note}}
    </div>
  </div>
</template>

<style scoped>
.content{
    color: white;
}
</style>
