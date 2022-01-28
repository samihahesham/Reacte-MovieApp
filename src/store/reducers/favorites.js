const initialState ={
    Favorites: []
};
export default function favoriteRed(state = initialState,action){
    switch (action.type){
        case "ADD_FAVORITE" :
            return{
                ...state,
                Favorites: action.payload,                
            };
        
        default :
            return state
    }
}
