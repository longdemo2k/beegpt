<template>
  <div class="auth">
    <ImageTitle title="Title of the image"/>
    <p class="auth__desc">Log in with your OpenAI account to continue</p>
    <div class="auth__btn">
      <router-link to="/auth/login"> <button class="auth__btn--left">Log in</button></router-link>
      <router-link to="/home"> <button class="auth__btn--right">Sign up</button></router-link> 
    </div>
  
  </div>
</template>
<script>
 import ImageTitle from "../AuthComponents/ImageTitle.vue";
 export default {
  name: "LoginComponent",
  components: {
    ImageTitle,
  },
};
</script>
<style scoped>
  @import url('../../assets/styles/auth.css');
</style>