<template>
    <main class="aimee-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name: 'aimee-main'
}
</script>
<style lang="scss">
    .aimee-main {
        flex:1;
        padding: 20px;
    }
</style>