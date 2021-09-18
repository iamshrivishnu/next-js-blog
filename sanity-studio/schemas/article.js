const articleSchema = {
    name: "article",
    title: "Article",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Article Title",
        type: "string",
        validation: (Rule) => [Rule.required().error('Title cannot be empty')]
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 255,
        },
        validation: (Rule) => [Rule.required().error('Slug cannot be empty')]
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: { type: "author" },
      },
      {
        name: "bannerImage",
        title: "Banner Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "body",
        title: "Article Body",
        type: "array",
        of: [{ type: "block" }],
        validation: (Rule) => [Rule.required().error('Body cannot be empty')]
      },
    ]
  };
  
  export default articleSchema