<script setup lang="ts">
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useNotesStore} from "@/stores/getNotesStore";
import {useRoute} from "vue-router";
import LoadingLoader from "@/components/UI/LoadingLoader.vue";
import ImageWithFallback from "@/components/UI/ImageWithFallback.vue";
import {RouteNames} from "@/router";


const {note, loading, error} = storeToRefs(useNotesStore())
const {fetchNotesByID} = useNotesStore()

onMounted(():void => {
  const routeId = useRoute().params.id
  fetchNotesByID({}, Number(routeId));
})

</script>

<template>
  <div class="note-detail">

    <LoadingLoader v-if="loading" class="note-detail-loading"></LoadingLoader>

    <div v-if="error" class="note-detail-loading">{{ error }}</div>

    <div v-if="note" class="note-detail__content">
      <h3>{{note.title}}</h3>

      <p>{{note.description}}</p>

      Created: {{new Date(note.createdAt).toLocaleString()}}

      <image-with-fallback class="note-detail__content--image" v-if="note.image" :src="note.image"></image-with-fallback>
    </div>

    <router-link class="note-detail__button ui-button" :to='{ name: RouteNames.home }'>Go Back</router-link>
  </div>
</template>

<style scoped lang="sass">
.note-detail
  max-width: 33%
  display: flex
  justify-content: center
  flex-direction: column
  padding: 30px
  &__content
    &--image
      margin: 10px 0
  p
    margin: 10px 0
  &__button
    display: flex
    justify-content: center

</style>
