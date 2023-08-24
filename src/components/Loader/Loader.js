import { ThreeDots } from 'react-loader-spinner';
import { LoaderIcon } from './Loader.styled';

export const Loader = () => {
  return (
    <div>
      <LoaderIcon>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#383838"
          fill="#383838"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderIcon>
    </div>
  );
};
