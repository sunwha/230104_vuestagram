<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @input="searchName($event.target.value)" />
    <div class="post-header" v-for="(person) in follower_list" :key="person.id">
      <div class="profile" :style="{ backgroundImage : `url(${person.image})` }"></div>
      <span class="profile-name">{{ person.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: "mypage",
  setup(){
    let follower = ref([]);
    let follower_list = ref([]);
    // let test = reactive({name:'kim'});
    

    onMounted(() => {
      axios.get('/follower.json').then((result) => {
        follower.value = result.data;
        follower_list.value = [...follower.value];
      });
    })

    function searchName(txt) {
      const list = follower.value;
      if(txt == ""){
        follower_list = follower.value;
      } else {
        const filterArr = list.filter((data)=>{
          const name = data.name;
          return name.includes(txt)
        })
        follower_list.value = filterArr;
      }
    }

    return {follower, follower_list, searchName}
  },
  data(){
    return {

    }
  }
};
</script>

<style>
</style>