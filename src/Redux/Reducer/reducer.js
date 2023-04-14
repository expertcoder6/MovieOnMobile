let initialState = {};

const MovieData = (state = initialState, action) => {

    switch (action.type) {

        case "SERVER_RESPONSE":

            state = {
                [action.payload.key]: {
                    respponse: action.payload.data,
                    status: true,
                    loading: false
                }
            }
            return state

        case "SERVER_ERROR":

            state = {
                [action.payload.key]: {
                    error: action.payload.data,
                    status: false,
                    loading: false
                }
            }
            return state


        default:
            return state
    }
}

export default MovieData;