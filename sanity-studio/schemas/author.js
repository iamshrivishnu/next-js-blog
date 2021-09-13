const authorSchema = {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => [Rule.required().error('Name cannot be empty')]
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 255,
        },
        validation: (Rule) => [Rule.required().error('Slug cannot be empty')]
      },
      {
        name: "authorImage",
        title: "Author Image",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (Rule) => [Rule.required().error('Image cannot be empty')]
      },
      {
        name: "details",
        title: "Details",
        type: "array",
        of: [{ type: "block" }],
        validation: (Rule) => [Rule.required().error('Details cannot be empty')]
      }
    ]
  };
  
  export default authorSchema