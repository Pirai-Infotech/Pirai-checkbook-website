// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var headData = {
  name: "header",
  label: "Header Text",
  type: "object",
  fields: [
    {
      name: "image",
      label: "CheckBook Image",
      type: "image"
    },
    {
      name: "label1",
      label: "1.Label",
      type: "string"
    },
    {
      name: "label2",
      label: "2.Label",
      type: "string"
    },
    {
      name: "label3",
      label: "3.Label",
      type: "string"
    },
    {
      name: "label4",
      label: "4.Label",
      type: "string"
    },
    {
      name: "label5",
      label: "5.Label",
      type: "string"
    },
    {
      name: "label6",
      label: "6.Label",
      type: "string"
    },
    {
      name: "label7",
      label: "7.Label",
      type: "string"
    },
    {
      name: "button",
      label: "Button",
      type: "string"
    }
  ]
};
var heroText = {
  name: "heroText",
  label: "Hero Text",
  type: "object",
  fields: [
    {
      name: "bannerTitle",
      label: "Banner Title",
      type: "string"
    },
    {
      name: "bannerSpanTitle",
      label: "Banner Span Title",
      type: "string"
    },
    {
      name: "bannerContent",
      label: "Banner Content",
      type: "string"
    }
  ]
};
var config_default = defineConfig({
  clientId: process.env.TINA_CLIENT_ID || "",
  branch: process.env.GITHUB_BRANCH || "",
  token: process.env.TINA_TOKEN || "",
  // repo: "krishnan-jaga/Pirai-checkbook-website",
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema: {
    collections: [
      {
        name: "about",
        label: "About Us",
        path: "content/about",
        format: "json",
        fields: [
          headData,
          heroText,
          {
            name: "displayinsights",
            label: "Display Insights",
            type: "object",
            fields: [
              {
                name: "Headingone",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "Headingtwo",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "insight",
                label: "Heading 3",
                type: "string"
              }
            ]
          }
        ]
      },
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        format: "json",
        ui: {
          router: (props) => {
            return "/";
          }
        },
        fields: [
          headData,
          {
            name: "heroText",
            label: "Hero Text",
            type: "object",
            fields: [
              {
                name: "bannerTitle",
                label: "Banner Title",
                type: "string"
              },
              {
                name: "bannerSpanTitle",
                label: "Banner Span Title",
                type: "string"
              },
              {
                name: "bannerContent",
                label: "Banner Content",
                type: "string"
              },
              {
                name: "bannerButtonText1",
                label: "Button Text I",
                type: "string"
              },
              {
                name: "bannerButtonText2",
                label: "Button Text II",
                type: "string"
              },
              {
                name: "bannerImage",
                label: "Banner Image",
                type: "image"
              }
            ]
          },
          {
            name: "horizhover",
            label: "Section Two",
            type: "object",
            fields: [
              {
                name: "title",
                label: "1.Heading",
                type: "string"
              },
              {
                name: "content",
                label: "1.Content",
                type: "string"
              },
              {
                name: "image1",
                label: "2.Image",
                type: "image"
              },
              {
                name: "title1",
                label: "2.Heading",
                type: "string"
              },
              {
                name: "content1",
                label: "2.Content",
                type: "string"
              },
              {
                name: "image2",
                label: "3.Image",
                type: "image"
              },
              {
                name: "title2",
                label: "3.Heading",
                type: "string"
              },
              {
                name: "content2",
                label: "3.Content",
                type: "string"
              }
            ]
          },
          {
            name: "sectionThree",
            label: "Section Three",
            type: "object",
            fields: [
              {
                name: "digital",
                label: "Heading ",
                type: "string"
              },
              {
                name: "digitalspan",
                label: "Heading Span",
                type: "string"
              },
              {
                name: "digitalcontent",
                label: "Content Info",
                type: "string"
              },
              {
                name: "title1",
                label: "1.Heading",
                type: "string"
              },
              {
                name: "content1",
                label: "1.Content",
                type: "string"
              },
              {
                name: "title2",
                label: "2.Heading",
                type: "string"
              },
              {
                name: "content2",
                label: "2.Content",
                type: "string"
              },
              {
                name: "image",
                label: "Image",
                type: "image"
              }
            ]
          },
          {
            name: "displayinsights",
            label: "Display Insights",
            type: "object",
            fields: [
              {
                name: "Headingone",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "Headingtwo",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "insight",
                label: "Heading 3",
                type: "string"
              }
            ]
          }
        ]
      },
      {
        name: "realtime",
        label: "RealTime Payments",
        path: "content/realtime",
        format: "json",
        fields: [
          headData,
          {
            name: "heroText",
            label: "Hero Text",
            type: "object",
            fields: [
              {
                name: "bannerTitle",
                label: "Banner Title",
                type: "string"
              },
              {
                name: "bannerSpanTitle",
                label: "Banner Span Title",
                type: "string"
              },
              {
                name: "bannerContent",
                label: "Banner Content",
                type: "string"
              },
              {
                name: "bannerButtonText1",
                label: "Button Text I",
                type: "string"
              },
              {
                name: "bannerButtonText2",
                label: "Button Text II",
                type: "string"
              },
              {
                name: "bannerImage",
                label: "Banner Image",
                type: "image"
              }
            ]
          },
          {
            name: "horizhover",
            label: "Section Two",
            type: "object",
            fields: [
              {
                name: "title",
                label: "1.Heading",
                type: "string"
              },
              {
                name: "content",
                label: "1.Content",
                type: "string"
              },
              {
                name: "image1",
                label: "2.Image",
                type: "image"
              },
              {
                name: "title1",
                label: "2.Heading",
                type: "string"
              },
              {
                name: "content1",
                label: "2.Content",
                type: "string"
              },
              {
                name: "image2",
                label: "3.Image",
                type: "image"
              },
              {
                name: "title2",
                label: "3.Heading",
                type: "string"
              },
              {
                name: "content2",
                label: "3.Content",
                type: "string"
              }
            ]
          },
          {
            name: "sectionThree",
            label: "Section Three",
            type: "object",
            fields: [
              {
                name: "digital",
                label: "Heading ",
                type: "string"
              },
              {
                name: "digitalspan",
                label: "Heading Span",
                type: "string"
              },
              {
                name: "digitalcontent",
                label: "Content Info",
                type: "string"
              },
              {
                name: "title1",
                label: "1.Heading",
                type: "string"
              },
              {
                name: "content1",
                label: "1.Content",
                type: "string"
              },
              {
                name: "title2",
                label: "2.Heading",
                type: "string"
              },
              {
                name: "content2",
                label: "2.Content",
                type: "string"
              },
              {
                name: "image",
                label: "Image",
                type: "image"
              }
            ]
          },
          {
            name: "displayinsights",
            label: "Display Insights",
            type: "object",
            fields: [
              {
                name: "Headingone",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "Headingtwo",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "insight",
                label: "Heading 3",
                type: "string"
              }
            ]
          },
          {
            name: "rgs",
            label: "Ready to GetStart",
            type: "object",
            fields: [
              {
                name: "readyheading",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "spanheading",
                label: "Span",
                type: "string"
              },
              {
                name: "readycontent",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "bannerButtonText1",
                label: "Button Text I",
                type: "string"
              },
              {
                name: "bannerButtonText2",
                label: "Button Text II",
                type: "string"
              }
            ]
          },
          {
            name: "rgstwo",
            label: "Ready to GetStart2",
            type: "object",
            fields: [
              {
                name: "readyheadingtwo",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "readycontenttwo",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "bannerButtonText3",
                label: "Button Text I",
                type: "string"
              },
              {
                name: "readytwoimage",
                label: "Image",
                type: "image"
              }
            ]
          },
          {
            name: "rgsthree",
            label: "Ready to GetStart3",
            type: "object",
            fields: [
              {
                name: "readyheadingthree",
                label: "Heading 1",
                type: "string"
              },
              {
                name: "readycontentthree",
                label: "Heading 2 ",
                type: "string"
              },
              {
                name: "apibuttons",
                label: "Button Text I",
                type: "string"
              },
              {
                name: "readythreeimage",
                label: "Image",
                type: "image"
              }
            ]
          },
          {
            name: "faq",
            label: "FAQ",
            type: "object",
            fields: [
              {
                name: "faqheading",
                label: "Heading",
                type: "string"
              },
              {
                name: "questions",
                label: "Questions",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "question",
                    label: "Question",
                    type: "string"
                  },
                  {
                    name: "answer",
                    label: "Answer",
                    type: "string"
                  },
                  {
                    name: "ctatext",
                    label: "Cta Text",
                    type: "string"
                  },
                  {
                    name: "ctalink",
                    label: "Cta Link",
                    type: "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            name: "banner",
            label: "Banner Text",
            type: "object",
            fields: [
              {
                name: "bannerTitle",
                label: "Banner Title",
                type: "string"
              },
              {
                name: "bannerSpanTitle",
                label: "Banner Span Title",
                type: "string"
              },
              {
                name: "bannerSubTitle",
                label: "Banner SubTitle",
                type: "string"
              },
              {
                name: "bannerButtonText",
                label: "Banner Button Text",
                type: "string"
              }
            ]
          },
          {
            name: "sectionOne",
            label: "sectionOne Text",
            type: "object",
            fields: [
              {
                name: "sectionOneText",
                label: "Section One Text",
                type: "string"
              },
              {
                name: "sectionOneImage",
                label: "Section One Image",
                type: "image"
              }
            ]
          },
          {
            name: "sectionTwo",
            label: "sectionTwo Text",
            type: "object",
            fields: [
              {
                name: "TableHead1",
                label: "1.Heading",
                type: "string"
              },
              {
                name: "TableHead2",
                label: "2.Heading",
                type: "string"
              },
              {
                name: "TableHead3",
                label: "3.Heading",
                type: "string"
              },
              {
                name: "TableHead4",
                label: "4.Heading",
                type: "string"
              },
              {
                name: "TableBody1",
                label: "1.Body",
                type: "string"
              },
              {
                name: "TableBody2",
                label: "2.Body",
                type: "string"
              },
              {
                name: "TableBody3",
                label: "3.Body",
                type: "string"
              },
              {
                name: "TableBody4",
                label: "4.Body",
                type: "string"
              },
              {
                name: "TableImage1",
                label: "1.Image",
                type: "image"
              },
              {
                name: "TableImage2",
                label: "2.Image",
                type: "image"
              },
              {
                name: "TableImage3",
                label: "3.Image",
                type: "image"
              },
              {
                name: "TableImage4",
                label: "4.Image",
                type: "image"
              },
              {
                name: "TableImageAlt",
                label: "Alternative Table Image",
                type: "string"
              }
            ]
          },
          {
            name: "sectionThreeText",
            label: "Section Three Text",
            type: "object",
            fields: [
              {
                name: "Heading",
                label: "Heading",
                type: "string"
              },
              {
                name: "Content",
                label: "Content",
                type: "string"
              },
              {
                name: "Button",
                label: "Button",
                type: "string"
              }
            ]
          },
          {
            name: "sectionFourText",
            label: "Section four Text",
            type: "object",
            fields: [
              {
                name: "HeadingI",
                label: "Heading I",
                type: "string"
              },
              {
                name: "HeadingII",
                label: "Heading II",
                type: "string"
              },
              {
                name: "HeadingIII",
                label: "Heading III",
                type: "string"
              },
              {
                name: "ImageTopText",
                label: "Image Top Text",
                type: "string"
              },
              {
                name: "Image",
                label: "Image",
                type: "image"
              },
              {
                name: "HoverList",
                label: "Hover List",
                type: "object",
                fields: [
                  {
                    name: "Heading1",
                    label: "1.Heading",
                    type: "string"
                  },
                  {
                    name: "Content1",
                    label: "1.Content",
                    type: "string"
                  },
                  {
                    name: "Heading2",
                    label: "2.Heading",
                    type: "string"
                  },
                  {
                    name: "Content2",
                    label: "2.Content",
                    type: "string"
                  },
                  {
                    name: "Heading3",
                    label: "3.Heading",
                    type: "string"
                  },
                  {
                    name: "Content3",
                    label: "3.Content",
                    type: "string"
                  }
                ]
              }
            ]
          }
        ]
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
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
        // ui: {
        //   // This is an DEMO router. You can remove this to fit your site
        //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        // },
        // ui: {
        //   // Eg. If you're deplying to Vercel, and your repo name is 'my-app', Vercel's preview URL would be based on the branch:
        //   previewUrl: (context) => {
        //     const repoName = 'my-app'
        //     // `https://<project-name>-git-<branch-name>.vercel.app`
        //     return { url: `https://my-app-git-${context.branch}` }
        //   },
        // },
      }
    ]
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
      static: false
    },
    accept: ["image/jpeg", "video/mp4"]
  }
});
export {
  config_default as default
};
