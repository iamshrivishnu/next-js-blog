import createImageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "./get-article";
import { config } from "./sanity-client";

export function urlFor(source: SanityImage){
    return createImageUrlBuilder(config).image(source)
};