/* eslint-disable space-before-function-paren */
import { CATOGORY_TYPES } from '@/typing'
import axios from '.'

export function getSliders<T>() {
  return axios.get<T, T>('/slider/list')
}

export function getLessons<T>(
  category: CATOGORY_TYPES,
  offset: number,
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  limit: number = 5
) {
  return axios.get<T, T>(
    `/lesson/list?category=${category}&offset=${offset}&limit=${limit}`
  )
}
