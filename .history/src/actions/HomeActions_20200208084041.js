import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  GET_MOIVES_GENERS,
} from './types';

export const getUserData = (userID, accessToken) => {
  return (dispatch) => {
    dispatch({ type: GETTING_USER_INFO });
    axios.get(BASE_URL + '/api/users/' + userID, {
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

export const setFollowStatus = (userID, accessToken, status) => {
  return (dispatch) => {
    dispatch({ type: SETTING_FOLLOW_STATUS, payload: status });
    axios.get(BASE_URL + '/api/users/' + userID + '/follow', {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(result => {
        //console.log(result);
        //dispatch({ type: GOT_USER_INFO, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: USER_ERROR });
      });
  };
};

export const registerPush = (accessToken, pushToken) => {
  return (dispatch) => {
    axios.post(BASE_URL + '/api/users/push',
    {
      pushToken: pushToken,
    },
     {
       headers: { Authorization: 'Bearer ' + accessToken }
     }
  )
      .then(result => {
        console.log(result);
        //dispatch({ type: GOT_USER_INFO, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: USER_ERROR });
      });
  };
};

export const getProfilePicture = (accessToken) => {
  return (dispatch) => {
    dispatch({ type: GETTING_USER_INFO });
    axios.get(BASE_URL + '/api/user/picture', {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(result => {
        //console.log(result);
        dispatch({ type: GOT_PROFILE_PICTURE, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: USER_ERROR });
      });
  };
};

export const setProfilePicture = (accessToken, base64PictureData) => {
  return (dispatch) => {
    dispatch({ type: GETTING_USER_INFO });
    axios.post(BASE_URL + '/api/user/picture',
    {
      picture: base64PictureData,
    },
     {
       headers: { Authorization: 'Bearer ' + accessToken }
     }
  )
      .then(result => {
        //console.log(result);
        dispatch({ type: GOT_PROFILE_PICTURE, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: USER_ERROR });
      });
  };
};
