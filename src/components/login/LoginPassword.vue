<template>
  <div class="wrapper">
     <div class="login">
            <ImageTitle title="WELLCOME BACK"/>
            <form @submit.prevent="onSubmit">
            <InputComponent @input="handleInput" labelInput="Email"/>
            <InputComponent @input="handleInput" labelInput="Password"/>
            <router-link to="/auth/login/password">
            <button class="login__btn" type="submit">Continue</button>
            </router-link>
            </form>
            <p class="login__signUp">Don’t have an account?
                <a href="#">Sign up</a>
            </p>
    </div>
  </div>
</template>

<script>
import ImageTitle from '../AuthComponents/ImageTitle.vue';
import InputComponent from '../AuthComponents/InputComponent.vue';
export default {
    name: "LoginPassword",
    components:{
      ImageTitle,
      InputComponent
    },
    methods:{
      handleInput(data){
        console.log(data)
      }
    }
}
</script>

<style>

</style>