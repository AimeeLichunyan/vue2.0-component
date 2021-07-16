<template>
    <button class="aimee-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)">
        <!-- icon -->
        <aimee-icon :icon="icon" v-if="icon && !loading" class="icon"></aimee-icon>
        <!-- loading -->
        <aimee-icon icon="loading" v-if="loading" class="icon"></aimee-icon>

        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'aimee-button',
    props: {
        type: {
            type: String,
            default: '',
            validator(type) {
                if(type && !["warning","success","danger","info","primary"].includes(type)) {
                    console.error('type类型必须为：'+["warning","success","danger","info","primary"].join(','))
                }
                return true
            }
        },
        icon: {
            type:String
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(type) {
                if(!['left','right'].includes(type)) {
                    console.error('iconPosition属性必须为：'+'left | right')
                }
                return true
            }
        },
        loading: {
            type: Boolean,
            default:false
        }
    },
    computed: {
        btnClass() {
            let classes = [];
            if(this.type) {
                classes.push(`aimee-button-${this.type}`)
            }
            if(this.iconPosition) {
                classes.push(`aimee-button-${this.iconPosition}`)
            }
            return classes
        }
    }
}
</script>
<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.aimee-button{
    border-radius: $border-radius;
    border: 1px solid $border-color;
    height: $height;
    line-height: 1;
    font-size: $font-size;
    cursor: pointer;
    padding: 12px 20px;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    user-select: none;
    &:hover {
        border-color: $border-color;
        background-color: $background;
    }
    &:focus,&active{
        color: $active-color;
        border-color: 1px solid $active-color;
        outline: none;
    }
    @each $type, $color in (primary:$primary,success:$success,info:$info,warning:$warning,danger:$danger) {
        &-#{$type} {
            background: #{$color};
            border: 1px solid #{$color};
            color:#fff;
        }
    }
    @each $type, $color in (primary:$primary-hover,success:$success-hover,info:$info-hover,warning:$warning-hover,danger:$danger-hover) {
        &-#{$type}:hover {
            background: #{$color};
            border: 1px solid #{$color};
            color:#fff;
        }
    }
    @each $type, $color in (primary:$primary-active,success:$success-active,info:$info-active,warning:$warning-active,danger:$danger-active) {
        &-#{$type}:active {
            background: #{$color};
            border: 1px solid #{$color};
            color:#fff;
        }
    }
    .icon {
        height: 16px;
        width: 16px;
        fill: #fff;
    }
    .icon+span {
        margin-left: 4px;
    }
    &-left {
        svg{order:1};
        span{order:2};
    }
    &-right {
        span{order:1}
        svg {order:2}
        .icon+span {margin-left: 0px;;margin-right: 4px;}
    }
    &[disabled] {
        cursor: not-allowed;
    }
}
</style>