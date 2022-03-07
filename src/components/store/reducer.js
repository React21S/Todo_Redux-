import * as actionTypes from "./action";
import noteService from "../../services/notes";


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
export const initNotes = ()=>{
    return async (dispatch)=>{
        const notes = await noteService.getAll();
        dispatch({
            type:actionTypes.INIT_NOTES,
            payload:notes,
        });
    };
};

export const createNote= (content)=>{
    return async (dispatch)=>{
        const newNote = await noteService.createNew(content);
        dispatch({
            type:actionTypes.ADD_TODO,
            payload:newNote,
        });
    };
}

export default reducer;