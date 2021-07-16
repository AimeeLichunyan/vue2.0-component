<template>
    <section class="aimee-container" :class="{isVertical}">
        <slot></slot>
    </section>
</template>
<script>
export default {
    name: 'aimee-container',
    data() {
        return {
            isVertical:true
        }
    },
    mounted() {
        this.isVertical = this.$children.some(child => ['aimee-footer','aimee-header'].includes(child.$options.name))
    },
}
</script>
<style lang="scss">
    .aimee-container {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
    .aimee-container.isVertical {
        flex-direction: column;
    }
</style>