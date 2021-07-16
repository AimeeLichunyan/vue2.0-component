<template>
        <svg class="aimee-icon" aria-hidden="true">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
</template>
<script>
import '../styles/icon'
export default {
    name: 'aimee-icon',
    props: {
        icon: {
            type:String,
            require:true
        }
    }
}
</script>
<style lang="scss">
.aimee-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
</style>