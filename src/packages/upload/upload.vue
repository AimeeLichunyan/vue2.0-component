<template>
  <div class="aimee-upload">
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
    />
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>
<script>
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
  },
  methods: {
    handleClick() {
    //   在点击之前先要还原输入框
    this.$refs.input.value = "";
    this.$refs.input.click()
    },
    handleChange() {
      console.log(2);
    },
  },
};
</script>
<style lang="scss">
.aimee-upload {
  .aimee-upload-btn {
    display: inline-block;
  }
}
</style>