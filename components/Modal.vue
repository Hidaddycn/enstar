<template>
    <Transition name="modal">
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4  "
       
      >
        <!-- 遮罩层 -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"  ></div>
        
        <!-- 模态框内容 -->
        <div 
          class="z-[19999] relative w-8/12 h-8/12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl "

        >
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <slot></slot>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  })
  
  const emits = defineEmits(['close'])
  
  const closeModal = () => {
    emits('close')
  }
  
  // ESC 键关闭
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeModal()
    }
  }
  
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
  </script>
  
  <style scoped>
  /* 过渡动画 */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  /* 内容动画 */
  .modal-enter-active .modal-content,
  .modal-leave-active .modal-content {
    transition: all 0.3s ease;
  }
  
  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: translateY(20px);
    opacity: 0;
  }
  </style>