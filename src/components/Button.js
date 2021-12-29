import { ButtonLoadMore } from './styled/ImageGallery.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
