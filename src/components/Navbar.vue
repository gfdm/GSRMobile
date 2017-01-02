<template>
  <nav class="gsr-navbar">
    <ul>
      <li>
        <router-link to="/dashboard">
          <i class="iconfont icon-dashboard"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/record">
          <i class="iconfont icon-create"></i>
        </router-link>
      </li>
      <li>
        <a disabled>
          <i class="iconfont icon-musicnote"></i>
        </a>
        <!--<router-link to="/list">
          <i class="iconfont icon-musicnote"></i>
        </router-link>-->
      </li>
      <li>
        <a disabled>
          <i class="iconfont icon-settings"></i>
        </a>
        <!--<router-link to="/settings">
          <i class="iconfont icon-settings"></i>
        </router-link>-->
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

<style>
  .gsr-navbar {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: #FFF;
    & ul {
      height: 100%;
      display: flex;
      & li {
        flex: 1;
        display: block;
        & a {
          color: #5D98FC;
          text-align: center;
          display: block;
          &.router-link-active {
            color: #FFF;
            background: #5D98FC;
          }
          &[disabled] {
            color: #A899FA;
            background: #EFEFEF;
          }

          & i {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
</style>
