import Storage from 'web-storage-cache'
const localStorage = new Storage()
export const getStorage = (key: string) => localStorage.get(key)
export const removeStorage = () => localStorage.clear()
export const delectStorage = (key: string) => localStorage.delete(key)
export const setStorage = (key: string, val: any, time = 10) => localStorage.set(key, val, { exp: time })
