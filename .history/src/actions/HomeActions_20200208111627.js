import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_GENERS,
  GET_MOIVES_BY_GENER,
  ERROR,
} from './types';

export const getMovieGeners = () => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVES_GENERS });
    axios.get(BASE_URL + '/genre/movie/list?' + API_KEY)
      .then(result => {
        var geners = Object.values(result.data)[0];
        console.log(geners);
        dispatch({ type: GET_MOIVES_GENERS, payload: result.data });
        Actions.Home();
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};

export const getMoviesByGener = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVES_GENERS });
    axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&with_genres='+id)
      .then(result => {
        dispatch({ type: GET_MOIVES_BY_GENER, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};

// export const setProfilePicture = (accessToken, base64PictureData) => {
//   return (dispatch) => {
//     dispatch({ type: GETTING_USER_INFO });
//     axios.post(BASE_URL + '/api/user/picture',
//     {
//       picture: base64PictureData,
//     },
//      {
//        headers: { Authorization: 'Bearer ' + accessToken }
//      }
//   )
//       .then(result => {
//         //console.log(result);
//         dispatch({ type: GOT_PROFILE_PICTURE, payload: result.data });
//       })
//       .catch((error) => {
//         console.log(error.response);
//         dispatch({ type: USER_ERROR });
//       });
//   };
// };
