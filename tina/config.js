import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            name: "bannerTitle",
            label: "Banner Title",
            type: "string",
          },
          {
            name: "bannerSpanTitle",
            label: "Banner Span Title",
            type: "string",
          },
          {
            name: "bannerSubTitle",
            label: "Banner SubTitle",
            type: "string",
          },
          {
            name: "bannerButtonText",
            label: "Banner Button Text",
            type: "string",
          },
          {
            name: "sectionOneText",
            label: "Section One Text",
            type: "string",
          },
          {
            name: "sectionOneImage",
            label: "Section One Image",
            type: "image",
          },
          {
            name: "horizhoverhmHeadText",
            label: "Table Heading Text",
            type: "object",
            fields: [
              {
                name: "TableHead1",
                label: "1.Heading",
                type: "string",
              },
              {
                name: "TableHead2",
                label: "2.Heading",
                type: "string",
              },
              {
                name: "TableHead3",
                label: "3.Heading",
                type: "string",
              },
              {
                name: "TableHead4",
                label: "4.Heading",
                type: "string",
              },
            ],
          },
          {
            name: "horizhoverhmBodyText",
            label: "Table Body Text",
            type: "object",
            fields: [
              {
                name: "TableBody1",
                label: "1.Body",
                type: "string",
              },
              {
                name: "TableBody2",
                label: "2.Body",
                type: "string",
              },
              {
                name: "TableBody3",
                label: "3.Body",
                type: "string",
              },
              {
                name: "TableBody4",
                label: "4.Body",
                type: "string",
              },
            ],
          },
          {
            name: "horizhoverhmImage",
            label: "Table Image",
            type: "object",
            fields: [
              {
                name: "TableImage1",
                label: "1.Image",
                type: "image",
              },
              {
                name: "TableImage2",
                label: "2.Image",
                type: "image",
              },
              {
                name: "TableImage3",
                label: "3.Image",
                type: "image",
              },
              {
                name: "TableImage4",
                label: "4.Image",
                type: "image",
              },
              {
                name: "TableImageAlt",
                label: "Alternative Table Image",
                type: "string",
              },
            ],
          },
          {
            name: "sectionThreeText",
            label: "Section Three Text",
            type: "object",
            fields: [
              {
                name: "Heading",
                label: "Heading",
                type: "string",
              },
              {
                name: "Content",
                label: "Content",
                type: "string",
              },
              {
                name: "Button",
                label: "Button",
                type: "string",
              }
            ],
          },
          {
            name: "sectionFourText",
            label: "Section four Text",
            type: "object",
            fields: [
              {
                name: "HeadingI",
                label: "Heading I",
                type: "string",
              },
              {
                name: "HeadingII",
                label: "Heading II",
                type: "string",
              },
              {
                name: "HeadingIII",
                label: "Heading III",
                type: "string",
              },
              {
                name: "ImageTopText",
                label: "Image Top Text",
                type: "string",
              },
              {
                name: "Image",
                label: "Image",
                type: "image",
              },
              {
                name: "HoverList",
                label: "Hover List",
                type: "object",
                fields: [
                  {
                    name: "Heading1",
                    label: "1.Heading",
                    type: "string",
                  },
                  {
                    name: "Content1",
                    label: "1.Content",
                    type: "string",
                  },
                  {
                    name: "Heading2",
                    label: "2.Heading",
                    type: "string",
                  },
                  {
                    name: "Content2",
                    label: "2.Content",
                    type: "string",
                  },
                  {
                    name: "Heading3",
                    label: "3.Heading",
                    type: "string",
                  },
                  {
                    name: "Content3",
                    label: "3.Content",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
