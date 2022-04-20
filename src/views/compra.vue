<template>
    <div>
        <headers></headers>  
        <div v-if="estadoModalGrande" class="modalespera">
            <div v-if="estadoModal"> 
                  <h1>Espera, su compra se está procesando!</h1>
                <img src="https://acceso.com.pe/wp-content/uploads/2022/04/reloj.png" class="image-espera" alt="">
            </div>
            <div v-if="!estadoModal" > 
                 <h1 style="font-size:50px"> Felicidades su compra fue hecha con éxito </h1> 
                 <v-btn @click="redirect()">
                      Ir al principal
                 </v-btn>
            </div>
            
            <div v-if="codError">
              <h1 style="font-size:50px"> Hubo un error inesperado</h1> 
                 <v-btn @click="redirect()">
                      Ir al principal
                 </v-btn>
            </div>
                
        </div>     
        <div class="container-compra">
        
           <div class="mensje">
               <div class="mensaje-espera">
                     Aprovecha los últimos días de descuento!!!!
               </div>
          
           </div>
           <div style="display:flex">  
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
                <div v-if="!estadoModalGrande">
                    <v-btn class="btn-comprar" @click="comprarCurso(detalles)">
                        COMPRAR
                    </v-btn>
                </div>
                <!-- <v-btn
                    :loading="loading"
                    :disabled="loading"
                    class="bton-prueba"
                    @click="loader = 'loading'"
                    >
                    Accept Terms
                    </v-btn> -->
                
                
           </div>
           <div>
               <img src="https://acceso.com.pe/wp-content/uploads/2022/03/logo.png"  class="img-ffff" alt="">
           </div>

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
        loader: null,
        loading: false,
        correcto: false,
        estadoModalGrande: false

    
    
    }),
    
   
    methods: {
        comprarCurso(detalles){
            this.estadoModalGrande=true
            //cambio de estado
            this.$store.dispatch('carrito/estadoModal', detalles)
            //compra
            this.$store.dispatch('carrito/compra', detalles)
        },
        redirect(){
            window.location.href ='/prueba'
        },
        
    },
    computed: {
         ...mapGetters("nuevos", ["detalles"]),
         ...mapGetters("carrito", ["estadoModal", "codRes", "codError"])

    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
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
.image-espera{
    width: 120px;
    height: 200px;
}   
.mensaje-espera{
    
}
.modalespera{
    width: 500px;
    height: 300px;
    position: absolute;
    margin-left: 460px ;
    background: rgb(133, 175, 188);
    
}
.img-ffff{
    width: 70%;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
    margin-left:100px ;
}
.calificacion{
    color:rgb(255, 255, 255);
    font-size: 25px;
    padding-top: 15px ;
    margin-right: 800px;
    margin-left: 100px;
    
}
</style>
