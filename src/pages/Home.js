import axios from "axios"
import Cards from '../components/Cards'
import { useEffect, useState } from "react"

const Home = () => {
  const [characters, setCharacters] = useState()
  const [page, setPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=${page}`

  const previousPage = () => {
    setPage(page => page - 1)
  }

  const nextPage = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCharacters(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page])

  console.log(characters)

  return (
    <div className="Home">
      <Cards characters={characters} />
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Home