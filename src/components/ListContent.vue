<script lang="ts">
import UiPagination from "@/components/UI/Pagination.vue";
import UiList from "@/components/UI/List/NoteList.vue";

export default {
    name: 'ListContent',
    components: {UiList, UiPagination},

    props: {
        data: {
            type: Array,
            required: true,
        }
    },

    data: () => ({
        page: 1,
        elemsOnPage: 4,
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


  &__paginator
      display: flex
      justify-content: center


@media (max-width: 1024px)
    .list-content__rows
        display: flex
        flex-direction: column
        justify-content: center
@media (max-width: 1440px)
    .list-content__rows
        display: flex
        flex-wrap: wrap
        flex-direction: row


</style>
