import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_GENERS,
} from './types';

export const getMovieGeners = () => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVES_GENERS });
    axios.get(BASE_URL + '/genre/movie/list?' + API_KEY, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(result => {
        console.log(result);
        dispatch({ type: GOT_USER_INFO, payload: result.data });
        Actions.user({ title: result.data.name });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: USER_ERROR });
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
