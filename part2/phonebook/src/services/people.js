import axios from "axios";
import uniqid from 'uniqid';

const baseUrl = 'http://localhost:3001/people'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => {
  newPerson.id = uniqid()
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (id, newDetails) => {
  const request = axios.put(`${baseUrl}/${id}`, newDetails)
  return request.then(response => getAll())
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => getAll())
}

const funcs = { getAll, create, update, remove }


export default funcs