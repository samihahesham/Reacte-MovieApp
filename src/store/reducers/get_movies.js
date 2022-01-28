const initialState ={
    movies_lst: []
};
export default function moviesRed(state = initialState,action){
    switch (action.type){
        case "GET_MOVIES" :
            return{
                ...state,
                movies_lst: action.payload,                
            };
        
        default :
            return state
    }
}
