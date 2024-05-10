"use client";
import cn from "classnames";
import Image from "next/image";

export enum ImgVariant {
  ICON = "icon",
  STATIC_IMAGE = "image",
}

const Img = ({ src, type = ImgVariant.STATIC_IMAGE, width, height, size = 20, color, className = "", alt = "", fill = false }: ImgProps) => {
  let Component;
  if (type === ImgVariant.STATIC_IMAGE) {
    Component = <Image src={src} width={width || size} height={height || size} alt={alt} />;
  }

  if (type === ImgVariant.ICON) {
    Component = src;
  }

  const renderedComponent = type === ImgVariant.STATIC_IMAGE ? Component : <Component size={size} color={color} title={alt} />;

  return <div className={cn(`!h-[${size}] !w-[${size}px]`, className)}>{renderedComponent}</div>;
};

export default Img;
