import { auth_actions } from './action';

const initialState = {
  token: '',
  auth: false,
  isLoading: false,
  isError: false,
};

export const auth_reducer = (state = initialState, action) => {
  switch (action.type) {
    case auth_actions.REQUEST:
      return { ...state, isLoading: true, auth: false };
    case auth_actions.SUCCESS:
      return { ...state, isLoading: false, auth: true, ...action.payload };
    case auth_actions.FAILURE:
      return { ...state, isLoading: false, auth: false, isError: true };
    default:
      return state;
  }
};
