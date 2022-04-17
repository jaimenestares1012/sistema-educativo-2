<template>
  <div class="home">
    
    <div v-if="!signedIn">
        <amplify-authenticator></amplify-authenticator>
    </div>
   <div v-if="signedIn">
      <v-btn @click="redirect()">
      Ir al sistema
    </v-btn>
      <amplify-sign-out></amplify-sign-out>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Auth } from 'aws-amplify'
import HelloWorld from '@/components/HelloWorld.vue'
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      login: '',
      password: '',
      signedIn: false
    }
  },
  computed: {
    // signedIn(){
    //   console.log(this.$store.state.signedIn);
    //   return this.$store.state.signedIn;
    // }
  },
  created(){
    this.findUser();
    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        this.findUser();
      } else {
        // this.$store.state.signedIn = false;
        this.signedIn = false;
        // this.$store.state.user = null;
        
      }
    });
  },
  methods:{
    redirect(){
      window.location.href = '/prueba'
    },
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        // this.$store.state.signedIn = true;
        // this.$store.state.user = user;
        console.log(user);
      } catch(err) {
        this.signedIn = false;
        // this.$store.state.signedIn = false;
        // this.$store.state.user = null;
      }
    }
  }
}
</script>
