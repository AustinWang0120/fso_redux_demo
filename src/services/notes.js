import axios from "axios"

const baseUrl = "http://localhost:3001/notes"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const object = {
    content,
    important: false
  }
  const res = await axios.post(baseUrl, object)
  return res.data
}

const update = async (id, newNote) => {
  const res = await axios.put(`${baseUrl}/${id}`, newNote)
  return res.data
}

const myService = {
  getAll, createNew, update
}

export default myService
