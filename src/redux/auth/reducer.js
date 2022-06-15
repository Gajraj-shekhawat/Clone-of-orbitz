const initialState = { token: '' };
initialState.auth = initialState.token ? true : false;

export const auth_reducer = (state = initialState, action) => {
    return state
}
