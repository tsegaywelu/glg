import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  link: string;
  width?: number;
  height?: number;
  className?: string;
}
const ImageCard = ({ src, alt, link, width, height, className }: Props) => {
  return (
    <div className="inline-block">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default ImageCard;
