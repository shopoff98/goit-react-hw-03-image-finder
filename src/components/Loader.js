import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Div } from './styled/ImageGallery.styled';

const LoaderSpinner = () => {
  return (
    <Div>
      <Loader type="Circles" color="#00BFFF" height={150} width={150} />
    </Div>
  );
};

export default LoaderSpinner;
