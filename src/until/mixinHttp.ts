import axios from '@/until/http'
import { Commit } from 'vuex'
export const asyncAndCommit = async (mutationsNames: string, commit: Commit, config: object) => {
  const { data } = await axios(config)
  commit(mutationsNames, data)
  return data
}
