import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#d51e1e"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

<Watch
  height="80"
  width="80"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>;
