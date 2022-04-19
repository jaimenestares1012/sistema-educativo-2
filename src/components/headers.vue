<template>
<div>
    <div class="headers " style="margin: 10px 20px 0px 20px; display: flex">
             <a href="/prueba"><img src="https://acceso.com.pe/wp-content/uploads/2022/03/san-marcos-2.png" width="200px" height="80px" alt=""></a>           
             <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px; margin-top: 20px">
                Categorías
            </v-btn>
            <v-text-field  
                outlined
                dense
                style="margin-left:5px; border-radius: 20px; margin-top: 20px"
                placeholder="Buscar cualquier cosa"
                type="text"
                required
                color="#ddeaee"             
             ></v-text-field>
              <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Buscar
            </v-btn>
            <v-btn @click="categorias()" color="#ddeaee" style="margin-left:30px ; margin-top: 20px">
                Mi progreso
            </v-btn>
             <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Perfil
            </v-btn>
            <v-btn
                class="ma-2"
                color="#ddeaee"
                dark
                style="margin-left:5px ; margin-top: 20px"
                @click="modalCarro()"
                ><center style="display:flex">
                    <img src="https://acceso.com.pe/wp-content/uploads/2022/04/carrito.png" class="imagen-carro" alt="">
                    <h1 style="margin-top:8px; color: red">{{ tamano }}</h1>
                </center>
                
            </v-btn>

            <div class="modalCarrito" v-if="modalEstado">
                 <div class="container-button">
                    <v-btn class="bton-carr" color="primary" @click="cerrarModal()">
                    Cerrar
                    </v-btn>
                    <v-btn class="bton-carr2" color="primary" @click="comprar()">
                        Comprar
                    </v-btn>

                </div>
                <productos style="margin-top:20px"></productos>
                <div style="margin-top:30px">
                     <span> <b>Total: {{suma}}</b> </span>
                </div>
                
               
                
            </div>   
    </div>
   
</div>
</template>
<script>
import { mapGetters } from "vuex";
import productos from '@/components/productos'
export default {
  components: {
      productos
  },
  data() {
    return {
      login: '',
      password: '',
      modalEstado: false,
    }
  },
  computed: {
    ...mapGetters("carrito", ["tamano", "arrayCarrito", "total"]),
    suma(){
        return this.total
    }
    // signedIn(){
    //   console.log(this.$store.state.signedIn);
    //   return this.$store.state.signedIn;
    // }
  },
  created(){
    
  },
  methods:{

      modalCarro(){
          this.modalEstado=true
      },
      cerrarModal(){
            this.modalEstado=false
      },
      comprar(){
          
      }
    
  }
}
</script>


<style >
.imagen-carro{
    width: 40px;
}
.modalCarrito{
    position: absolute;
    background: rgb(244, 221, 221);
    width: 280px;
    margin-top: 70px ;
    height: 350px;
    margin-left: 1270px;
}
.bton-carr{
    color: black !important;
    /* background: rgb(177, 122, 232); */
}
.bton-carr2{
    color: black !important;
    margin-left: 6px;
    /* background: rgb(177, 122, 232); */
}
.container-button{
    position: absolute;
    margin-top: 300px ;
    margin-left: 40px ;
}
</style>