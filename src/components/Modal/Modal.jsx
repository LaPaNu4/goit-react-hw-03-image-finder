import React from 'react';
import { ModalS } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <ModalS onClick={this.handleOverlayClick}>
        <div className="Modal" onKeyDown={this.props.onKeyDown}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </ModalS>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}