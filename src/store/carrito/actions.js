
import {  apiGetCompra } from "@/api";
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


  export async function consultamios ({ commit}, payload) {
    console.log(payload);
    try {
      const response = await apigetconsulta(payload);
      commit('RESPUESTAGET',response )  
    } catch (e) {
      console.log(e)
      return false
    }
  }
  
  export async function eliminar ({ commit, state}, payload) {

    try {
   
    commit('ELIMINAR',payload )  
    } catch (e) {
      console.log(e)
      return false
    }
  }

  export async function compra ({ commit, state}, payload) {
    console.log("estamos en la compra", payload);

    // const id=payload.id
    // const precio=payload.precio
    
    try {
      const response = await apiGetCompra(payload);
      console.log("esta es la respuesta de la compra", response);
    } catch (e) {
      console.log(e)
      return false
    }
  }