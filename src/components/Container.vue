<template>
  <div>
    <div v-if="stepPage == 0">
      <Post :postDataObj="postData[i]" v-for="(post, i) in postData" :key="i" :postIndex="i" />
      <button @click="$store.dispatch('getData')">More</button>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="stepPage == 1">
      <div class="upload-image" :class="filterName" :style="{ backgroundImage: `url(${uploadImg})` }"></div>
      <div class="filters">
        <FilterBox :uploadImg="uploadImg" :filter="filter" v-for="(filter, i) in filters" :key="i">
          <template v-slot:fname>
            <span class="filter-name">{{ filter }}</span>
          </template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="stepPage == 2">
      <div class="upload-image" :class="filterName" :style="{ backgroundImage: `url(${uploadImg})` }"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('post-memo', $event.target.value)">write!</textarea>
      </div>
    </div>

    <div v-if="stepPage == 3">
      <Mypage />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import Mypage from "./Mypage.vue";
export default {
  name: "container",
  components: {
    Post,
    FilterBox,
    Mypage
  },
  data() {
    return  {
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
              "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
              "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      postIndex: 0
    }
  },
  props: {
    postData: Array,
    stepPage: Number,
    uploadImg: String,
    filterName: String
  },
  computed: {
    clickLike() {
      return this.$store.getters.clickLike;
    }
  }
};
</script>

<style>
</style>