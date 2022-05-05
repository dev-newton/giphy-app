import { useEffect, useState } from "react";

type OptionTypes = {
  root: any;
  rootMargin: string;
  threshold: number;
};
const useObserver = (element: any, options: OptionTypes): Boolean => {
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = (entities: any) => {
    const [entity] = entities;
    setIsVisible(entity.isIntersecting);
  };

  useEffect(() => {
    // initialize IntersectionObserver and attaching to Load More div
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(handleObserver, options);
    if (element.current) {
      observer.observe(element.current);
      observerRefValue = element.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [element, options]);

  return isVisible;
};

export default useObserver;
