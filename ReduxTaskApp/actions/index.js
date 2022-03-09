export const addToDo = (data) =>{
    return{
        type: "ADDTODO",
        payLoad:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
};
export const deleteToDo = (id) =>{
    return{
        type: "DELETETODO",
        id
    }
};
export const removeToDo = () =>{
    return{
        type: "REMOVETODO"
    }
};