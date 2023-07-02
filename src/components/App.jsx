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
    page: 1,
    modalOpen: false,
    error: null,
    selectedImage: null,
  };

  onSubmit = imageName => {
    this.setState({ imageName, page: 1, images: [] });
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
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { images, loading, modalOpen, selectedImage } = this.state;
    return (
      <AppS>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery data={images} onItemClick={this.openModal} />
        {images.length > 0 && (
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

  async componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    if (
      prevState.imageName !== imageName ||
      prevState.page !== page
    ) {
      try {
        this.setState({ loading: true });
        const images = await fetchPost(imageName, page);

        const updatedImages = [...images, ...images.hits];
        this.setState({ images: updatedImages, loading: false });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
}

// async componentDidMount() {
//   if (this.stateimageName) {
//     try {
//       console.log('mount');
//       this.setState({ loading: true });
//       const images = await fetchPost(this.state.imageName, this.state.page);

//       this.setState({ images: images.hits, loading: false });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
// }
