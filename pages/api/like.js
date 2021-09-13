import { sanityClient } from "lib/sanity";

sanityClient.config({
  token: process.env.SANITY_WRITE_TOKEN,
});

const likeHandler = async (req, res) => {
  const { _id } = JSON.parse(req.body);
  try {
    const data = await sanityClient
      .patch(_id)
      .setIfMissing({ likes: 0 })
      .inc({ likes: 1 })
      .commit();
    res.status(200).json({ data: data.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

export default likeHandler;
