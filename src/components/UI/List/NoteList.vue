<script setup lang="ts">
import UiNoteElement from "@/components/UI/List/NoteElement.vue";

const Props = defineProps({
  elements: {
    type: Array,
    required: true,
  }
})

</script>

<template>
      <ui-note-element
          v-for="element in Props.elements"
          :key="element.id"
          class="ui-table__card"
          :row="element"
      />
</template>

<style scoped>
@media (max-width: 1440px) {
      .ui-table__card{
            width: 45%;
      }
}
</style>
