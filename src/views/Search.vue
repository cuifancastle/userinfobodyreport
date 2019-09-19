<template>
    <div class="search">
        <h1>This is an search page</h1>
      <a class="mint-cell mint-field">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">按姓名搜索</span>
          </div>
          <div class="mint-cell-value">
            <mt-search
                    :value.sync="name"
                    cancel-text=""
                    placeholder="">
            </mt-search>
          </div>
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">按电话搜索</span>
          </div>
          <div class="mint-cell-value">
            <mt-search
                    :value.sync="phone"
                    cancel-text=""
                    placeholder="">
            </mt-search>
          </div>
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">按会员号搜索</span>
          </div>
          <div class="mint-cell-value">
            <mt-search
                    :value.sync="id"
                    cancel-text=""
                    placeholder="">
            </mt-search>
          </div>
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <a class="mint-cell mint-field">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">按所在地搜索</span>
          </div>
          <div class="mint-cell-value address">
            <label>
              <input type="text" v-model="sheng" placeholder="省">
            </label> -&nbsp;
            <label for="">
              <input type="text" v-model="sheng" placeholder="市">
            </label> -&nbsp;
            <label for="">
              <input type="text" v-model="sheng" placeholder="区">
            </label>
          </div>
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <mt-field label="按注册日期" placeholder="" type="date" v-model="date"></mt-field>
      <router-link to="/">
        <mt-button type="danger">搜索</mt-button>
      </router-link>
    </div>
</template>
<script>
  export default {
    data (){
      return {
        name: '',
        id: '',
        phone: '',
        sheng: '', // 省市区
        shi: '',
        qu:'',
        date: '', // 年月日
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mint-field .mint-cell-title{
    width: 180px;
  }
  .mint-search{
    height: 80px;
  }
  .mint-button{
    width: 360px;
    height: 40px;
  }
  .address label {
    width: 100px;
    margin-right:20px;
    input {
      width: 100px;
    }
  }
</style>