import Loader from '../../UI/loader/Loader.component';
import { ImageProps } from '../../shared/interfaces';
import { useInView } from 'react-intersection-observer';

const Image = (props: ImageProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return <div ref={ref}>{inView ? <img {...props} /> : <Loader />}</div>;
};

export default Image;
