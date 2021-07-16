<template>
  <div class="aimee-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "aimee-col",
  data() {
    return {
      gutter: 0,
    };
  },
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: null,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    colClass() {
      let classes = [];
      classes.push(`aimee-col-${this.span}`);
      if (this.offset) {
        classes.push(`aimee-col-offset-${this.offset}`);
      }
      ["xs", "sm", "md", "lg", "xl"].forEach((type) => {
        if (typeof this[type] === "object") {
          let { span, offset } = this[type];
          span && classes.push(`aimee-col-${type}-${span}`);
          offset && classes.push(`aimee-col-${typs}-offset-${offset}`);
        } else {
          this[type] && classes.push(`aimee-col-${type}-${this[type]}`);
        }
      });
      return classes;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px",
        };
      }
      return style;
    },
  },
};
</script>
<style lang="scss" >
@import '@/styles/_var.scss';
// 需要通过循环24，来创造出不同的宽度
@for $i from 1 through 24 {
  .aimee-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .aimee-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .aimee-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .aimee-col-lg-offset-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@include res(xs) {
  @for $i from 1 through 24 {
    .aimee-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .aimee-col-xs-offset-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 24 {
    .aimee-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .aimee-col-sm-offset-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .aimee-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .aimee-col-md-offset-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .aimee-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .aimee-col-xl-offset-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
</style>