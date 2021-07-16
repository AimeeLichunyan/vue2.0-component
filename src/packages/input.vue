<template>
  <div class="aimee-input" :class="inputClass">
      <aimee-icon :icon="prefixIcon" v-if="prefixIcon" >
    </aimee-icon>
    <input
      :type="showPassword?(passwordVisible?'text': 'password'):type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
      :disabled="disabled"
      ref="input"
    />
    <aimee-icon :icon="suffixIcon" v-if="suffixIcon" >
    </aimee-icon>
    <!-- @mousedown.native.prevent 这个是不会失去焦点 -->
    <aimee-icon icon="qingkong" v-if="clearable && value" @click.native="$emit('input', '')" @mousedown.native.prevent>
    </aimee-icon>
    <!-- 这个小眼睛这里需要先失去焦点在获取焦点 -->
    <aimee-icon icon="eye" v-if="showPassword && value" @click.native="changeStatus" >
    </aimee-icon>
  </div>
</template>
<script>
export default {
  name: "aimee-input",
  data() {
      return {
          passwordVisible: 'text'
      }
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
        type: Boolean,
        default:false
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    prefixIcon:String,
    suffixIcon: String
  },
  computed: {
      inputClass() {
          let classes = [];
          if(this.clearable || this.showPassword || this.suffixIcon) {
              classes.push(`aimee-input-suffix-icon`)
          }
          if(this.prefixIcon) {
              classes.push(`aimee-input-prefix-icon`)
          }
          
          return classes
      }
  },
  methods: {
      changeStatus() {
          this.passwordVisible = !this.passwordVisible;
          this.$nextTick(() => {
              this.$refs.input.focus()
          })
      }
  }
};
</script>
<style lang="scss">
@import "@/styles/_var.scss";
.aimee-input {
  display: inline-block;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.aimee-input-suffix-icon {
    input {
        padding-right: 25px;;
    }
    .aimee-icon {
        right: 8px;
        top: 13px;
        position: absolute;
        cursor: pointer;
        width: 14.5px;
        height: 14.5px;
    }
}
.aimee-input-prefix-icon {
    input {
        padding-left: 25px;;
    }
    .aimee-icon {
        left: 8px;
        top: 13px;
        position: absolute;
        cursor: pointer;
        width: 14.5px;
        height: 14.5px;
    }
}
</style>