<script setup lang="ts">

import type {Note} from "@/models/types/Note";
import type {PropType} from "vue";
import ImageWithFallback from "@/components/UI/ImageWithFallback.vue";
import {RouteNames} from "@/router";
import {ref} from "vue";

const Props = defineProps({
  row: {
    type: Object as PropType<Note>,
    required: true,
    default:()=>{}
  }
})

</script>

<template>

  <div class="table-element">
    <div class="table-element__content">

      <div class="table-element__content-title">
        <div>{{row.title}}</div>
      </div>

      <div class="table-element__content-preview">
        <div>{{row.preview}}</div>
      </div>

      <div class="table-element__content-image" >
        <image-with-fallback :src="row.image"></image-with-fallback>
      </div>

      <router-link class="table-element__button ui-button" :to='{ name: RouteNames.noteDetail, params: { id: row.id } }'>view more</router-link>

    </div>
  </div>
</template>

<style scoped lang="sass">
.table-element
  margin: 15px
  display: flex
  flex-direction: column
  justify-content: center
  align-self: self-start
  @media(max-width: 1024px)
    .table-element
      display: flex
      justify-content: center
      align-items: center
  &__content
    display: flex
    flex-direction: column

    &-preview
      flex-basis: 5rem

    &-image
      flex-basis: 260px

    &__title
      display: flex

</style>
