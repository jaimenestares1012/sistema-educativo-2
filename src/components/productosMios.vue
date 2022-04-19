<template>
    <div>
        <div v-for="(esto, index) in arraymios" :key="esto" style="display:flex">
            <div style="width:68%" class="ordennombre">
                <span > {{index+1}}.- {{esto.nombre}}</span>
            </div> 
            <div  style="width:25%; margin-bottom:10px">
                <span> <v-btn >Ir</v-btn> </span>
            </div>

           
        </div>  
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    
    computed:{
        ...mapGetters("nuevos", ["arraymios"])
    },
     methods:{
         dliminar(esto){
              
            this.$store.dispatch('nuevos/eliminar', esto)
         }
     }
}
</script>
<style >
.ordennombre{
    text-align: left;
    margin-top: 10px ;
    margin-left: 10px ;
}
</style>