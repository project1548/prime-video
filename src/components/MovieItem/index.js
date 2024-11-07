// Write your code here
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      position="center center"
      trigger={
        <div>
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </div>
      }
    >
      {close => (
        <div className="popup-bg">
          <button
            onClick={close}
            type="button"
            className="close-button"
            data-testid="closeButton"
          >
            <IoMdClose size="20" />
          </button>
          <ReactPlayer url={videoUrl} className="video" controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
