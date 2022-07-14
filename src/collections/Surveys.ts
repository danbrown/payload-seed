import { CollectionConfig } from "payload/types";

const Surveys: CollectionConfig = {
  slug: "surveys",
  admin: {
    defaultColumns: ["title"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "nodes",
      type: "relationship",
      relationTo: "nodes",
    },
  ],
};

export default Surveys;
