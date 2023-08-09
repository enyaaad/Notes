<script lang="ts">

import type {Note} from "@/models/types/Note";
import type {PropType} from "vue";
import ImageWithFallback from "@/components/UI/ImageWithFallback.vue";
export default {
  name:'UiNoteElement',
  components: {ImageWithFallback},
  props:{
    row: {
      type: Object as PropType<Note>,
      required:true,
      default:()=>{}
    }
  },
  data(){
    return{
      fallbackSrc: "src/assets/photos1.png"
    }
  },
}
</script>

<template>

  <div class="table-element">
    <div class="table-element__content">

      <div class="table-element__content__title">
        <div>{{row.title}}</div>
      </div>

      <div class="table-element__content__preview">
        <div>{{row.preview}}</div>
      </div>

      <div class="table-element__content" style="flex-basis: 200px;">
        <image-with-fallback :fallback-src="fallbackSrc" :src="row.image"></image-with-fallback>
      </div>

      <div>
        <router-link :data="row" class="table-element__button" :to="`/notes/${row.id}`">view more</router-link>
      </div>

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

  &__content
    display: flex
    flex-direction: column

    &__preview
      flex-basis: 5rem

  &__title
    display: flex

  &__button
    width: 80px
    align-self: center
    border-radius: 3px
    background-color: transparent
    border: white 1px solid
    color: white
    cursor: pointer
    transition: 0.3s

  &__button:hover
    background-color: white
    color: black
@media(max-width: 1024px)
  .table-element
    display: flex
    justify-content: center
    align-items: center
</style>
