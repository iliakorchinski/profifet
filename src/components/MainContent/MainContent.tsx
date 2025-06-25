import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import LandingPage from '../LandingPage/LandingPage';

export default function MainContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return <LandingPage />;
}
