import { Spinner } from '../components/Spinner';
import { useAbout } from '../hooks/useAbout';
import { AboutComponent } from '../pages/About';

export function AboutLayout() {
  const { status, data } = useAbout();

  return status === 'loading' ? (
    <Spinner
      show={true}
      wait={`delay-${10}`}
    />
  ) : (
    <AboutComponent data={data!} />
  );
}
