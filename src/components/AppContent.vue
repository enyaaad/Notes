<script setup lang="ts">

import {storeToRefs} from 'pinia'
import ListContent from "@/components/ListContent.vue";
import Loader from "@/components/UI/Loader.vue";
import {useNotesStore} from "@/stores/getNotesStore";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const {notes, loading, error} = storeToRefs(useNotesStore())
const {fetchNotes} = useNotesStore()

onMounted(()=>{

    fetchNotes({})
})
</script>

<template>
    <main>
        <div v-if="loading">
            <loader></loader>
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="notes">
            <ListContent :data="notes"></ListContent>
        </div>
    </main>
</template>
