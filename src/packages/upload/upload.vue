<template>
  <div class="aimee-upload">
    <upload-dragger v-if="drag" :accept="accept" @file="uploadFiles"></upload-dragger>
    <template v-else>
      <div @click="handleClick" class="aimee-upload-btn">
        <slot></slot>
      </div>
      <input
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleChange"
        :name="name"
        ref="input"
        class="input"
      />
    </template>
    <div>
      <slot name="tip"></slot>
    </div>
    <ul>
      <li v-for="file in files" :key="file.uid">
        <div class="list-item">
          <aimee-icon icon="file"></aimee-icon>
          {{ file.name }}
          <aimee-progress
            v-if="file.status === 'uploading'"
            :percentage="file.percentage"
          ></aimee-progress>
          {{ file.status }}
          <aimee-icon icon="cha"></aimee-icon>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ajax from "./ajax";
import uploadDragger from './upload-dragger.vue'
export default {
  name: "aimee-upload",
  props: {
    name: {
      type: String,
      default: "file",
    },
    action: {
      type: String,
      require: true,
    },
    limit: Number,
    accept: String,
    multiple: Boolean,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    fileList: Array,
    beforeUpload: Function,
    httpRequest: {
      // 默认提供一个ajax，如果你传了就用你的
      type: Function,
      default: ajax,
    },
    drag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempIndex: 0,
      files: [], // 存储要展示的列表,可以在这里删除你要删除的文件（询问一下是否要删除）
      reqs: {},
    };
  },
  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {
        this.files = fileList.map((item) => {
          item.uid = Date.now() + this.tempIndex++;
          item.status = "success";
          return item;
        });
      },
    },
  },
  methods: {
    handleClick() {
      //   在点击之前先要还原输入框
      this.$refs.input.value = "";
      this.$refs.input.click();
    },
    handleStart(rawFile) {
      rawFile.uid = Math.random() + this.tempIndex++;
      let file = {
        status: "ready", // 默认上传的准备
        name: rawFile.name, // 上传文件名
        size: rawFile.size, // 上传图片大小
        percentage: 0, // 上传的进度
        raw: rawFile,
      };
      this.files.push(file); // 将当前用户上传的文件push到列表中，过一会要显示
      this.onChange && this.onChange(file);
    },
    upload(rawFile) {
      // 上传文件
      // 先判断这个文件是否能够上传，没有任何限制直接上传即可
      if (!this.beforeUpload) {
        // 直接上传
        console.log("上传1");
      }
      // 否则就调用用户的函数，获取他的返回值
      let flag = this.beforeUpload(rawFile);
      if (flag) {
        // 用户返回true，表示需要上传
        // 直接上传
        console.log("上传");
      }
    },
    getFile(rawFile) {
      return this.files.find((file) => file.uid == rawFile.uid);
    },
    handleProgress(ev, rawFile) {
      // 给不同的状态
      let file = this.getFile(rawFile); // 这个file是当前格式化后的
      file.status = "uploading";
      file.percentage = ev.percent || 0; // 上传进度
      this.onProgress(ev, rawFile); // 调用用户的回调
    },
    handleSuccess(res, rawFile) {
      let file = this.getFile(rawFile); // 这个file是当前格式化后的
      file.status = "success";
      this.onSuccess(res, rawFile);
      this.onChange(file);
    },
    handleError(err, rawFile) {
      let file = this.getFile(rawFile); // 这个file是当前格式化后的
      file.status = "fail";
      this.onError(err, rawFile);
      this.onChange(file);
      delete this.reqs[file.uid]; // 已经失败的ajax，不需要后续在中断请求
    },
    // 真正的上传
    post(rawFile) {
      // 调用httpRequest 方法
      // 需要整合一下参数。 调用ajax需要传递的惨呼，处理上传的整个流程
      const uid = rawFile.uid;
      const options = {
        file: rawFile,
        filename: rawFile.name,
        action: this.action,
        onProgress: (ev) => {
          // 处理上传时的进度
          console.log("上传中", ev);
          this.handleProgress(ev, rawFile);
        },
        onSuccess: (res) => {
          // 成功的状态
          console.log("上传成功", res);
          this.handleSuccess(res, rawFile);
        },
        onError: (err) => {
          // 失败的状态
          console.log("上传失败", err);
          this.handleError(err, rawFile);
        },
      };
      let req = this.httpRequest(options);
      this.reqs[uid] = req; // 先保存每个ajax
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    uploadFiles(files) {
      // 判断上传文件是否达到限制的上限？
      if (this.limit && this.fileList.length + files.length > this.limit) {
        return this.onExceed && this.onExceed(files, this.fileList);
      }
      [...files].forEach((rawFile) => {
        // 用户上传的文件，我需要做一些处理，比如用户可能会频繁上传同一个文件
        // 将文件格式化成我想要的结果
        this.handleStart(rawFile); // 处理上传之前
        this.upload(rawFile); // 真正的上传
      });
    },
    handleChange(e) {
      // 获取选中的文件
      const files = e.target.files;
      // 多个文件如何上传，多创建几个ajax，一起传就ok了
      this.uploadFiles(files);
    },
  },
  components: {
    uploadDragger,
  }
};
</script>
<style lang="scss">
.aimee-upload {
  .aimee-upload-btn {
    display: inline-block;
  }
  .input {
    display: none;
  }
}
</style>