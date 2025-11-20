import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImgZoom({ src , alt }: { src: string , alt: string }) {
  return (
    <Zoom >
      <img src={src} className="w-full object-cover hover:cursor-pointer" alt={alt} />
    </Zoom>
  );
}
