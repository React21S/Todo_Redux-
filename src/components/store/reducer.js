import * as actionTypes from "./action";
import { getAll, createNew, removeNote, doneNote } from "../../services/notes";


// const {notes} = require("./notes")
// const initialState = {
//     notes: notes,
// };

const reducer =(state = [], action)=>{
    switch(action.type){
        case actionTypes.INIT_NOTES:
            return action.payload;

        case actionTypes.ADD_TODO:
            return [...state, action.payload];
            
        case actionTypes.DONE_TODO:
            const doneToggle = state.map((doneTodo)=>{
                return doneTodo.id === action.payload.id 
                ?{ ...doneTodo, done: !doneTodo.done}
                :{...doneTodo}
            });
            return doneToggle;
          
        case actionTypes.REMOVE_TODO:
            const updateArray = state.filter((removeTodo)=>removeTodo.id !== action.payload)
            return updateArray;
       

        default:
            return state;
    }
    
}
export const initNotes = ()=>{
    return async (dispatch)=>{
        const notes = await getAll();
        dispatch({
            type:actionTypes.INIT_NOTES,
            payload:notes,
        });
    };
};

export const createNote= (content)=>{
    return async (dispatch)=>{
        const newNote = await createNew(content);
        dispatch({
            type:actionTypes.ADD_TODO,
            payload:newNote,
        });
    };
};

export const removeItem = (id) => {
    return async (dispatch) => {
      await removeNote(id);
      dispatch({
        type: actionTypes.REMOVE_TODO,
        payload: id,
      });
    };
  };
  
  export const toggleItem = (content) => {
    return async (dispatch) => {
      await doneNote(content);
      dispatch({
        type: actionTypes.DONE_TODO,
        payload: content,
      });
    };
  };

export default reducer;