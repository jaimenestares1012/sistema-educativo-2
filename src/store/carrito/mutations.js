export default {
    

  ADD(state, payload){
      // state.arrayProductos=payload
      // for (let i = 0; i <= state.arrayProductos.length; i++) {
      //   console.log("-",  state.arrayProductos[i].id);
      //   
      // }

      if (state.arrayProductos.length==0) {
          state.arrayProductos.push(payload) 
          state.total= payload.precio
      }

      const resultado = state.arrayProductos.find( algo => algo.id == payload.id );
      if (resultado) {
        console.log("repeticua", );
      }else{
        state.arrayProductos.push(payload)
        state.total=state.total + payload.precio
      }
      state.tamano= state.arrayProductos.length
      console.log("este es el tamañp", state.tamano);
    },
    ELIMINAR(state, payload){
      // const resul = state.arrayProductos.find( algo => algo.id == payload )
      var newArray = state.arrayProductos.filter((item) => item.id !== payload);
      state.arrayProductos = newArray
      let sumita = 0
      for (let i = 0; i < state.arrayProductos.length; i++) {
        sumita=sumita+ state.arrayProductos[i].precio
      }
      state.total=sumita
      console.log("esta es la sumita", sumita);
    },
    
    
    
    
  };