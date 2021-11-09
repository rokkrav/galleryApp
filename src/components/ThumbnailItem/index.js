import './index.css'

const ThumbnailItem = props => {
  const {imagesList, clickThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }
  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  return (
    <li className="each-thumbnail">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
