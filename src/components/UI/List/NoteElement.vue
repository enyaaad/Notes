<script lang="ts">

import type {Note} from "@/models/types/Note";
import type {PropType} from "vue";
export default {
  name:'UiNoteElement',
  props:{
    row: {
      type: Object as PropType<Note>,
      required:true,
      default:()=>{}
    }
  }
}
</script>

<template>

  <div class="table-element">
    <div class="table-element__content">
      <div class="table-element__title">ID</div>
      <div>{{row.id}}</div>
    </div>

    <div class="table-element__content">
      <div class="table-element__title">Title</div>
      <div>{{row.title}}</div>
    </div>

    <div class="table-element__content">
      <div class="table-element__title">Preview</div>
      <div>{{row.preview}}</div>
    </div>

    <div class="table-element__content">
      <div class="table-element__title">Image</div>
      <img :src="`${row.image}`" alt="">
    </div>
  </div>

</template>

<style scoped>

</style>
