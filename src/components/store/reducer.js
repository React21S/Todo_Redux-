import * as actionTypes from "./action";

const {notes} = require("./notes")
const initialState = {
    notes: notes,
};

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TODO:
            return {
                notes:[
                    ...state.notes, 
                    {
                        id: new Date().valueOf(), 
                        ...action.payload,
                        done:false
                    },
                ],
            };
            case actionTypes.DONE_TODO:
                const doneToggle = state.notes.map((doneTodo)=>{
                    return doneTodo.id === action.payload 
                    ?{ ...doneTodo, done: !doneTodo.done}
                    :{...doneTodo}
                });
            return {
               ...state,
               notes: doneToggle
            };
            case actionTypes.REMOVE_TODO:
                const updateArray = state.notes.filter((removeTodo)=>removeTodo.id !== action.payload)
                return {
                    ...state,
                    notes:updateArray
                };

        default:
            return state;
    }
    
}
export default reducer;