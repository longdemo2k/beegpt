<template>
    <div class="image-title">
      <img src="../../assets/icon/auth/beelogo.svg" alt="Image" />
      <h2>{{ title }}</h2>
    </div>
  </template>
  <script>
  export default {
    name: "ImageTitle",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
<style scoped>
.image-title{
    text-align: center;
}
.image-title img{
    margin-bottom: 14px;
}
.image-title h2 {
    font-size: 2.7rem;
    margin-bottom: 14px;

}
</style>