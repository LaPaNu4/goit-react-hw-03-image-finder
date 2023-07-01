import { ImageGalleryS } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";



export const ImageGallery = ({ data, onItemClick }) => {
  return (
    <ImageGalleryS>
      <ImageGalleryItem data={data} onItemClick={onItemClick} />
    </ImageGalleryS>
  );
};