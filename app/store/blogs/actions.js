//We don't need all the functionality of jQuery so we'll use axios instead
import axios from 'axios';
import * as Constants from './constants';


export const fetchBlogs = () => (dispatch) => {

    let url = '/api/saved';
    return axios.get(url)
        .then((response) => dispatch({
          type: Constants.FETCH_BLOGS_SUCCESS , payload: { blogs: response.data} }))
        .catch((error) => dispatch({
          type: Constants.FETCH_BLOGS_FAILURE, payload: {error} }))
    }
  
