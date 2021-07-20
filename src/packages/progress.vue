<template>
    <div class="aimee-progress">
        <div class="bar">
            <div class="bar-outer"></div>
            <div class="bar-inner"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'aimee-progress',
    props: {
        strokeWidth:{ // 进度条宽度
            type:Number,
            default:6
        },
        percetage: { // 进度条长度
            type:Number,
            default:0,
            require: true
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    computed: {
        barStyle() {
            const style = {};
            style.width = this.percentage + '%';
            style.background = this.color;
            return style
        }
    }
}
</script>
<style lang="scss">
    .bar-outer {
        border-radius: 100px;
        background: #eee;
        position:relative;
        vertical-align:middle;
    }
    .bar-inner {
        transition: width .6s ease;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }
</style>