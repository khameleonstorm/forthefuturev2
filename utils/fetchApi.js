import axios from "axios";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': process.env.NEW_KEY,
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  })

  return data
}
