import { ImageGalleryItemS } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ data, onItemClick }) => {
  return data.map(image => {
    return (
      <ImageGalleryItemS key={image.id} onClick={()=>onItemClick(image)}>
        <img
          className="ImageGalleryItem-image"
          src={image.previewURL}
          alt={image.tags}
        />
      </ImageGalleryItemS>
    );
  });
};

ImageGalleryItem.propTypes = {
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};