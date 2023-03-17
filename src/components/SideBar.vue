
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
  #red {
  filter: invert(56%) sepia(49%) saturate(5724%) hue-rotate(336deg) brightness(99%) contrast(94%);
}
.sidebar {
  width: 252px;
  height: 100%;
  background-image: var(--sideBar-color);
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}

.sidebar .button {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: #000;
  color: var(--text-white-color);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #151593;
  margin-bottom: 12px;
}
.sideBar-list{
  overflow: auto;
  height: 50vh;
}
.sideBar-list::-webkit-scrollbar-thumb{
  background-color: rgba(23, 58, 75, 1);
	border-radius: 10px;
}
.sideBar-list::-webkit-scrollbar{
	width: 8px;
}
.sideBar-list::-webkit-scrollbar-track{
	background-color: transparent;
}

.sidebar .button img {
  width: 16px; /* chiều cao của ảnh */
  margin-right: 16px; /* khoảng cách giữa ảnh và text */
}
.sidebar .button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.sidebar .sideBar-list .sideBar-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  border-radius: 5px;
}
.sidebar .sideBar-list .sideBar-item img {
  width: 16px;
  margin-right: 16px;
}
.sidebar .sideBar-list .sideBar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.btn {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  background-color: transparent;
  cursor: pointer;
  color: #fff ;
}
.btn img {
  margin-right: 16px;
  height: 16px;
}
.btn-bot {
  border-top: 1px solid #4d4d4f;
}
.btn .btnNew {
  padding: 2px 2px;
  border-radius: 7px;
  background-color: #fae69e;
  color: #000;
  font-weight: bold;
  margin-left: 16px;
}
</style>