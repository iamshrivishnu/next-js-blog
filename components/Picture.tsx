import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import { urlFor } from "lib/sanity-helper";
import { getImageDimensions } from '@sanity/asset-utils'

interface PictureProps {
    src: string;
    alt: string;
}

function customLoader({ src, width, quality }: ImageLoaderProps): string {
    return urlFor(JSON.parse(src)).width(width).quality(quality).auto('format').url();
}

function Picture({ src, alt }: PictureProps) {
    const { width, height } = getImageDimensions(src)
    return (<Image
        loader={customLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
    />)
}

export default Picture;
