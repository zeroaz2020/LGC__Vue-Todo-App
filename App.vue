<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello Vue!'
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color: green;
    h1 {
        color: $color;
        display: flex;
    }
</style>