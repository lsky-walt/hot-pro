export const parseUrl = () => {
  const [base, urlParam] = window.location.hash.split('?')
  const urls = base.replace('#/', '').split(/\//g)
  if (!urlParam) {
    return [base, null, urls]
  }
  const p = urlParam.split(/&/g).map((str) => {
    const [name, value] = str.split('=')
    return { name, value }
  })
  return [base, p, urls]
}

// 仅限 url parse
export const stringify = (arr) => arr.map((v) => `${v.name}=${v.value}`).join('&')
