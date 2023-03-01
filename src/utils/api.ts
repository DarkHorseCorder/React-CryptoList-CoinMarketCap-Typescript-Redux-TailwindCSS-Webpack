import axios from "axios"

export const getData = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKETCAP_API_KEY,
        'Access-Control-Allow-Origin' : '*'
      },
    });

    return response.data.data
  } catch (err) {
    console.log(err)
  }
}