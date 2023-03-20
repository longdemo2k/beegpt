
<template>
  <div class="sidebar">
    <div class="btn-top">
      <button class="button" @click="addChat()">
        <img src="../assets/icon/add.svg" alt="New Chat" /> New Chat
      </button>
      <ul class="sideBar-list" v-if="datachat && datachat.length" >
        <li class="sideBar-item"  v-for="data in datachat" :key="data.id" @click="addMessage(data)">
          <img src="../assets/icon/commentItem.svg" alt="New Chat" :id="data.id" /> {{ data.title }}
        </li>
      </ul>
    </div>
    <div class="btn-bot">
      <button class="btn">
        <img src="../assets/icon/trash.svg" alt="trash" /> CLEAR CONVERSATIONS
      </button>
      <button class="btn" @click.stop="handleModal($event)">
        <img src="../assets/icon/update.svg" alt="update"  />UPGRADE TO PLUS
        <div class="btnNew">NEW</div>
      </button>
      <button class="btn" @click="toggleTheme">
        <!-- change icone -->
        <img  :src="require(`../assets/icon/${imageName}`)" alt="darkMode" />{{ buttonText }}
      </button>
      <button  class="btn">
        <img  src="../assets/icon/update.svg" alt="update" />UPDATE & FAQ
      </button>
      <button class="btn">
        <img  src="../assets/icon/user.svg" alt="logout" />LOG OUT
      </button>
    </div>
  </div>
</template>
  
  <script>
  import { mapMutations,mapState} from 'vuex';
  import { v4 as uuidv4 } from 'uuid';
  import store from '@/store/store';
import axios from 'axios';
export default {
  
  data() {
    return {
      datachat: Array,
      buttonText: "LIGHT MODE",
      imageName: "night-mode.svg",
 
    };
  },
  props: {
    sideBarCompose: Number
  },
  async mounted() {
    await this.getData()
    console.log(this.sideBarCompose, this.datachat)

  },
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    addMessage(data) {
      this.$emit('setData', data.messages, data.id)
    },
    showData1(){
      alert(1)
    }, 
    async getData() {
      await axios.get('http://localhost:3000/dataChat/') // Gọi API GET để lấy danh sách người dùng từ server
      .then(res => {
        this.datachat = res.data
      })
      .catch(err => {
        console.error(err)
      })
    },
    async addChat() {
      const id = uuidv4()
      await axios.post('http://localhost:3000/dataChat',{id:id, title: "New chat"}) // Gọi API GET để lấy danh sách người dùng từ server
      .then(res => {
        this.$emit('update')
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
    },
    ...mapMutations(['setTheme']),
    toggleTheme(){
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
      this.buttonText= newTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'
      console.log(newTheme)
    },
    handleModal(){
      this.$emit('toggle-modal')
    }
    },
    store
};
</script>
  
  <style scoped>
  @import url(../assets/styles/sidebar.css);
  
</style>