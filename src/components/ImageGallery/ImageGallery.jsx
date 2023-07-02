import { ImageGalleryS } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';



export const ImageGallery = ({ data, onItemClick }) => {
  return (
    <ImageGalleryS>
      <ImageGalleryItem data={data} onItemClick={onItemClick} />
    </ImageGalleryS>
  );
};


ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};