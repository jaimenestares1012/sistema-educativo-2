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
                ><center>
                    <img src="https://acceso.com.pe/wp-content/uploads/2022/04/carrito.png" class="imagen-carro" alt="">
                </center>
            </v-btn>   
    </div>
    <div class="modalCarroStylo" v-if="modalEstado">
        <iframe src="" frameborder="0">
            <h1>sssssssssssss</h1>
        </iframe>
    </div>
</div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      login: '',
      password: '',
      modalEstado: false,
    }
  },
  computed: {
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
      }
    
  }
}
</script>


<style >
.imagen-carro{
    width: 40px;
}
.modalCarroStylo{
    width: 400px;
    height: 100px;
    position: fixed;
    background: rgb(228, 220, 220);
    margin-left: 900px ;
}
</style>