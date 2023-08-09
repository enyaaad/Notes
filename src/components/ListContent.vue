<script lang="ts">
import UiPagination from "@/components/UI/Pagination.vue";
import UiList from "@/components/UI/List/NoteList.vue";

export default {
  name: 'ListContent',
  components: {UiList, UiPagination},

  props:{
    data:Array,
    required:true,
  },

  data:()=>({
    page:1,
    elemsOnPage:4,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.searchedRows.length / this.elemsOnPage);
    },

    searchedRows() {
      if (this.data)
        return this.data
    },

    paginatedRows() {
      const temp = this.page * this.elemsOnPage;
      const pagination_offset = temp - this.elemsOnPage + 1;

      return this.searchedRows.filter((row) => pagination_offset <= row.id && row.id <= temp);
    },
  },
}
</script>

<template>
  <div class="list-table">

    <ui-list :elements="paginatedRows"></ui-list>

  </div>

  <div class="list-table__paginator">
    <ui-pagination :value="page"
                   @update:value="value => page = value"
                   :pages="pageCount"/>
  </div>

</template>

<style scoped>
.list-table{
  max-width: 1280px;
  display: flex;
  flex-direction: row;
}
.list-table__paginator{
  display: flex;
  justify-content: center;
}
@media(max-width: 1024px){
  .list-table{
    display: flex;
    flex-direction: column;
  }
}
</style>
