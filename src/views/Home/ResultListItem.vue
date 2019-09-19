<template>
    <div>
        <div>{{item.id}}</div>
        <div>
            <div>{{item.sex}}</div>
            <div>{{item.name}}</div>
            <div>{{item.phone}}</div>
            <div>-></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style lang="sass">

</style>