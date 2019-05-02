import { API_END_POINT } from "../config"

export const fetchBooks = () => {  
  return (
    fetch(`${API_END_POINT}/api/Books`, {
      method: 'get',
    })
    .then(response => response.json())
    .then(({results}) => results )
  )
}

export const fetchBook = (id) => {
  return (
      fetch(`${API_END_POINT}/api/Books/${id}`, {
          method: 'get',
      })
      .then(response => response.json())
      .then(({results}) => results)
  )
}
  