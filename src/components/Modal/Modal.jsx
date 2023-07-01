import React from 'react';
import { ModalS } from './Modal.styled';

export class Modal extends React.PureComponent {
  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalS onClick={this.handleOverlayClick}>
        <div className="Modal" onKeyDown={this.props.onKeyDown}>
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tags}
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
