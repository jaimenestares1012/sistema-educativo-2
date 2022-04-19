<template>
    <div>
        <!-- <span>{{ arrayCarrito }}</span> -->
        

        <div v-for="(esto, index) in arrayCarrito" :key="esto" style="display:flex">
            <div style="width:68%" class="ordennombre">
                <span > {{index+1}}.- {{esto.nombre}}</span>
            </div> 
            <div  style="width:25%">
                <span>{{esto.precio}}</span>
            </div>
            <div style="width: 10%">
                <button style="background: red; margin-top:3px" @click="dliminar(esto.id)">
                    x
                </button>
            </div>
           
        </div>  
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    
    computed:{
        ...mapGetters("carrito", ["arrayCarrito"])
    },
     methods:{
         dliminar(esto){
              
            this.$store.dispatch('carrito/eliminar', esto)
         }
     }
}
</script>
<style >
.ordennombre{
    text-align: left;
    margin-left: 8px ;
}
</style>