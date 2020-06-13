import axios from 'axios'
const API_URL = "https://webtipro.businesswebti.com/api/v1/"
const header = {
  headers: {
    apiKey: ' WebtiPRO-ApiKey '
  }
}
async function getServices(){
    const services = await axios.get(API_URL + 'initializeapp/initialize', header)
    return services.data.data
}

export const dataService = {
  getServices
}