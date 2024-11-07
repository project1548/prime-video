// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {actionMoviesList, comedyMoviesList} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <h1 className="heading">Action Movies</h1>
      <Slider {...settings}>
        {actionMoviesList.map(eachItem => (
          <MovieItem movieDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings}>
        {comedyMoviesList.map(eachItem => (
          <MovieItem movieDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
