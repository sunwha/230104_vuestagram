<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step = 2">Next</li>
      <li v-if="step == 2" @click="publishPost">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!-- <p>{{ $store.state.moreDataNew }}</p>
  <button @click="$store.dispatch('getData')">more button</button> -->

  <!-- <h4>{{ $store.state.likes }} Likes</h4>
  <button @click="$store.commit('clickLike')">click</button> -->

  <Container
    :postData="$store.state.postData"
    :stepPage="step"
    :uploadImg="uploadImg"
    @post-memo="newMemo = $event"
    :filterName="filterName"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        type="file"
        @change="uploadPost"
        accept="image/*"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import getDate from "./assets/date"
import { mapState } from 'vuex';
export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      // moreCount: 0,
      step: 3,
      uploadImg: "",
      newMemo: "",
      uploadUrl: "",
      getDate,
      filterName: "",
    };
  },
  computed: {
    ...mapState({
      'name' : state => state.postData[0].name
    }),
  },
  methods: {
    // morePost() {
    //   axios
    //     .get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
    //     .then((result) => {
          // this.$store.state.postData.push(result.data);
          // this.moreCount++;
    //     });
    // },
    uploadPost(e) {
      let file = e.target.files;
      this.uploadUrl = URL.createObjectURL(file[0]);
      this.uploadImg = this.uploadUrl;
      this.step = 1;
    },
    publishPost() {
      let today = new Date();
      var newPost = {
        name: "Sona Oh",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImg,
        likes: 0,
        date: `${today.getShortMonth()} ${today.getDate()}`,
        liked: false,
        content: this.newMemo,
        filter: this.filterName,
      };
      
      this.$store.state.postData.unshift(newPost);
      this.uploadUrl = '';
      this.newMemo = '';
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on('pass-filter', (data) => {
      this.filterName = data;
    });
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
