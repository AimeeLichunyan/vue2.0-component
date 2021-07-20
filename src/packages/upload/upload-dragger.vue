<template>
    <div class="aimee-upload-dragger"
    
    drop.prevent="onDrop">
        <aimee-icon icon="shangchuan" class="icon"></aimee-icon>
        <span>将文件拖拽到此区域即可</span>
    </div>
</template>
<script>
export default {
    methods: {
        onDrop(e) {
            if(!this.accept) {
                this.$emit('file',e.dataTransfer.files)
            }else {
                // 自行过滤
            }
        }
    }
}
</script>
<style lang="scss">
.aimee-upload-dragger {
    background: #eee;
    border: 1px solid #aaa;
    width: 360px;
    line-height: 180px;
    border-radius: 80px;
    text-align: center;
    .onDrop{

    }
}
    
</style>