import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET, 
  useCdn: true,
  apiVersion: "2021-09-18"
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
