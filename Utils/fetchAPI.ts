import fetch from 'isomorphic-unfetch'

const fetchAPI = ({
  url,
  method = "GET",
  credentials = "include",
  body = null
}: {
  url: string,
  method: string,
  credentials: string,
  body: any
}) => {
  const options = {
    method: method,
    credentials: credentials,
    headers: {
      "content-type": "application/json"
    }
  }
  if (body) options.body = JSON.stringify(body)

  return fetch(url, options)
}


export default fetchAPI
