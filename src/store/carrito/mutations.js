export default {
    

  ADD(state, payload){
      // state.arrayProductos=payload
      // for (let i = 0; i <= state.arrayProductos.length; i++) {
      //   console.log("-",  state.arrayProductos[i].id);
      //   
      // }
      if (state.arrayProductos.length==0) {
          state.arrayProductos.push(payload)  
      }

      const found = state.arrayProductos.find(element => element = 10);
      // for (let i = 0; i < state.arrayProductos.length; i++) {
      //       if ( state.arrayProductos[i].id==payload.id) {
      //           console.log("son productos iguales");
      //       }else{
      //           console.log("son distintos", payload);
      //           state.arrayProductos.push(payload)  

      //       }
        
      // }
      state.tamano= state.arrayProductos.length
    },
    
    
    
    
    
  };