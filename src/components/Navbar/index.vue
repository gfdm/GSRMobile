<template>
  <nav class="gsr-navbar">
    <ul>
      <li>
        <router-link to="/">1</router-link>
      </li>
      <li>
        <router-link to="/">2</router-link>
      </li>
      <li>
        <router-link to="/">3</router-link>
      </li>
      <li>
        <router-link to="/">4</router-link>
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
          text-align: center;
          display: block;
        }
      }
    }
  }
</style>
