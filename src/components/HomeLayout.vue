<template> 
    <div class="wrapper" >
          <UpdateModal
          v-if="showModal"
          @close-modal="offModel" 
        ></UpdateModal>
        
    <ChatBoxVue :key="keyChatBox" :chat-id="chatId" @rerendData="rerendData()"  />
    <SideBarVue @toggle-modal="toggleModal" @setData="setData" @update="update" :side-bar-compose="sideBarCompose"/>
  </div>
  </template>
  <script>
  import UpdateModal from "./UpdateModal.vue";
  import SideBarVue from "./SideBar.vue";
  import ChatBoxVue from "./Chatbox.vue";
  export default {
    name: "HomeLayout",
    components: {
      ChatBoxVue,
      SideBarVue,
      UpdateModal,
    },
    data(){
      return {
        chatId: "",
        keyChatBox : 0,
        sideBarCompose: 0,
        dataMessage: [],
          showModal: false,
        }
    },
    methods:{
      rerendData() {
        console.log(111)
        this.keyChatBox += 1
      },
      setData(data, chatId){
        this.chatId = chatId
        this.dataMessage = data
        this.keyChatBox += 1
      },
      update(){
        this.sideBarCompose += 1
      },
      toggleModal() {
        this.showModal = true
      },
      offModel(){
        this.showModal = false
      }
    },
  };
  </script>
  
  <style >
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
  .wrapper{
    display: flex;
  }
  </style>
  