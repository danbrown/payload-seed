import { buildConfig } from "payload/config";
import path from "path";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Nodes from "./collections/Nodes";
import Surveys from "./collections/Surveys";

export default buildConfig({
  serverURL: `http://localhost:${process.env.PORT || 3000}`,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: `- ${process.env.PAYLOAD_CMS_PREFIX}`,
      favicon: "/public/rocks.png",
      ogImage: "/public/rocks.png",
    },
  },
  collections: [Categories, Posts, Tags, Users, Media, Nodes, Surveys],

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
