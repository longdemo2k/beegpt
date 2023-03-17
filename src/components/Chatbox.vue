<template>
  <div class="chatbox" :class="isLightTheme ? 'lightContent':'darkContent'">
      <div v-show="isshowDesc" class="chatbox-content">
        <div  class="chatbox-show">
          <h1>BeeGPT</h1>
          <div class="chatbox-list">
            <div class="chat-box-row">
              <div class="chatbox-item topItem"><img class="darkIcon" src="../assets/icon/example2.svg">Examples</div>
              <div class="chatbox-item topItem"><img class="darkIcon" src="../assets/icon/cappablity.svg">Capabilities</div>
              <div class="chatbox-item topItem"><img  class="darkIcon" src="../assets/icon/Limitations.svg">Limitations</div>
            </div>
            <div  class="chat-box-row">
              <div class="chatbox-item">“Explain quantum computing in simple terms” </div>
              <div class="chatbox-item">Remembers what user said earlier in the conversation</div>
              <div class="chatbox-item">May occasionally generate incorrect information</div>
            </div>
            
          <div class="chat-box-row">
            <div class="chatbox-item">“Got any creative ideas for a 10 year old’s birthday?”</div>
            <div class="chatbox-item">Allows user to provide follow-up corrections</div>
            <div class="chatbox-item">Limited knowledge of world and events after 2021</div>
          </div>
          <div class="chat-box-row">
            <div class="chatbox-item">“How do I make an HTTP request in Javascript?” </div>
            <div class="chatbox-item">Trained to decline inappropriate requests</div>
            <div class="chatbox-item">May occasionally produce harmful instructions or biased content</div>

          </div>
        </div>
        
      </div>
      
    </div>
    <ul class="chatbox_list" >
      <li v-for="user in dataMessage" :key="user.id">
        <div class="chatbox_item">
          <div class="chatbox_message">
            <img src="../assets/avatar/avatar1.png" alt="avatar"> 
            <span>{{ user.message }}</span></div>
            
          <div class="chatbox_message">
            <img src="../assets/avatar/avatar1.png" alt="avatar"> 
            <span>{{ user.answer }}</span></div>
        </div>
        
      </li>
    </ul>
    <div class="input-container">
      <div class="input-container-body">
        <img
        
          src="../assets/icon/fileSVG.svg"
          alt="Icon 1"
          class="input-icon input-icon-left blueIcon"
        />
        <input type="text" v-model="message" @keydown.enter="saveData" placeholder="say hello !"/>
        <img
          @click="saveData"
          src="../assets/icon/sendSVG.svg"
          alt="Icon 2"
          class="input-icon input-icon-right blueIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { v4 as uuidv4 } from 'uuid'
export default {
  name: "chatBox",
  data() {
    return {
      dataMessage: [],
      users: [],
      buttonClass:'',
      name:'long',
      message: '',
      answer:'how can i help you',
      data12: null,
      isshowDesc: true,
      apiKey: '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'
    };
  },
  props: {
    
    chatId: String || Number,
  },
  computed:{
    getDataMessage() {
      console.log(this.dataMessage)
      if(this.dataMessage && this.dataMessage.length) return this.dataMessage
      return []
    },
    isLightTheme(){
      return this.$store.state.theme === 'light' ? true :false;
    }
  },
  methods: {
  async saveData() {
    if(this.message){
      this.isshowDesc= false
      const newMessage = {
        id: new uuidv4(), // Tạo đối tượng người dùng mới
        name: this.name,
        message: this.message,
        answer:this.answer
      }
      console.log(this.chatId, this.dataMessage);
      let newMessages
      if(this.dataMessage) {
        newMessages = JSON.parse(JSON.stringify(this.dataMessage))
      } else {
        newMessages = []
      }
      newMessages.push(newMessage)
      let seft = this
      await axios.put(`http://localhost:3000/dataChat/${this.chatId}`, {"messages":newMessages,"title":"new chat"})
      .then(res=>{
        console.log(res)
        seft.$emit("rerendData")
      }).catch(err => {
        console.log(err)
      })
    }
  }
},
mounted: function () {
    const w = document.querySelector(".chatbox");
    document.querySelector(".input-container").style.width =
      w.clientWidth + "px";
    this.isshowDesc = false;
      axios.get(`http://localhost:3000/dataChat/${this.chatId}`) // Gọi API GET để lấy danh sách người dùng từ server
      .then(res => {
        this.dataMessage = res.data.messages
      })
      .catch(err => {
        console.error(err)   
      })
  },
  // call api open ai 
  // methods: {
  //   async fetchData() {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + this.apiKey
  //       }
  //     }
  //     const data = {
  //         "model": "text-davinci-003",
  //         "prompt": this.message,
  //         "max_tokens": 100,
  //         "temperature": 0.1
  //       }
  //     const response = await axios.post('https://api.openai.com/v1/completions', data, config);
  //     this.data12 = response.data.choices[0].text;
  //     this.message = '';
  //   },
  // },
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.chatbox {
  flex: 1;
  background-image: var(--chatBox-color);
  margin-left: 252px;
  min-height: 1000px;
  color: #043f6a;
  font-family: 'Inter', sans-serif;;
}
.input-container {
  position: fixed;
  bottom: 12px;
  display: flex;
  width: 100%;
  justify-content: center;
}
.input-container-body {
  width: 738px;
  display: flex;
  justify-content: center;
}

input[type="text"] {
  background-color: #043f6a;
  width: 768px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 500;
}
.lightContent input[type="text"]{
  background-color: var(--text-white-color);
}

.input-icon {
  height: 16px;
  margin: auto 8px;
  cursor: pointer;
}

.input-icon-left {
  margin-right: 8px;
}

.input-icon-right {
  margin-left: 8px;
}
.chatbox-list {
    margin-top: 40px;
}
.chatbox-item {
  width: 33.333%;
  background-color: rgba(255, 255, 255, 0.11); 
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 21.78px;
  padding: 10px;
  border-radius: 10px;
}
.chatbox-content{
  margin-top: 100px;
  text-align: center;
  padding: 0 170px;
  
}
.chat-box-row{
  display: flex;
  align-items: start;
  justify-content: center;
  
}
.chatbox-content h1{
  line-height: 67.84px;
  font-weight: 700;
  font-size: 59px;
  
}
.topItem{
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.topItem img{
  width: 27px;
  margin-bottom: 8px;
}
.darkContent{
  color:var(--text-white-color);
}
.lightContent{
  background-image: var(--text-white-color) ;
  color: var(--text-dark-color);
}
.lightContent .chatbox-item:not(.topItem) {
  background-color: rgba(33, 13, 90, 0.11);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.lightContent .darkIcon{
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%);
}
.lightContent .blueIcon{
  filter: invert(53%) sepia(72%) saturate(2874%) hue-rotate(159deg) brightness(90%) contrast(105%);
}
svg{
  color: #fff;
}
.chatbox_list{
  display: flex;
  flex-direction: column;
  max-width: 48rem;
  box-sizing: border-box;
  margin: 20px auto;
}
.chatbox_item{
  display: flex;
  flex-direction: column;
}
.chatbox_message{
  display: flex;
  margin-top: 20px;
}
.chatbox_message img{
  height: 37px;
}
.chatbox_message span{
  margin-left: 30px;
  padding: 8px 20px;
  background-color: #043f6a;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.lightContent .chatbox_message span{
  background-color: #FFFFFF;
}
.chatbox_answer{

}
.lightItem{
  
}
.darkItem{
} 
.themeDark{

}
</style>
