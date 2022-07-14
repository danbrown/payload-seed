import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import { Payload } from "payload";

export type PayloadRequest = Request & {
  payload: Payload;
  locale?: string;
  fallbackLocale?: string;
  collection?: any;
  payloadAPI: "REST" | "local" | "graphQL";
  files?: {
    file: UploadedFile;
  };
  user: any | null;
  payloadUploadSizes?: Record<string, Buffer>;
  findByID?: {
    [slug: string]: (q: unknown) => Document;
  };
};
