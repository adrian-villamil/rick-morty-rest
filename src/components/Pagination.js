import '../css/Pagination.css'

const Pagination = ({page, previousPage, nextPage}) => {

  return (
    <div className="Pagination">
      <button onClick={previousPage}>{'<< Previous'}</button>
      <span>{page}</span>
      <button onClick={nextPage}>{'Next >>'}</button>
    </div>
  )
}

export default Pagination