<template>
    <div>
        <headers></headers>       
        <div class="container-compra">
           <div class="mensje">
               Aprovecha los últimos días de descuento!!!!
           </div>
           <div>
               <div class="titulo">
                    {{ detalles.nombre }}
                </div>
                <div class="calificacion">
                    <span > 
                        - Calificacion: {{ detalles.calificacion }} <br>
                    </span>
                     
                    <span>
                        - Precio     :  S/ .{{ detalles.precio }}
                        </span> 
                </div>
                <div>
                    <v-btn class="btn-comprar" @click="comprarCurso(detalles)">
                        COMPRAR
                    </v-btn>
                </div>
                
           </div>
           <div>
               <img src="" alt="">
           </div>
            
        </div>
    </div>
</template>
<script>
import headers from '@/components/headers'

import { mapGetters } from "vuex";
export default {
    components:{
        headers
    },
    data: () => ({
    
    
    }),
    
   
    methods: {
        comprarCurso(detalles){
            this.$store.dispatch('carrito/compra', detalles)
        }
        
    },
    computed: {
         ...mapGetters("nuevos", ["detalles"])

    },
    mounted () {

        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var valor = urlParams.get('key');
        this.$store.dispatch('nuevos/detalles', valor)

    },
  }
</script>
<style >
.container-div{
    /* background: #cbd5ee; */
    /* background: #ebf9ff; */
    width:900px; 
    height:400px;
    text-align: center;
}
.btn-comprar{
    margin-top: 70px ;
    width: 400px;
    height: 200px;
}
.mensje{
    font-size: 50px;
    color:rgb(139, 191, 231);
}
.container-compra{
    width: 100%;
    height: 400px;
    background: rgb(9, 9, 9);
}
.titulo{
    color:rgb(255, 255, 255);
    font-size: 50px;
    margin-right: 640px;
    padding-top: 40px ;
}
.calificacion{
    color:rgb(255, 255, 255);
    font-size: 25px;
    padding-top: 15px ;
    margin-right: 850px;
    
}
</style>
