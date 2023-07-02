import React from 'react';
import { ModalS } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends React.PureComponent {
  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };


  render() {
      const { image } = this.props;
    return (
      <ModalS onClick={this.handleOverlayClick}>
        <div className="Modal" onKeyDown={this.props.onKeyDown}>
          <img
            src={image.largeImageURL}
            alt={image.tags}
          />
        </div>
      </ModalS>
    );
  }
  componentDidMount() {
    window.addEventListener('keydown', this.props.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onKeyDown);
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired
}