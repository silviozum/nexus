import axios from 'axios'
const API_URL = "https://webtipro.businesswebti.com/api/v1/"

async function getServices(){
    const services = await axios.get(API_URL + 'product/products',{
      headers: {
        apiKey: ' WebtiPRO-ApiKey '
      }
    })
    return services.data.data
}


export const dataService = {
  getServices
}