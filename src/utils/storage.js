const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_shopping_history'

// 个人信息相关
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}

export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 搜索记录相关
export const getSearchHistory = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setSearchHistory = (history) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}
