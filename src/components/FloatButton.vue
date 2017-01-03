<template>
  <div class="gsr-floatbutton">
    <router-link :to="path">
      <div>
        <i class="iconfont icon-plus"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['path']
  }
</script>

<style>
  .gsr-floatbutton {
    position: fixed;
    right: 1rem;
    bottom: 4rem;
    & div {
      width: 4rem;
      height: 4rem;
      color: #FFF;
      text-align: center;
      line-height: 4rem;
      background: #5D98FC;
      border-radius: 50%;
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
    }
  }
</style>
