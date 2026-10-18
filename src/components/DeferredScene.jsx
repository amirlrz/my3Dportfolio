import { useEffect, useRef, useState } from "react";

// Reserve the layout while keeping WebGL and its downloads off the initial path.
export default function DeferredScene({ children, className }) {
  const container = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "250px" });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={container} className={className}>{ready ? children : null}</div>;
}
