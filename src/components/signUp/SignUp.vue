<template>
  <div class="wrapper">
      <div class="login">
          <ImageTitle title="Create your account"/>
          <form @submit.prevent="onSubmit">
          <InputComponent inputType="Email"/>
          <router-link to="/auth/signup/password">
          <button class="login__btn" type="submit">Continue</button>
          </router-link>
          </form>
          <p class="login__signUp">Have an account?
             <router-link to="/auth/login"><a href="#">Sign in</a> </router-link> 
          </p>
          <p class="login__line">Or</p>
          <div class="login__social">
              <img src="../../assets/icon/auth/google.svg" alt="google">
              <span>Continue with Google</span>
          </div>
          <div class="login__social">
              <img src="../../assets/icon/auth/microsoft.svg" alt="microsoft">
              <span>Continue with Microsoft</span>
          </div>
      </div>
  </div>
</template>

  
  <script>
  import InputComponent from '../AuthComponents/InputComponent.vue';
  import ImageTitle from '../AuthComponents/ImageTitle.vue';
  
  export default {
    components: {
      InputComponent,
      ImageTitle
    },
  }
  </script>
  