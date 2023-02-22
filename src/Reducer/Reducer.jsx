const initialstate = [{ id: Math.random(), name: "abdullah" }];

export default (state = initialstate, action) => {

  console.log(action, "action");

  if (action.type === "add_name") return [...state, action.payload];
  if (action.type === "del_name") {

    return state?.filter((item) => {

      if (action?.payload !== item.id) {

        console.log("aaaa");

        return item;
      }
    
    });
  }
  if(action.type==='update_name')
  {
     state?.map((item)=>{
          if(item.id===action?.payload.id)
          {
            item.name=action?.payload.name
        
          }
          return item;
     })
  }

  return state;
};
