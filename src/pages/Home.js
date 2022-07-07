import axios from "axios"
import Cards from '../components/Cards'
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Pagination from "../components/Pagination"

const Home = () => {
  const [characters, setCharacters] = useState()
  const [page, setPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=${page}`

  const previousPage = () => {
    if (page > 1) {
      setPage(page => page - 1)
    }
  }

  const nextPage = () => {
    if (page < 42) {
      setPage(page => page + 1)
    }
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
      <Header />
      <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />
      <Cards characters={characters} />
    </div>
  )
}

export default Home