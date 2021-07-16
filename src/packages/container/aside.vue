<template>
    <aside class="aimee-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name: 'aimee-aside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>