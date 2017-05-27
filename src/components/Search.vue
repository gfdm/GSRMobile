<template>
  <div class="gsr-search">
    <input type="text" placeholder="搜索" v-model="newValue" @input="handleInput" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newValue: ''
      }
    },
    props: {
      value: String
    },
    methods: {
      handleInput () {
        this.$emit('input', this.newValue)
      }
    }
  }
</script>

<style>
  .gsr-search {
    padding: 12px;

    & input {
      -webkit-appearance: none;
      border: 1px solid #999;
      width: 100%;
      padding:  4px 8px;
      box-sizing: border-box;
    }
  }
</style>