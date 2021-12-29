import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import LoaderSpinner from './Loader';
import ModalWindow from './ModalWindow';
import { GalleryList } from './styled/ImageGallery.styled';
import fetchApi from '../service/fetch';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    status: 'idle',
    image: [],
    page: 1,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState(prevState => {
        return {
          status: 'pending',
          image: [],
          page: 1,
        };
      });

      fetchApi(nextName, 1).then(data =>
        this.setState(prevState => {
          return {
            image: data.hits,
            status: 'resolved',
            page: prevState.page + 1,
          };
        }),
      );
    }
  }

  toggleModal = imageUrl => {
    this.setState({ largeImage: imageUrl });
  };

  handleLoadMore = e => {
    const nextName = this.props.imageName;
    const page = this.state.page;

    fetchApi(nextName, page)
      .then(data =>
        this.setState(prevState => {
          return {
            page: prevState.page + 1,
            image: [...prevState.image, ...data.hits],
            status: 'resolved',
          };
        }),
      )
      .finally(this.handleScroll());
  };

  handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  render() {
    const { status, image, largeImage } = this.state;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return <LoaderSpinner />;
    }

    if (status === 'resolved') {
      return (
        <>
          <GalleryList>
            {largeImage && (
              <ModalWindow onClose={this.toggleModal} imageUrl={largeImage} />
            )}
            <ImageGalleryItem onClick={this.toggleModal} data={image} />
          </GalleryList>
          {this.state.image.length >= 12 && (
            <Button onClick={this.handleLoadMore} />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImageGallery;
