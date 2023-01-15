import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import { getImageDimensions } from '@sanity/asset-utils'
import { getImageObject } from "lib/sanity-helper";

interface PictureProps {
    src: string;
    alt: string;
    className?: string;
}

function customLoader({ src, width, quality }: ImageLoaderProps): string {
    return  getImageObject(JSON.parse(src)).width(width).quality(quality).auto('format').url();
}

function Picture({ src, alt, className }: PictureProps) {
    const { width, height } = getImageDimensions(src)
    return (<Image
        className={className}
        loader={customLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
    />)
}

export default Picture;
