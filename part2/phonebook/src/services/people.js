import axios from "axios";

const baseUrl = 'http://localhost:3001/people'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (id, newDetails) => {
  const request = axios.put(`${baseUrl}/${id}`, newDetails)
  return request.then(response => response.data)
}

const funcs = { getAll, create, update }


export default funcs