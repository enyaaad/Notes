<template>
    <div v-if="show" class="ui-pagination">
        <div v-if="viewportWidth>1024">
            <a
                    v-for="item in items"
                    :key="item.label"
                    class="ui-pagination__item"
                    @click="goto(item.to)"
            >
                {{ item.label }}
            </a>
        </div>
        <div v-else>
            <a
                    v-for="pagitem in paginatedRows"
                    :key="pagitem.label"
                    class="ui-pagination__item"
                    @click="goto(pagitem.to)"
            >
                {{ pagitem.label }}
            </a>
        </div>
    </div>

</template>


<script>

export default {
    name: 'UiPagination',
    data() {
        return {
            viewportWidth: 0,
            elemsOnPage: 5,
        }
    },
    props: {
        value: {
            type: Number,
            required: true,
        },
        pages: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        this.updateViewportSize();
    },
    computed: {
        paginatedRows() {
            if(this.value>1)
                return [
                    {
                        label: '«',
                        disabled: this.isFirst,
                        to: 1,
                    },
                    ...[...Array(this.pages)].map((value, index) => ({
                        label: index + 1,
                        disabled: index + 1 === this.value,
                        to: index + 1,
                    })).slice(this.value - 2 , this.value + 3),
                    {
                        label: '»',
                        disabled: this.isLast,
                        to: this.pages,
                    },
                ];
            else
                return [
                    {
                        label: '«',
                        disabled: this.isFirst,
                        to: 1,
                    },
                    ...[...Array(this.pages)].map((value, index) => ({
                        label: index + 1,
                        disabled: index + 1 === this.value,
                        to: index + 1,
                    })).slice(this.value - 1 , this.value + 3),
                    {
                        label: '»',
                        disabled: this.isLast,
                        to: this.pages,
                    },
                ];
        },

        show() {
            return this.pages > 1;
        },
        isFirst() {
            return this.value === 1;
        },
        isLast() {
            return this.value === this.pages;
        },
        items() {
            return [
                {
                    label: '«',
                    disabled: this.isFirst,
                    to: 1,
                },
                ...[...Array(this.pages)].map((value, index) => ({
                    label: index + 1,
                    disabled: index + 1 === this.value,
                    to: index + 1,
                })),
                {
                    label: '»',
                    disabled: this.isLast,
                    to: this.pages,
                },
            ];
        },
    },

    methods: {
        updateViewportSize(){
            this.viewportWidth = window.innerWidth;
        },
        goto(page) {
            if (page === this.value) {
                return;
            }

            this.$emit('update:value', page);
        },
    },

};

</script>

<style scoped lang="sass">
.ui-pagination__item:hover
  cursor: pointer

a,.green
  margin: 2px
  text-decoration: none
  color: hsla(160, 100%, 37%, 1)
  transition: 0.4s

@media (hover: hover)
  a:hover
    background-color: hsla(160, 100%, 37%, 0.2)

</style>
