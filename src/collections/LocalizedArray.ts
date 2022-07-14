import { CollectionConfig } from "payload/types";
import { FieldAccess } from "payload/types";
import checkRole from "../access/checkRole";

const PublicReadabilityAccess: FieldAccess = ({
  req: { user },
  siblingData,
}) => {
  if (checkRole(["admin"], user)) {
    return true;
  }

  if (siblingData?.allowPublicReadability) return true;

  return false;
};

const LocalizedArrays: CollectionConfig = {
  slug: "localized-arrays",
  labels: {
    singular: "Localized Array",
    plural: "Localized Arrays",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "array",
      label: false,
      name: "array",
      localized: true,
      required: true,
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "allowPublicReadability",
              label: "Allow Public Readability",
              type: "checkbox",
            },
            {
              name: "arrayText1",
              label: "Array Text 1",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
              access: {
                read: PublicReadabilityAccess,
              },
            },
            {
              name: "arrayText2",
              label: "Array Text 2",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "text",
          name: "arrayText3",
          label: "Array Text 3",
          admin: {
            readOnly: true,
          },
        },
      ],
    },
  ],
  timestamps: true,
};

export default LocalizedArrays;
