import { CollectionConfig } from "payload/types";

const CustomID: CollectionConfig = {
  slug: "custom-id",
  labels: {
    singular: "CustomID",
    plural: "CustomIDs",
  },
  fields: [
    {
      name: "id",
      type: "number",
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default CustomID;
