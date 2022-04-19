
import {  conversor, details, sube, actualizarform } from "@/api";
// export default{
//     mostrarCarritoAction({ commit }) {
//         commit("mostrarCarritoMutation");
//       },
// }

export async function adicion ({ commit}, payload) {
    console.log(payload);
    try {
    //   const response = await conversor(payload);
      commit('ADD',payload )  
    } catch (e) {
      console.log(e)
      return false
    }
  }