import { useState, useEffect } from "react";

export default function useMedia(query: string) {
  const [match, setMatch] = useState<boolean>(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== match) {
      setMatch(media.matches);
    }
    const listener = () => setMatch(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [match, query]);
  return match;
}
