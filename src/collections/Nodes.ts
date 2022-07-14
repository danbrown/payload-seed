import { CollectionConfig } from "payload/types";

const nodeTypes = [
  {
    label: "Start",
    value: "start",
  },
  {
    label: "If",
    value: "if",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "End",
    value: "end",
  },
];

const colorOptions = [
  {
    label: "Basic",
    value: "basic",
  },
  {
    label: "Primary",
    value: "primary",
  },
  {
    label: "Secondary",
    value: "secondary",
  },
  {
    label: "Success",
    value: "success",
  },
  {
    label: "Danger",
    value: "danger",
  },
  {
    label: "Warning",
    value: "warning",
  },
  {
    label: "Info",
    value: "info",
  },
];

const Nodes: CollectionConfig = {
  slug: "nodes",
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
      required: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "action",
      options: [...nodeTypes],
    },
    {
      name: "color",
      type: "select",
      defaultValue: "basic",
      options: [...colorOptions],
      required: true,
    },
    {
      name: "connectedTo",
      type: "array",
      minRows: 0,
      fields: [
        {
          name: "node",
          type: "relationship",
          relationTo: "nodes",
          required: true,
        },
        {
          name: "buttonLabel",
          type: "text",
          required: true,
        },
        {
          name: "buttonColor",
          type: "select",
          defaultValue: "primary",
          options: [...colorOptions],
          required: true,
        },
      ],
    },
  ],
};

export default Nodes;
