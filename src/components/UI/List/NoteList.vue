<script lang="ts">
import UiNoteElement from "@/components/UI/List/NoteElement.vue";

export default {
  name:'UiList',
  components: {UiNoteElement},
    props:{
      elements:{
        type:Array,
        required:true,
      }
    }
}

</script>

<template>
      <ui-note-element
          v-for="element in elements"
          :key="element.id"
          class="ui-table__card"
          :row="element"
      />
</template>

<style scoped>

</style>
