import axios from 'axios';

export const SET_RANDOM_GREETING = 'SET_RANDOM_GREETING';

export const setRandomGreeting = (greeting) => ({
  type: SET_RANDOM_GREETING,
  payload: greeting,
});

export const fetchRandomGreeting = () => (dispatch) => {
  axios
    .get('/random_greeting')
    .then((response) => {
      const { greeting } = response.data;
      dispatch(setRandomGreeting(greeting.content));
    })
    .catch((error) => {
      console.error('Error fetching random greeting:', error);
    });
};
