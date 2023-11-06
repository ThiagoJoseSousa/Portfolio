import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}