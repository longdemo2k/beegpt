<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:"LoginLayout",
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // handle login logic
        if (this.email === 'example@example.com' && this.password === 'password') {
        this.$router.push('/');
      }
      },
    },
  };
  </script>