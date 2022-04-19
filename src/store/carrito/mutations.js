export default {
    

  ADD(state, payload){
    console.log("em las mutations", payload);
      // state.arrayProductos=payload
      for (let i = 0; i < state.arrayProductos.length; i++) {
        console.log("este es el i", state.arrayProductos);
      }
      state.arrayProductos.push(payload)    
      console.log("cod res desde las mutaciones", state.arrayProductos );
    },
    
    
    
    
  };