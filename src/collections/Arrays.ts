import { CollectionConfig } from "payload/types";

const Arrays: CollectionConfig = {
  slug: "arrays",
  fields: [
    {
      name: "array",
      type: "array",
      fields: [
        {
          type: "text",
          name: "required",
          required: true,
        },
        {
          type: "text",
          name: "optional",
        },
      ],
    },
  ],
};

export default Arrays;
