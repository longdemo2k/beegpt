<template>
    <div class="wrapper">
       <div class="login">
              <ImageTitle title="WELLCOME BACK"/>
              <form @submit.prevent="onSubmit">
                <InputComponent @input="handleInput" inputType="Email"/>
                <div class="row">
                    <InputComponent class="col" @input="handleInput" inputType="Name"/>
                    <InputComponent class="col" @input="handleInput" inputType="Name"/>
                </div>  
                <div class="row">
                    <InputComponent class="col" @input="handleInput" inputType="Password"/>
                    <InputComponent class="col"  @input="handleInput" inputType="Password"/>
                </div>
              
              <router-link to="/auth/signup/createAccount">
              <button class="login__btn" type="submit">Continue</button>
              </router-link>
              </form>
              <p class="login__signUp">Don’t have an account?
                <router-link to="/auth/signup"><a href="#">Sign in</a> </router-link> 
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

  .row{
    display: flex;
    justify-content: space-around;
    gap: 16px;
  }
  .col{
    width: 50%;
}
  </style>