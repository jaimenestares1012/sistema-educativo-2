<template>
    <div>
        <headers></headers>
        <usuario></usuario>
        <div class="container-card">
            <div style="display:flex; ">
                <div style="margin:30px 5px; " v-for="(esto, index) in datosgeneral" :key="esto">
                    <div v-if="index<5"  style="">
                        <v-card
                           
                            v-if="esto.id"
                            class="my-3"
                            max-width="220px"
                            color="#DAEAEE"
                        >
                            <v-img
                            @click="sedaclick(esto.id)"
                            height="150"
                            src="https://acceso.com.pe/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-19-at-6.39.41-PM-1.jpeg"
                            ></v-img>

                            <v-card-title> {{ esto.nombre }} </v-card-title>

                            <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="esto.calificacion"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ms-4">
                                {{ esto.calificacion }} (413)
                                </div>
                            </v-row>
                            <br>
                            <div class="my-4 text-subtitle-1">
                              S/.  {{ esto.precio }}
                            </div>

                            
                            </v-card-text>
                            <div style="display:flex">
                                <v-btn
                                    color="#ffffff"
                                    text
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="comprar(esto.id)"
                                >
                                    Comprar
                                </v-btn>
                                <v-btn
                                    color="#ffffff"
                                    text
                                
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="reservar(esto)"
                                >
                                    Añadir
                                </v-btn>
                            </div>
                            
                            
                        </v-card> <br>
                    </div> 
                </div>   
            </div>

            
            <div style="display:flex">
                <div  v-for="(esto, index) in datosgeneral" :key="esto">
                    <div v-if="existe(index)" >
                        <v-card
                            @click="sedaclick(esto.id)"
                            v-if="esto.id"
                            class="my-3"
                            max-width="220px"
                            style="margin-left:9px"
                            color="#DAEAEE"
                        >
                            <v-img
                            height="150"
                            src="https://acceso.com.pe/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-19-at-6.39.41-PM-1.jpeg"
                            ></v-img>

                            <v-card-title> {{ esto.nombre }} </v-card-title>

                            <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="esto.calificacion"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ms-4">
                                {{esto.calificacion}} (413)
                                </div>
                            </v-row>
                            <br>
                            <div class="my-4 text-subtitle-1">
                                S/. {{esto.precio}}
                            </div>

                            
                            </v-card-text>
                            <div style="display:flex">
                                <v-btn
                                    color="#ffffff"
                                    text
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="comprar(esto.id)"
                                >
                                    Comprar
                                </v-btn>
                                <v-btn
                                    color="#ffffff"
                                    text
                                
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="reservar(esto)"
                                >
                                    Añadir
                                </v-btn>
                            </div>
                            
                            
                        </v-card> <br>
                    </div> 
                </div>   
            </div>
            

            <div style="display:flex" v-if="estadoVermas"> 
                <div  v-for="(esto, index) in datosgeneral" :key="esto">        
                    <div v-if="existe(index)" >
                        <v-card
                            @click="sedaclick(esto.id)"
                            v-if="esto.id"
                            class="my-3"
                            max-width="220px"
                            style="margin-left:9px"
                            color="#DAEAEE"
                        >
                            <v-img
                            height="150"
                            src="https://acceso.com.pe/wp-content/uploads/2022/03/logo.png"
                            ></v-img>

                            <v-card-title> {{ esto.nombre }} </v-card-title>

                            <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="esto.calificacion"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ms-4">
                                {{ esto.calificacion }} (413)
                                </div>
                            </v-row>
                            <br>
                            <div class="my-4 text-subtitle-1">
                                 {{ esto.precio }}
                            </div>

                            
                            </v-card-text>
                            <div style="display:flex">
                                <v-btn
                                    color="#ffffff"
                                    text
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="reserve"
                                >
                                    Comprar
                                </v-btn>
                                <v-btn
                                    color="#ffffff"
                                    text
                                
                                    style="background:#207189; margin-left:5px; margin-bottom:10px"
                                    @click="reserve"
                                >
                                    Añadir
                                </v-btn>
                            </div>
                            
                            
                        </v-card> <br>
                    </div> 
                </div>   
            </div>
            
        </div>
       
        <!-- <div v-if="estadoBtnVerMas()">
            <center>
                <v-btn
                class="ma-2"
                color="#ddeaee"
                style="margin-top: 20px; margin-bottom: 20px;"
                @click="btnvermas()"
                >Ver más
                </v-btn>
            </center>       
        </div> -->


    </div>
    
</template>
<script>
import headers from '@/components/headers'
import usuario from '@/components/usuario'
import { Auth } from 'aws-amplify'
// import { req } from 'aws-amplify'
import { mapGetters } from "vuex";
export default {
    components:{
        headers,
        usuario,
        
    },

    setup(){

    },

    data() {

       return {
        loading: false,
        selection: 1,
        estadoVermas: false,
        modalEstado:true,
        usuario: null,
        isnull:null,
        isopenCronograma: false
        }
    },
     methods: {
    async sedaclick(key){
        const user = await Auth.currentAuthenticatedUser();
        console.log("este es el user", user);
        // window.location.href = `/detalles/?key=${key}`;
        console.log("se dio un click");
    },
    estadoBtnVerMas(){
        console.log("este es el ", this.datosgeneral.length);
        if (this.datosgeneral.length>10) {
            return true
        }
        return false
    },
    comprar(key){
        window.location.href = `/compra/?key=${key}`;

        // console.log("este es el getsub", req);
    },
    closeModalCronograma() {
      this.isopenCronograma = false
    },
    reservar(esto){
        console.log("se dio en añadir", esto);
        const payload ={
            "id": esto.id,
            "nombre": esto.nombre,
            "precio": esto.precio
        }
        this.$store.dispatch('carrito/adicion', payload)
        
        
    },
    btnvermas(){
        this.estadoVermas = true
    },
    existe(index){
        if (5<=index && index<=9) {
            return true
        }
        else{
            return false
        }
    },
    openTermsConditions() {
        console.log("en el modal");
      // await this.$store.dispatch('nuevos/crearURL', this.dataVehiculo.checklist)
    //   this.$refs.termsConditionsModal.open()
        window.location.href = '/nuevo';
      
      // const url = URL.createObjectURL("https://wf4.accesocrediticio.com/acceso/images/documentos_dia/9723151.pdf")
      // console.log("esta es la url", url);
    },
     

    async categorias(){
        const user = await Auth.currentAuthenticatedUser();
        console.log("este es el user", user.username);
    },
      reserve () {
        // this.loading = true

        // setTimeout(() => (this.loading = false), 2000)
      },
    },
    computed: {
         ...mapGetters("nuevos", ["datosgeneral"]),
         ...mapGetters("carrito", ["arrayCarrito"])

    },
    mounted () {
        const estado="a"
        this.$store.dispatch('nuevos/consulta', estado)
        this.$store.dispatch('carrito/consultamios', estado)
        this.categorias()
        
        
    },
}
</script>

<style >
.container-card{
    max-width: 1180px;
    background: rgb(241, 241, 241);
    margin-left: 100px;
    padding-left: 10px;
    position: relative;

}


</style>