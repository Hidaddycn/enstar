<template>
    <div class="">
      <button class="button  w-36 h-12 px-4 py-2 rounded-full text-center  border text-white hover:text-gray-800 hover:shadow-xl transition-all duration-500 " @click="btnclickhand" :style="{background:bgc,color:color}">
        <slot></slot>
      </button>
    </div>
  </template>
  <script>
  export default {
    name: "Button",
    props:{
      title:{
        type: String,
        default:'按钮'
      },
      bgc:{
        type: String,
        default:''
      },
      color:{
        type: String,
        default:'rgba(255,255,255,1)'
      },
      icon:{
        type: String,
        default:'el-icon-right'
      }
    },
    methods:{
      btnclickhand(){
       // alert('ss')
        this.$emit('btnclickhand')
      }
    }
  };
  </script>
  <style scoped>
  .button{
    background-color:var(--vp-button-brand-bg);
  }
   button:hover i{ transform: translateX(5px);
    transition: all 0.4s;
    /* background:white; */
  }
  i {
    transition: all 0.4s;
    /* padding-left:10px; */
    position: relative;
    left:5px;
  }
  
  </style>