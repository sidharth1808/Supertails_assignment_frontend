export const productReducer = (state,action) => {
    switch(action.type){
        case 'SORT_BY_PRICE' :
            return {...state,sort:action.payload};
        case "FILTER_BY_RATING" :
            return {...state, byRating:action.payload};
        case "FILTER_BY_CATEGORY" :
            return {...state, category:action.payload};
        case "FILTER_BY_BRAND" :
            return {...state, brand:action.payload};
        case "FILTER_BY_SEARCH" :
            return {...state, searchQuery:action.payload};
        case "FILTER_BY_PRICE" :
            return {...state, price:action.payload}
        case "CLEAR_FILTERS" :
            return {
                byRating:0,
                category:"",
                brand:"",
                searchQuery:"",
            };
            default:
                return state;
                    

        

        
    }
};