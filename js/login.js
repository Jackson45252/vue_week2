import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const baseUrl = "https://vue3-course-api.hexschool.io";
const app = createApp({
  data() {
      return {
        user: {
          username: '',
          password: ''
        },
        hint: ""
        
      }
    },
   methods: {
    login() {
      axios.post(`${baseUrl}/v2/admin/signin`, this.user )
      .then((res) => {
        console.log(res.data);
        const {success, token, expired, message} = res.data;
        if(success === true) {
          this.hint = message;
          document.cookie = `hexToken=${token}; expiredTime = ${new Date(expired)}`;
          setTimeout(window.location = 'product.html', 500)
        }
        else {
          this.hint = message + "，請檢查帳號或是密碼是否正確!";
        } 
        
      })
    }
  }
})



app.mount('#app')