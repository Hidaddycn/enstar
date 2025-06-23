<template>
    <div class="inline-block relative">
      <input
        v-model="value"
        ref="input"
        type="number"
        pattern="[0-9]*"
        placeholder="Please leave your email address"
        class="h-14 w-72 md:w-96 rounded-full focus:ring-blue-600 focus:ring-4 focus:ring-offset-0 focus:ring-opacity-30"
        @keyup.enter="sendphone"
      />
      <button
        class="text-white button h-14 rounded-full w-24 absolute right-0 inline-block"
        @click="sendphone"
      >
        <span v-show="show">Send</span>
        <a-spin class="text-white" v-show="!show" />
      </button>
    </div>
  </template>
  <script>
  import Button from './Button.vue';
  export default {
    components: { Button },
    name: "MyButton",
    data(){
      return {
        value:'',
        show: true,
        phonetest:/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
      }
    },
    methods:{
     sendphone(){
      let ispho = this.phonetest.test(this.value)
      if(!ispho) return this.$message.error('请输入正确的手机格式');
     // console.log('TencentCaptcha', TencentCaptcha)
      let a = new TencentCaptcha("190010620",async (res)=>{
       // console.log('callback:', res);
        if (res.ret === 0) {
          this.show = false
        let re = await this.$api.phone.getPhone({
          phone: this.value
        })
       // console.log(re)
        if(!re){
          this.$message.error('发送失败,请重试');
          this.show =true
        }else if(re.status == 0){
          this.show =true
          this.$message.success('发送成功！我们将尽快联系您');
          this.value = ''
        }else {
          this.show =true
          this.$message.error('请重试');
          this.value = ''
        }
          }
      },{});
      a.show(); 
      }
    },
    mounted(){
      //console.log('TencentCaptcha', TencentCaptcha)
    }
  };
  </script>
  <style scoped>
  
  input {
    /* line-height:150px; */
    font-size: 15px;
    text-indent: 30px;
  }
  input::placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
  </style>