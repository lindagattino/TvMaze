import axios from 'axios';

export async function fetchShows() {
  try {
    const response = await axios.get('http://api.tvmaze.com/schedule');
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export async function fetchSearch(key) {
  try {
    const response = await axios.get('http://api.tvmaze.com/search/shows?q='+key);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}


