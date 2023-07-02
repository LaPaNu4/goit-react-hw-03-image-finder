import { ButtonS } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonS className="Button" onClick={onLoadMore}>
      Load more
    </ButtonS>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};