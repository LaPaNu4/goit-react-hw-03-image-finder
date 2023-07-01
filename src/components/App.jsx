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
    return (
      <AppS>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.images} onItemClick={this.openModal} />
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.loading && <Loader />}
        {this.state.modalOpen && (
          <Modal
            image={this.state.selectedImage}
            onClose={this.closeModal}
            onKeyDown={this.handleKeyDown}
          />
        )}
      </AppS>
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const images = await fetchPost(this.state.imageName, this.state.page);

        const updatedImages = [...this.state.images, ...images.hits];
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
//   if (this.state.imageName) {
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
