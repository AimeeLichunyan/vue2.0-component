<template>
    <div class="aimee-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'aimee-row',
    props: {
        gutter: {
            type:Number,
            default:0
        },
        justify: {
            type: String,
            validator(type) { // 校验
                if(type && !['start','end','center','space-around','space-between'].includes(type)) {
                    console.error('类型必须是'+ ['start','end','center','space-around','space-between'].join('、'))
                }
                return true
            }
        }
    },
    computed: {
        rowStyle() {
            let style = {};
            if(this.gutter){
                style = {
                    ...style,
                    marginLeft: -this.gutter / 2 +'px',
                    marginRight: -this.gutter / 2 +'px'
                }
            }
            if(this.justify) {
                let key = ['start','end'].includes(this.justify) ? 'flex-'+this.justify : this.justify;
                style={
                    ...style,
                    justifyContent: key
                }
            }
            return style // 通过外层的margin，负值解决内部padding的问题
        }
    },
    mounted(){
        this.$children.forEach(child => {
           child.gutter = this.gutter 
        })
    }
}
</script>
<style lang="scss" scoped>
.aimee-row {
    display: flex;
    width:100%;
    overflow: hidden;
    flex-wrap: wrap;
    }
</style>