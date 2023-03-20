<template>
  <div class="chatbox" :class="isLightTheme ? 'lightContent':'darkContent'">
      <div v-if="isshowDesc" class="chatbox-content">
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
        <input type="text" @keyup="handleInput" v-model="message" @keydown.enter="saveData" placeholder="say hello !"/>
        <img
          @click="saveData"
          src="../assets/icon/sendSVG.svg"
          alt="Icon 2"
          class="input-icon input-icon-right blueIcon"
        />
      </div>
      <div v-if="showList" class="inputOption">
        <ul  class="input-list-options">
          <li class="input-item-option" v-for="option in options" :key="option" @click="selectOption(option)">
          <button>{{ option }}</button>
          </li>
        </ul>
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
      isshowDesc: false,
      showList: false,
      options: ['/phone', '/mail', '/ip','/cccd_vn','/taxnumber','/passport']
    };
  },
  props: {
    
    chatId: String || Number,
  },
  computed:{
    isLightTheme(){
      return this.$store.state.theme === 'light' ? true :false;
    }
  },
  methods: {
  async saveData() {
    if(this.message){
      const newMessage = {
        id: new uuidv4(),
        name: this.name,
        message: this.message,
        answer:this.answer
      }
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
  },
  handleInput(event){
    if (event.key === '/') {
        this.showList = true
      } else if (event.key === 'Enter') {
        this.showList = false
      } else if (this.message.startsWith('/')) {
        const inputText = this.message.slice(1)
        if (!this.options.includes(inputText)) {
          this.showList = false
        }
      } else {
        this.showList = false
      }
  },
  selectOption(option) {
      this.message = `${option.replace(/\s+/g, "")}`;
      this.showList = false;
    }

},
created() {
    
    axios.get(`http://localhost:3000/dataChat/${this.chatId}`) 
      .then(res => {
          this.dataMessage = res.data.messages
          if(this.dataMessage){
            this.isshowDesc = false
          } else{
            this.isshowDesc = true
          }
      })
      .catch(err => {
        console.error(err)
      })
      
 },
 mounted(){
  const w = document.querySelector(".chatbox");
    document.querySelector(".input-container").style.width = w.clientWidth + "px";
 }
 

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import url(../assets/styles/chatbox.css);

</style>
