<template>
    <div>
        <todo-item />
        <todo-creator />
    </div>
</template>

<script>
    import TodoCreator from './TodoCreator'
    import TodoItem from './TodoItem'

    export default {
        components: {
            TodoCreator,
            TodoItem
        }
    }
</script>

<style scoped>

</style>

