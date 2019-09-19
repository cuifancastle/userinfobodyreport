<template>
  <div>
    <router-link to="/search">
      <mt-search
              cancel-text=""
              placeholder="搜索会员">
      </mt-search>
    </router-link>
    <div>
      <result-list :items="resultData"></result-list>
    </div>
    <mt-palette-button content="+"
                       @expand="main_log('expand')"
                       direction="rt" class="pb"
                       :radius="80"
                       ref="target_1"
                       mainButtonStyle="color:#fff;background-color:#26a2ff;"
                       style="left:30px;">
      <div class="my-icon-button indexicon icon-popup"></div>
    </mt-palette-button>
  </div>
</template>

<script>
// @ is an alias to /src
import ResultList from "./Home/ResultList";
import { getSearchResult } from '../model/model.js'

export default {
  name: 'home',
  components: {
    ResultList
  },
  data(){
    return {
      resultData: []
    }
  },
  mounted(){
    getSearchResult().then(res => this.resultData = res)
  },
  methods: {
    main_log () {
      this.$router.push({
        path: '/adduser'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mint-search {
    height: 60px;
  }
</style>
