import { createClient } from "next-sanity";

export const config = {
  projectId: process.env.SANITY_PROJECT_ID ||'',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-25",
};

export const client = createClient(config);