<template>
  <div :class="{validate: isValidate }" class="myInput-container">
    <input
      class="myInput-input"
      v-bind:type="isPassword ? 'Password': 'Text'"
      placeholder=" "
      v-model="inputValue"
      @blur="validateMessage"
    />
    <label class="myInput-label">{{ inputType }}</label>
    <p >  {{errorMessage}} </p>
  </div>
</template>
  
  <script>
export default {
  name: "MyInput",
  props: {
    inputType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isPassword: this.inputType === "Password" ? true : false,
      inputValue: "",
      isValidate: false,
      errorMessage: " ",
    };
  },
  methods: {
    checkInputType(){
      
    },
    validateMessage() {
      if (this.inputValue === '') {
        this.isValidate = true;
        this.errorMessage = 'This field is required';
    } else {
      this.isValidate = false;
      this.errorMessage = ' ';
      this.isValidate = false;
    }
    },
    validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  },
}
</script>
  <style scoped>
.myInput-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
}
.myInput-input {
  height: 44px;
  width: 100%;
  padding: 13px;
  border: 1px solid  rgba(167, 167, 167, 1);

  border-radius: 10px;

}
.validate .myInput-input{
  border: 1px solid  red;
}
.validate p {
  color: red;
}
.myInput-input::placeholder {
  color: #000;
}
.myInput-label {
  position: absolute;
  left: 16px;
  top: 13px;
  transition: 0.2s;
  padding: 3px;
  font-size: 1.3rem;
  color: rgba(167, 167, 167, 1);
  background-color: transparent;
}
.myInput-input:not(:placeholder-shown)+.myInput-label,
.myInput-input:focus + .myInput-label {
  top: -8px;
  left
  : 13px;
  z-index: 10;
  color: rgba(23, 50, 227, 1);
  background-color: #fff;
  
}
.myInput-input:focus{
  border: 1px solid rgba(23, 50, 227, 1);
}

</style>