import { createStore } from 'vuex'
import postData from "./data";
import axios from 'axios';

const store = createStore({
  state () {
    return {
      postData,
      moreCount: 0
    }
  },
  mutations: {
    changeLike(state, postidx) {
      if(!state.postData[postidx].liked) {
        state.postData[postidx].likes++;
        state.postData[postidx].liked = true;
      } else {
        state.postData[postidx].likes--;
        state.postData[postidx].liked = false;
      }
    },
    setMore(state, data) {
      state.postData.push(data);
      state.moreCount++;
    }
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`).then((result) => {
        context.commit('setMore', result.data);
      });
    }
  }
})

export default store;