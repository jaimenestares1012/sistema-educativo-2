<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div  v-show="modalActive" class="modal-inner"></div>
          <h2>En el modal</h2>
          <button>close</button>
        
      </transition>
    </div>
  </transition>
</template>
<script>

export default {
  props: ['modalActive']
  
}
</script>