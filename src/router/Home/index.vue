<template>
  <main class="gsr-home">
    <section class="gsr-home--login">
      <h1>GITADORA SKILL RECORDER</h1>
      <div class="gsr-home--input">
        <div>
          <i class="text-gradient iconfont icon-user"></i>
          <input type="text" v-model="user.username" />
        </div>
        <div>
          <i class="text-gradient iconfont icon-key"></i>
          <input type="password" v-model="user.password" />
        </div>
      </div>
      <div class="gsr-home--button">
        <button @click="handleLogin">
          <span class="text-gradient">LOGIN</span>
        </button>
      </div>
    </section>

    <footer class="gsr-home--info">
      Powered by Vue.js. Version: {{ APP_VERSION }}
    </footer>
  </main>
</template>

<script>
  import { Message } from 'svelte-flat'

  import { APP_VERSION } from 'root/lib/config'
  import { doLogin } from 'root/lib/action'

  export default {
    data () {
      return {
        APP_VERSION,
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin () {
        doLogin(this.user).then((resp) => {
          const { msg, status } = resp.data
          if (status === 0) {
            Message({ content: msg, status: 'danger' })
          } else {
            this.$router.push('/dashboard')
          }
        })
      }
    }
  }
</script>
