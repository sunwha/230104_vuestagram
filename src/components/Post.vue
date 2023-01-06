<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${postDataObj.userImage})` }"></div>
      <span class="profile-name">{{ postDataObj.name }}</span>
    </div>
    <div class="post-body" :class="postDataObj.filter" :style="{ backgroundImage : `url(${postDataObj.postImage})` }"
      @click="changeLike(postIndex)"></div>
    <div class="post-content">
      <p>{{ postDataObj.likes }} Likes</p>
      <p><strong>{{ postDataObj.name }}</strong> {{ postDataObj.content }}</p>
      <p class="date">{{ postDataObj.date }}</p>
    </div>
</div> 

</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'post',
    props: {
        postDataObj: Object,
        postIndex: Number
    },
    methods: {
      ...mapMutations(['changeLike'])
    }
}
</script>

<style>

</style>