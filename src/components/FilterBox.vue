<template>
<div>
  <!-- <span class="filter-name">{{ filter }}</span> -->
  <slot name="fname"></slot>
  <div :class="filter + ' filter-item'" :style="{ backgroundImage: `url(${uploadImg})` }" @click="passfilter"></div>
</div>
</template>

<script>
export default {
  name: "filterbox",
  props: {
    uploadImg: String,
    filter: String
  },
  methods: {
    passfilter() {
      this.emitter.emit('pass-filter', this.filter);
    }
  }
};
</script>

<style>
</style>