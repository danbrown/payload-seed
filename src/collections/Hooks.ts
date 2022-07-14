/* eslint-disable no-param-reassign, no-console */
import {
  CollectionConfig,
  CollectionAfterDeleteHook,
  CollectionAfterReadHook,
  CollectionBeforeChangeHook,
  CollectionBeforeReadHook,
  CollectionBeforeDeleteHook,
  CollectionAfterChangeHook,
} from "payload/types";
import { FieldHook } from "payload/types";
import { Hook } from "../payload.types";

const Hooks: CollectionConfig = {
  slug: "hooks",
  labels: {
    singular: "Hook",
    plural: "Hooks",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  hooks: {
    beforeRead: [
      ((operation) => {
        if (operation.req.headers.hook === "beforeRead") {
          console.log("before reading Hooks document");
        }
      }) as CollectionBeforeReadHook<Hook>,
    ],
    beforeChange: [
      ((operation) => {
        if (operation.req.headers.hook === "beforeChange") {
          operation.data.description += "-beforeChangeSuffix";
        }
        return operation.data;
      }) as CollectionBeforeChangeHook<Hook>,
    ],
    beforeDelete: [
      ((operation) => {
        if (operation.req.headers.hook === "beforeDelete") {
          // TODO: Find a better hook operation to assert against in tests
          operation.req.headers.hook = "afterDelete";
        }
      }) as CollectionBeforeDeleteHook,
    ],
    afterRead: [
      ((operation) => {
        const { doc, findMany } = operation;
        doc.afterReadHook = true;
        doc.findMany = findMany;

        return doc;
      }) as CollectionAfterReadHook<
        Hook & { afterReadHook: boolean; findMany: boolean }
      >,
    ],
    afterChange: [
      ((operation) => {
        if (operation.req.headers.hook === "afterChange") {
          operation.doc.afterChangeHook = true;
        }
        return operation.doc;
      }) as CollectionAfterChangeHook<Hook & { afterChangeHook: boolean }>,
    ],
    afterDelete: [
      ((operation) => {
        if (operation.req.headers.hook === "afterDelete") {
          operation.doc.afterDeleteHook = true;
        }
        return operation.doc;
      }) as CollectionAfterDeleteHook,
    ],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      maxLength: 100,
      required: true,
      unique: true,
      localized: true,
      hooks: {
        afterRead: [
          ({ value }) =>
            (value ? value.toUpperCase() : null) as FieldHook<Hook, "title">,
        ],
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      localized: true,
    },
  ],
  timestamps: true,
};

export default Hooks;
