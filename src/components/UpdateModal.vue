<template>
  <div>
    <div @click="$emit('close-modal')" class="modal-overlay">
      <!-- @click.stop ngăn chặn hành vi nổi bọt -->
      <div @click.stop="handleButtonClick" class="modal-content">
        <div class="modal-header">
          <h1>Your Account</h1>
          <img src="../assets/icon/xmark-solid.svg" alt="xmark-solid" @click="$emit('close-modal')" class="close-Btn">
        </div>

        <div class="gpt-Update">
          <div class="gpt-item">
            <h1>Free Plan</h1>
            <button>Your Current Plan</button>
            <div>
              <img src="../assets/icon/check.svg" alt="check" /><span
                >Available when demand is low</span
              >
            </div>
            <div>
              <img src="../assets/icon/check.svg" alt="check" /><span
                >Standard response speed</span
              >
            </div>
            <div>
              <img src="../assets/icon/check.svg" alt="check" /><span
                >Regular model updates</span
              >
            </div>
          </div>
          <div class="gpt-item">
            <div class="update-header">
                <h1>ChatGPT Plus</h1>
                <h1 class="gray-text">USD $20/mon</h1>
            </div>
           
            <button class="buttonBlue">Your Current Plan</button>
            <div>
              <img  src="../assets/icon/check4.svg" alt="check" class="checkBlue" /><span
                >Available when demand is low</span
              >
            </div>
            <div>
              <img src="../assets/icon/check4.svg" alt="check" /><span
                >Standard response speed</span
              >
            </div>
            <div>
              <img src="../assets/icon/check4.svg" alt="check" /><span
                >Regular model updates</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    showModal: Boolean,
  },
};
</script>
  
  <style scoped>
  *{
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-overlay p {
  color: #000;
}
.gpt-item div{
    display: flex;
    align-items: center;
}
.modal-content {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 573px;
  height: 268px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  animation: modalFadeIn ease 0.3s;
  display: flex;
  flex-direction: column;
}


.modal-header {
    padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}
.update-header{
    display: flex;
    justify-content: space-between;
}
.modal-header>img{
    height: 16px;
    width: 16px;
    cursor: pointer;

}
.gpt-item img{
    margin-right: 8px;
}
.gpt-Update {
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
}
.gpt-item {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.gpt-item button {
border-radius: 5px;
  padding: 12px;
  background-color: #9e9e9e;
}

.gpt-item h1 {
  font-size: 16px;
  font-weight: 600;
}
.buttonBlue {
  background-color: #1732e3 !important;
}
.checkBlue{
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>