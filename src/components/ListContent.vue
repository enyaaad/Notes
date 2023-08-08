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
    elemsOnPage:5,
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
  <div class="data-table">

    <ui-list :elements="paginatedRows"></ui-list>

  </div>

  <div class="data-table__paginator">
    <ui-pagination v-model="page" v-model:model="page" :pages="pageCount"/>
  </div>

</template>

<style scoped>
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

</style>
