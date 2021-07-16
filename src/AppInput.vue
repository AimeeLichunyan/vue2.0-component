<template>
  <div>
    <aimee-input
      v-model="value"
      type="text"
      placeholder="请输入内容"
      name="username"
    />

    <aimee-input
      v-model="value"
      type="password"
      placeholder="请输入内容"
      name="username"
    />

    <aimee-input
      v-model="value"
      type="test"
      placeholder="请输入内容"
      name="username"
      :disabled="true"
    />
    <aimee-input
      v-model="value"
      type="test"
      placeholder="请输入内容"
      name="username"
      clearable
    />
    <aimee-input
      v-model="value"
      type="test"
      placeholder="请输入内容"
      name="username"
      show-password
    />
    <aimee-input
      v-model="value"
      type="test"
      placeholder="请输入内容"
      name="username"
      prefix-icon="edit"

    />
    <aimee-input
      v-model="value"
      type="test"
      placeholder="请输入内容"
      name="username"
      suffix-icon="edit"

    />
    {{value}}
  </div>
</template>
<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
</script>
<style lang="scss">
.aimee-header,
.aimee-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.aimee-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.aimee-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .aimee-container {
  margin-bottom: 40px;
}

.aimee-container:nth-child(5) .aimee-aside,
.aimee-container:nth-child(6) .aimee-aside {
  line-height: 260px;
}

.aimee-container:nth-child(7) .aimee-aside {
  line-height: 320px;
}
</style>