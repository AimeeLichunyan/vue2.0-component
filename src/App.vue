<template>
    <div>
        <!-- on-exceed 超出限制后会执行此方法
        on-hange： 如果当前上传文件的状态发生变化的时候，会触发，
        on-success：在上传成功时会触发
        on-error：在失败的时候会触发
        on-progress： 上传时会多次触发，给个进度 -->
        <aimee-upload
        name="avatar"
        action="url"
        :file-list="fileList"
        :limit="3"
        accept="image/jpeg,image/png"
        :multiple="true"
        :on-exceed="handleExceed"
        :on-hange="handleChange"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-progress="handleProgress">
            <aimee-button type="primary" icon="shangchuan">
                点击上传
            </aimee-button>
            <div slot="tip"> 只能上传jpg/png文件且不超过500kb</div>
        </aimee-upload>
    </div>
</template>
<script>
export default {
    data() {
        return{
            fileList:[]
        }
    },
    methods: {
        handleExceed() {

        },
        handleChange() {},
        handleSuccess() {},
        handleError() {},
        handleProgress() {}
    }
}
</script>