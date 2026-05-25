import { useRef, useEffect } from "react";

export default function LazyVideo({ src, className, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Remove autoPlay — IntersectionObserver controls playback
  const { autoPlay: _autoPlay, ...rest } = props;

  return <video ref={ref} src={src} className={className} {...rest} />;
}
