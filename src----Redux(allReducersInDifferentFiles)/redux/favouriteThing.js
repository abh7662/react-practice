export const addFavouriteThing = (thing) => {
    return {
        type: 'ADD_FAVOURITE_THING',
        payload: thing
    }
}

export const removeFavouriteThing = (thing) => {
    return {
        type: 'REMOVE_FAVOURITE_THING',
        payload: thing
    }
}


const favouriteThingReducer = (favouriteThings= [],action) => {
    switch(action.type){
        case 'ADD_FAVOURITE_THING':
            return [...favouriteThings, action.payload]
        case 'REMOVE_FAVOURITE_THING': {
            const updatedThings = favouriteThings.filter(thing => thing !== action.payload)
            return updatedThings
        }
        default:
            return favouriteThings
    }
}

export default favouriteThingReducer
