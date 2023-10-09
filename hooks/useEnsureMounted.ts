import { useEffect, useState } from 'react';

const useEnsureMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return { mounted };
};

export default useEnsureMounted;
