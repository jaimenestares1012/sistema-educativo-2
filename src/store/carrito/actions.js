
import {  conversor, details, sube, actualizarform } from "@/api";
// export default{
//     mostrarCarritoAction({ commit }) {
//         commit("mostrarCarritoMutation");
//       },
// }

export async function adicion ({ commit, state}, payload) {

    try {
   
    commit('ADD',payload )  
    } catch (e) {
      console.log(e)
      return false
    }
  }