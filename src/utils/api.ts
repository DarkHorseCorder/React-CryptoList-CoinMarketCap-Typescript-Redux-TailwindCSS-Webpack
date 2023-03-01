import axios from "axios"

export const getData = async () => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': "1fbacd25-c2f6-49ed-a4c8-3fda6bcb21a5",
        'Access-Control-Allow-Origin' : '*'
      },
    });

    return response.data.data
  } catch (err) {
    console.log(err)
  }
}