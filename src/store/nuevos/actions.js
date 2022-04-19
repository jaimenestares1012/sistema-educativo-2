
import {  conversor, details, sube, actualizarform,apigetconsulta  } from "@/api";
export async function consulta ({ commit}, payload) {
  console.log(payload);
  try {
    const response = await conversor(payload);
    commit('RESPUESTA',response )  
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

export async function subiendo ({ commit}, payload) {
  console.log(payload);
  try {
    const response = await sube(payload);
    console.log("esta es la respuesta luego de subir", response);
    // commit('RESPUESTA',response )
  } catch (e) {
    console.log(e)
    return false
  }
}

export async function detalles ({ commit}, payload) {
  console.log(payload);
  try {
    const response = await details(payload);
    console.log("response detalles", response);
    commit('DETALLES',response )
   
  } catch (e) {
    console.log(e)
    return false
  }
}


export async function actualizar ({ commit}, payload) {
  console.log("este es el actualizar ",payload);
  try {
    const response = await actualizarform(payload);
    commit('DETALLES',response )
   
  } catch (e) {
    console.log(e)
    return false
  }
}