import axios from 'axios';

export const hotel_actions = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const hotel_data_request = () => ({
  type: hotel_actions.REQUEST,
});

export const hotel_data_success = (payload) => ({
  type: hotel_actions.SUCCESS,
  payload,
});

export const hotel_data_failure = () => ({
  type: hotel_actions.FAILURE,
});

export const fetch_hotel_data = (payload) => (dispatch) => {
  dispatch(hotel_data_request());
  axios
    .get(`https://json-dummy-server-gajraj.herokuapp.com/hotel`, {
      params: {
        city: payload,
      },
    })
    .then((res) => {
      dispatch(hotel_data_success(res.data));
    })
    .catch((err) => {
      dispatch(hotel_data_failure());
    });
};
