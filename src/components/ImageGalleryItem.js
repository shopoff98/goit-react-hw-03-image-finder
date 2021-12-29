import { Image, ListImage } from './styled/ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ListImage key={id} onClick={() => onClick(largeImageURL)}>
            <Image src={webformatURL} alt="" />
          </ListImage>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
