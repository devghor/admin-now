import axios from 'axios'
import { apiConstant } from '../../constants'

const httpClient = axios.create({
  timeout: apiConstant.TIME_OUT,
  baseURL: apiConstant.BASE_URL,
})

export default httpClient
