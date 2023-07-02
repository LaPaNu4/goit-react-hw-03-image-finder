import { AppS } from './App.styled';
import React from 'react';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import { fetchPost } from 'services/api';

export class App extends React.Component {
  state = {
    imageName: '',
    loading: false,
    images: [],
    totalImages: 0,
    page: 1,
    modalOpen: false,
    error: null,
    selectedImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {images, imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        if (images.length === 0) {
          this.setState({ loading: true });
        }
        
        const data = await fetchPost(imageName, page);
        this.setState({
          images: [...images, ...data.hits],
          totalImages : data.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = imageName => {
    this.setState({ imageName, page: 1, images: [] , totalImages: 0});
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  openModal = selectedImage => {
    this.setState({ modalOpen: true, selectedImage });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImage: null });
  };
 

  render() {
    const { images, loading, modalOpen, selectedImage , totalImages } = this.state;
      const showButton = images.length + 1 < totalImages;
    return (
      <AppS>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery data={images} onItemClick={this.openModal} />
        {images.length > 0 && showButton && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {loading && <Loader />}
        {modalOpen && (
          <Modal
            image={selectedImage}
            onClose={this.closeModal}
            onKeyDown={this.handleKeyDown}
          />
        )}
      </AppS>
    );
  }
}
