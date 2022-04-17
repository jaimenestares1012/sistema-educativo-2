<template>
    <div class="headers" style="margin: 10px 20px 10px 20px; display: flex">
             <h4  color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Hola: <span class="nombre-usuario">{{ usuario }}</span> 
            </h4>
           
            <v-btn
                class="ma-2"
                color="#ddeaee"
                style="margin-left:900px ; margin-top: 20px"
                v-if="conidcionProfe()"
                @click="openTermsConditions()"
            >Crear Curso
            </v-btn>
        </div>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
   
    data: () => ({
      loading: false,
      selection: 1,
      estadoVermas: false,
      usuario: "Username"
    }),
    methods: {
      async categorias(){
          const user = await Auth.currentAuthenticatedUser();
          console.log("este es el user", user.username);
          this.usuario=user.username
      },
      async conidcionProfe(){
        const user = await Auth.currentAuthenticatedUser();
        if ( user.username=="jaimenestares1013") {
           return true

        }
        return false

      },
   
    openTermsConditions() {
        console.log("en el modal");
     
        window.location.href = '/nuevo';
 
    },
     
    },
    mounted () {
          this.categorias()
        
        
    },
}
</script>
<style >
.nombre-usuario{
  color: #9087f1;
}
</style>
