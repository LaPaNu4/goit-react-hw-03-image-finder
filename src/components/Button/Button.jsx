import { ButtonS } from "./Button.styled";

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonS className="Button" onClick={onLoadMore}>
      Load more
    </ButtonS>
  );
};