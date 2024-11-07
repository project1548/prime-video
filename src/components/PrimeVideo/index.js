// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  console.log(actionMoviesList)
  console.log(comedyMoviesList)

  return (
    <div className="bg">
      <img
        className="prime-video-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="content-container">
        <MoviesSlider
          actionMoviesList={actionMoviesList}
          comedyMoviesList={comedyMoviesList}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
