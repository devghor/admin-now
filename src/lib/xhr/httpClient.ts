import axios, { InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios'
import { apiConstant } from '../../constants'

const httpClient = axios.create({
  timeout: apiConstant.TIME_OUT,
  baseURL: apiConstant.BASE_URL,
})

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set('app-id', '6456f89f7adea5f6e3aee0fe')

  return config
})

export default httpClient
