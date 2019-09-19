<template>
    <div>
        <result-list-item v-for="item in items" :item="item" :key="item.id"></result-list-item>
    </div>
</template>
<script>
    import ResultListItem from "./ResultListItem";
    export default {
        components: {ResultListItem},
        props: ['items']
    }
</script>
<style lang="sass">

</style>