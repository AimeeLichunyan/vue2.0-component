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
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :beforeUpload="beforeUpload"
      drag
    >
      <aimee-button type="primary" icon="shangchuan"> 点击上传 </aimee-button>
      <div slot="tip">只能上传jpg/png文件且不超过500kb</div>
    </aimee-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
          {
              url: 'xxx',
              name: '图片'
          }
      ],
    };
  },
  methods: {
    handleExceed(files, fileList) {
      console.log("用户传递已经超过预期数量了~", files, fileList);
    },
    handleChange(file) {
      console.log(file);
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    beforeUpload(rawFile) {
        let limitSize = rawFile.size / 1024 > 500
        console.log(rawFile,limitSize,this.accept)
        if(limitSize) {
            console.log('超过当前最大限制')
            return false
        }
        // else if(!rawFile.name.endsWith('.jpg')) {
        //         console.log('文件类型不对')
        //         return false
        //     }
        
        return true
    }
  },
};
</script>