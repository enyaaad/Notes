<script setup lang="ts">
import UiPagination from "@/components/UI/PaginationComponent.vue";
import UiList from "@/components/UI/List/NoteList.vue";
import {computed, ref} from "vue";

const page = ref<number>(1)
const elemsOnPage = ref<number>(4)

const Props = defineProps({
  data: {
    type: Array,
    required: true,
  }
})

const pageCount = computed(() => {
  return Math.ceil(searchedRows.value.length / elemsOnPage.value);
})

const searchedRows = computed(() => {
  if (Props.data)
    return Props.data
  return []
})

const paginatedRows = computed(() => {
  const temp = page.value * elemsOnPage.value;
  const pagination_offset = temp - elemsOnPage.value + 1;

  return searchedRows.value.filter((row) => pagination_offset <= row.id && row.id <= temp);

})
</script>

<template>
  <div class="list-content">

    <div class="list-content__rows">
      <ui-list :elements="paginatedRows"></ui-list>
    </div>

    <div class="list-content__paginator">
      <ui-pagination :value="page"
                     @update:value="value => page = value"
                     :pages="pageCount"/>
    </div>

  </div>
</template>

<style scoped lang="sass">
.list-content
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center

  &__rows
    margin: 0
    padding: 10px
    max-width: 95vw
    display: flex
    flex-direction: row

  @media(max-width: 1024px)
    &__rows
      display: flex
      flex-direction: column
      justify-content: center
  @media(max-width: 1440px)
    &__rows
      display: flex
      flex-wrap: wrap
      flex-direction: row

  &__paginator
    display: flex
    justify-content: center

</style>
