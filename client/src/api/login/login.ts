import { endpoints } from '../endpoints'
import { api } from '../init'
import { User } from './req-types'
import { SuccessResponse } from './res-types'

export const login = async (req: User) => {
  return api.post<SuccessResponse>(endpoints.login, req)
}
