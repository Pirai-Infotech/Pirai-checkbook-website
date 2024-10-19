import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "f6616cb5885efc73c16471d3a9a642c0a2f8ca68", queries });
export default client;
