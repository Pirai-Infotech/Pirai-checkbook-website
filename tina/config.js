import { list } from "postcss";
import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

  const headData = {
    name: "header",
    label: "Header Text",
    type: "object",
    fields: [
  {
    name: "image",
    label: "CheckBook Image",
    type: "image",
  },
  {
    name: "label1",
    label: "1.Label",
    type: "string",
  },
  {
    name: "label2",
    label: "2.Label",
    type: "string",
  },
  {
    name: "label3",
    label: "3.Label",
    type: "string",
  },
  {
    name: "label4",
    label: "4.Label",
    type: "string",
  },
  {
    name: "label5",
    label: "5.Label",
    type: "string",
  },
  {
    name: "label6",
    label: "6.Label",
    type: "string",
  },
  {
    name: "label7",
    label: "7.Label",
    type: "string",
  },
  {
    name: "button",
    label: "Button",
    type: "string",
  },
]
  }

  const heroText = {
      name: "heroText",
      label: "Hero Text",
      type: "object",
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
            name: "bannerContent",
            label: "Banner Content",
            type: "string",
          }
        ]
  }

  const AchRelated = [
    headData,
      {
        name: "heroText",
        label: "Hero Text",
        type: "object",
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
        name: "bannerContent",
        label: "Banner Content",
        type: "string",
      },
      {
        name: "bannerButtonText1",
        label: "Button Text I",
        type: "string",
      },
      {
        name: "bannerButtonText2",
        label: "Button Text II",
        type: "string",
      },
      {
        name: "bannerImage",
        label: "Banner Image",
        type: "image",
      },
   
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
            type: "string",
          },
          {
            name: "content",
            label: "1.Content",
            type: "string",
          },
          {
            name: "image1",
            label: "2.Image",
            type: "image",
          },
          {
            name: "title1",
            label: "2.Heading",
            type: "string",
          },
          {
            name: "content1",
            label: "2.Content",
            type: "string",
          },
          {
            name: "image2",
            label: "3.Image",
            type: "image",
          },
          {
            name: "title2",
            label: "3.Heading",
            type: "string",
          },
          {
            name: "content2",
            label: "3.Content",
            type: "string",
          },
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
            type: "string",
          },
          {
            name: "digitalspan",
            label: "Heading Span",
            type: "string",
          },
          {
            name: "digitalcontent",
            label: "Content Info",
            type: "string",
          },
          {
            name: "title1",
            label: "1.Heading",
            type: "string",
          },
          {
            name: "content1",
            label: "1.Content",
            type: "string",
          },
          {
            name: "title2",
            label: "2.Heading",
            type: "string",
          },
          {
            name: "content2",
            label: "2.Content",
            type: "string",
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
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
            type: "string",
          },
          {
            name: "Headingtwo",
            label: "Heading 2 ",
            type: "string",
          },
          {
            name: "insight",
            label: "Heading 3",
            type: "string",
          }     
        ]
      }, 
      {
        name: "discover",
        label: "Discover Insights",
        type: "object",
        fields: [
          {
            name: "image1",
            label: "1.Image",
            type: "image",
          },
          {
            name: "date1",
            label: "1.Date",
            type: "datetime",
          },
          {
            name: "content1",
            label: "1.Content",
            type: "string",
          },
          {
            name: "btn1",
            label: "1.Batton",
            type: "string",
          },
          {
            name: "image2",
            label: "2.Image",
            type: "image",
          },
          {
            name: "date2",
            label: "2.Date",
            type: "datetime",
          },
          {
            name: "content2",
            label: "2.Content",
            type: "string",
          },
          {
            name: "btn2",
            label: "2.Batton",
            type: "string",
          },
          {
            name: "image3",
            label: "3.Image",
            type: "image",
          },
          {
            name: "date3",
            label: "3.Date",
            type: "datetime",
          },
          {
            name: "content3",
            label: "3.Content",
            type: "string",
          },
          {
            name: "btn3",
            label: "3.Batton",
            type: "string",
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
            type: "string",
          },
          {
            name: "spanheading",
            label: "Span",
            type: "string",
          },
          {
            name: "readycontent",
            label: "Heading 2 ",
            type: "string",
          },
          {
            name: "bannerButtonText1",
            label: "Button Text I",
            type: "string",
          },
          {
            name: "bannerButtonText2",
            label: "Button Text II",
            type: "string",
          },  
          
        ],
        
      },
      {
        name: "rgstwo",
        label: "Ready to GetStart2",
        type: "object",
        fields: [
          {
            name: "readyheadingtwo",
            label: "Heading 1",
            type: "string",
          },
          {
            name: "readycontenttwo",
            label: "Heading 2 ",
            type: "string",
          },
          {
            name: "bannerButtonText3",
            label: "Button Text I",
            type: "string",
          },
          {
            name: "readytwoimage",
            label: "Image",
            type: "image",
          }
        ],
        
      },
      {
        name: "rgsthree",
        label: "Ready to GetStart3",
        type: "object",
        fields: [
          {
            name: "readyheadingthree",
            label: "Heading 1",
            type: "string",
          },
          {
            name: "readycontentthree",
            label: "Heading 2 ",
            type: "string",
          },
          {
            name: "apibuttons",
            label: "Button Text I",
            type: "string",
          },
          {
            name: "readythreeimage",
            label: "Image",
            type: "image",
          },
        ],
        
      },
      {
        name: "faq",
        label: "FAQ",
        type: "object",
        fields: [
          {
            name: "faqheading",
            label: "Heading",
            type: "string",
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
                type: "string",
              },
              {
                name: "answer",
                label: "Answer",
                type: "string",
              },
              {
                name: "ctatext",
                label: "Cta Text",
                type: "string",
              },
              {
                name: "ctalink",
                label: "Cta Link",
                type: "string",
              }
            ]
          }
        ],
      }
    ]
export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID || "",
  branch: process.env.GITHUB_BRANCH || "",
  token: process.env.TINA_TOKEN || "",
  // repo: "krishnan-jaga/Pirai-checkbook-website",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
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
                type: "string",
              },
              {
                name: "Headingtwo",
                label: "Heading 2 ",
                type: "string",
              },
              {
                name: "insight",
                label: "Heading 3",
                type: "string",
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
          },
        },
        fields: AchRelated
      },
      {
        name: "realtime",
        label: "RealTime Payments",
        path: "content/realtime",
        format: "json",
        fields: AchRelated
      },
      {
        name: "fednow",
        label: "FedNow Payments",
        path: "content/fednow",
        format: "json",
        fields: AchRelated
      },
      {
        name: "instant",
        label: "Instant Payments",
        path: "content/instant",
        format: "json",
        fields: AchRelated
      },
      {
        name: "mailed",
        label: "Mailed Checks",
        path: "content/mailed",
        format: "json",
        fields: AchRelated
      },
      {
        name: "printable",
        label: "Printable Checks",
        path: "content/printable",
        format: "json",
        fields: AchRelated
      },
      {
        name: "virtual",
        label: "Virtual Cards",
        path: "content/virtual",
        format: "json",
        fields: AchRelated
      },
      {
        name: "zelle",
        label: "Zelle Payments",
        path: "content/zelle",
        format: "json",
        fields: AchRelated
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
            ],
          },
          {
            name: "sectionOne",
            label: "sectionOne Text",
            type: "object",
            fields: [
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
            ],
          },
          {
            name: "sectionTwo",
            label: "sectionTwo Text",
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
              },
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
        name: "terms",
        label: "Terms",
        path: "content/terms",
        format: "json",
        fields: [
          {
            name: "conditions",
            label: "Terms and Conditions",
            type: "object",
            fields: [
              {
                name: "tacheading",
                label: "T&C Heading",
                type: "string",
              },
              {
                name: "spanheading",
                label: "Span Heading",
                type: "string",
              },
              {
                name: "quote",
                label: "Quote 1",
                type: "string",
              },
              {
                name: "spanquote",
                label: "SpanQuote 1",
                type: "string",
              },
              {
                name: "quote2",
                label: "Quote 2",
                type: "string",
              },
              {
                name: "spanquote2",
                label: "SpanQuote 2",
                type: "string",
              },
              {
                name: "quote3",
                label: "Quote 3",
                type: "string",
              },
              {
                name: "spanquote3",
                label: "SpanQuote 3",
                type: "string",
              },
              {
                name: "tacOne",
                label: "Heading 1",
                type: "string",
              },
              {
                name: "termOne",
                label: "Terms 1",
                type: "string",
              },
              {
                name: "tacTwo",
                label: "Heading 2",
                type: "string",
              },
              {
                name: "termTwo",
                label: "Terms 2",
                type: "string",
              },
              {
                name: "tacThree",
                label: "Heading 3",
                type: "string",
              },
              {
                name: "termThree",
                label: "Terms 3",
                type: "string",
              },
              {
                name: "tacFour",
                label: "Heading 4",
                type: "string",
              },
              {
                name: "termFour",
                label: "Terms 4",
                type: "string",
              },
              {
                name: "tacFive",
                label: "Heading 5",
                type: "string",
              },
              {
                name: "termFive",
                label: "Terms 5",
                type: "string",
              },
              {
                name: "tacSix",
                label: "Heading 6",
                type: "string",
              },
              {
                name: "termSix",
                label: "Terms 6",
                type: "string",
              },
              {
                name: "termSix2",
                label: "Terms 6.2 ",
                type: "string",
              },
              {
                name: "termSix3",
                label: "Terms 6.3 ",
                type: "string",
              },
              {
                name: "termSix4",
                label: "Terms 6.4 ",
                type: "string",
              },
              {
                name: "tacSeven",
                label: "Heading 7",
                type: "string",
              },
              {
                name: "termSeven",
                label: "Terms 7",
                type: "string",
              },
              {
                name: "tacEight",
                label: "Heading 8",
                type: "string",
              },
              {
                name: "termEight",
                label: "Terms 8",
                type: "string",
              },
              {
                name: "tacNine",
                label: "Heading 9",
                type: "string",
              },
              {
                name: "termNine",
                label: "Terms 9",
                type: "string",
              },
              {
                name: "tacTen",
                label: "Heading 10",
                type: "string",
              },
              {
                name: "termTen",
                label: "Terms 10",
                type: "string",
              },
              {
                name: "tacEleven",
                label: "Heading 11",
                type: "string",
              },
              {
                name: "termEleven",
                label: "Terms 11",
                type: "string",
              },
              {
                name: "termElevenbold",
                label: "Terms 11.2.0",
                type: "string",
              },
              {
                name: "termEleven2",
                label: "Terms 11.2.1",
                type: "string",
              },
              {
                name: "termElevenbold3",
                label: "Terms 11.3.0",
                type: "string",
              },
              {
                name: "termEleven3",
                label: "Terms 11.3.1",
                type: "string",
              },
              {
                name: "termEleven4",
                label: "Terms 11.4",
                type: "string",
              },
              {
                name: "termEleven5",
                label: "Terms 11.5",
                type: "string",
              },
              {
                name: "termEleven6",
                label: "Terms 11.6",
                type: "string",
              },
              {
                name: "termEleven7",
                label: "Terms 11.7",
                type: "string",
              },
              {
                name: "termEleven8",
                label: "Terms 11.8",
                type: "string",
              },
              {
                name: "termEleven9",
                label: "Terms 11.9",
                type: "string",
              },
              {
                name: "termEleven10",
                label: "Terms 11.10",
                type: "string",
              },
              {
                name: "termEleven11",
                label: "Terms 11.11",
                type: "string",
              },
              {
                name: "termEleven12",
                label: "Terms 11.12",
                type: "string",
              },
              {
                name: "tacTwelve",
                label: "Heading 12",
                type: "string",
              },
              {
                name: "termTwelve",
                label: "Terms 12",
                type: "string",
              },
              {
                name: "tacThirteen",
                label: "Heading 13",
                type: "string",
              },
              {
                name: "termThirteen",
                label: "Terms 13",
                type: "string",
              },
              {
                name: "termThirteen2",
                label: "Terms 13.2",
                type: "string",
              },
            ],
          },
          {
            name: "rgs",
            label: "Ready to GetStart",
            type: "object",
            fields: [
              {
                name: "readyheading",
                label: "Heading 1",
                type: "string",
              },
              {
                name: "spanheading",
                label: "Span",
                type: "string",
              },
              {
                name: "readycontent",
                label: "Heading 2 ",
                type: "string",
              },
              {
                name: "bannerButtonText1",
                label: "Button Text I",
                type: "string",
              },
              {
                name: "bannerButtonText2",
                label: "Button Text II",
                type: "string",
              },
            ],
          },
          {
            name: "rgstwo",
            label: "Ready to GetStart2",
            type: "object",
            fields: [
              {
                name: "readyheadingtwo",
                label: "Heading 1",
                type: "string",
              },
              {
                name: "readycontenttwo",
                label: "Heading 2 ",
                type: "string",
              },
              {
                name: "bannerButtonText3",
                label: "Button Text I",
                type: "string",
              },
              {
                name: "readytwoimage",
                label: "Image",
                type: "image",
              },
            ],
          },
          {
            name: "rgsthree",
            label: "Ready to GetStart3",
            type: "object",
            fields: [
              {
                name: "readyheadingthree",
                label: "Heading 1",
                type: "string",
              },
              {
                name: "readycontentthree",
                label: "Heading 2 ",
                type: "string",
              },
              {
                name: "apibuttons",
                label: "Button Text I",
                type: "string",
              },
              {
                name: "readythreeimage",
                label: "Image",
                type: "image",
              },
            ],
          },
        ],
      },
      {
        name: "policy",
        label: "Privacy Policy",
        path: "content/policy",
        format: "json",
        fields: [
          {
            name: "Privacypolicy",
            label: "Privacy Policy",
            type: "object",
            fields: [
              {
                name: "heading",
                label: "1. Heading",
                type: "string",
              },
              {
                name: "date",
                label: "2. Date",
                type: "string",
              },
              {
                name: "content",
                label: "3. Policy One",
                type: "string",
              },
              {
                name: "contentOne",
                label: "4. Policy Two",
                type: "string",
              },
              {
                name: "contentTwo",
                label: "5. Policy Three",
                type: "string",
              },
              {
                name: "contentThree",
                label: "6. Policy Four",
                type: "string",
              },
              {
                name: "headingTwo",
                label: "7. Information",
                type: "string",
              },
              {
                name: "info",
                label: "8. Information Content",
                type: "string",
              },
              {
                name: "headingThree",
                label: "9.Personal Information",
                type: "string",
              },
              {
                name: "personalinfo",
                label: "10. Information Content",
                type: "string",
              },
              {
                name: "list",
                label: "11. List Item",
                type: "string",
              },
              {
                name: "listTwo",
                label: "12. List Item",
                type: "string",
              },
              {
                name: "listThree",
                label: "13. List Item",
                type: "string",
              },
              {
                name: "allinfo",
                label: "14. All Information",
                type: "string",
              },
              {
                name: "headingFour",
                label: "15. Information",
                type: "string",
              },
              {
                name: "infocollect",
                label: "16. Information Content",
                type: "string",
              },
              {
                name: "headingFive",
                label: "17. Information",
                type: "string",
              },
              {
                name: "spanFive",
                label: "18. Such",
                type: "string",
              },
            ],
          },
          {
            name: "PrivacyList",
            label: "Privacy List",
            type: "object",
            fields: [
              {
                name: "thirdPartyName",
                label: "Name",
                type: "string"
              },
              {
                name: "thirdPartyEmail",
                label: "Email Address",
                type: "string"
              },
              {
                name: "thirdPartyAddress",
                label: "Mailing Address",
                type: "string"
              },
              {
                name: "thirdPartyPhone",
                label: "Phone Number",
                type: "string"
              },
              
                {
                  name: "billingHeading",
                  label: "Billing Information Heading",
                  type: "string"
                },
                {
                  name: "creditCard",
                  label: "Credit Card Number",
                  type: "string"
                },
                {
                  name: "billingAddress",
                  label: "Billing Address",
                  type: "string"
                },
                {
                  name: "financialHeading",
                  label: "Financial Information Heading",
                  type: "string"
                },
                {
                  name: "bankAccount",
                  label: "Bank Account Numbers",
                  type: "string"
                },
                {
                  name: "taxID",
                  label: "Tax ID",
                  type: "string"
                },
                {
                  name: "uniqueIdentifiersHeading",
                  label: "Unique Identifiers Heading",
                  type: "string"
                },
                {
                  name: "userName",
                  label: "User Name",
                  type: "string"
                },
                {
                  name: "accountNumbers",
                  label: "Account Numbers",
                  type: "string"
                },
                {
                  name: "password",
                  label: "Password",
                  type: "string"
                },
                {
                  name: "businessHeading",
                  label: "Business Information Heading",
                  type: "string"
                },
                {
                  name: "companyName",
                  label: "Company Name",
                  type: "string"
                },
                {
                  name: "companySize",
                  label: "Company Size",
                  type: "string"
                },
                {
                  name: "businessType",
                  label: "Business Type",
                  type: "string"
                },
                {
                  name: "transactionVolume",
                  label: "Volume of Transactions",
                  type: "string"
                },
                {
                  name: "otherInfoHeading",
                  label: "Other Information Heading",
                  type: "string"
                },
                {
                  name: "transactionData",
                  label: "Transaction Data",
                  type: "string"
                },
                {
                  name: "generatedInfo",
                  label: "Generated Information",
                  type: "string"
                },
                {
                  name: "problemReport",
                  label: "Problem Report Information",
                  type: "string"
                },
                {
                  name: "correspondence",
                  label: "Correspondence Records",
                  type: "string"
                },
                {
                  name: "thirdPartyInfo",
                  label: "Third Party Client Information",
                  type: "string"
                },{
                  name: "autoCollectHeading",
                  label: "Information Computer",
                  type: "string"
                },
                {
                  name: "autoCollectIntro",
                  label: "Introduction to Automatic Collection",
                  type: "string"
                },
                {
                  name: "ipAddress",
                  label: "Your IP Address",
                  type: "string"
                },
                {
                  name: "browserType",
                  label: "Browser Type",
                  type: "string"
                },
                {
                  name: "referringExitPages",
                  label: "Referring/Exit Pages",
                  type: "string"
                },
                {
                  name: "operatingSystemInfo",
                  label: "Operating System Information",
                  type: "string"
                },
                {
                  name: "otherBrowserInfo",
                  label: "Other Browser Information",
                  type: "string"
                },
                {
                  name: "trackingPolicy",
                  label: "Tracking Policy Information",
                  type: "string"
                },
                {
                  name: "howWeUseHeading",
                  label: "How We Use the Information We Collect",
                  type: "string"
                },
                {
                  name: "usageDetails",
                  label: "Details on How We Use Information",
                  type: "string"
                },
                {
                  name: "cookiesUsage",
                  label: "Cookies Usage Information",
                  type: "string"
                },
                {
                  name: "enforceTermsUsage",
                  label: "Enforcement of Website Terms",
                  type: "string"
                }, {
                  name: "sharingInfo",
                  label: "Sharing Your Info",
                  type: "string"
                },
                {
                  name: "noRentSell",
                  label: "No Renting or Selling",
                  type: "string"
                },
                {
                  name: "limitedShare",
                  label: "Limited Sharing",
                  type: "string"
                },
                {
                  name: "legalReq",
                  label: "Legal Requirements",
                  type: "string"
                },
                {
                  name: "businessChanges",
                  label: "Business Changes",
                  type: "string"
                },
                {
                  name: "otherUses",
                  label: "Other Purposes",
                  type: "string"
                },
                {
                  name: "nonIdentifiable",
                  label: "Non-Identifiable Info",
                  type: "string"
                }
                ,{
                  name: "ccpaHeading",
                  label: "CCpa Heading",
                  type: "string"
                },
                {
                  name: "ccpaIntro",
                  label: "Content ",
                  type: "string"
                },
                
                {
                  name: "right",
                  label: "Content Two.1",
                  type: "string"
                },
                {
                  name: "rightToKnow",
                  label: "Content Two.2",
                  type: "string"
                },
                {
                  name: "rightToKnowDetails",
                  label: "Content Three",
                  type: "string"
                },
                {
                  name: "collectedInfoCategories",
                  label: "Content Four",
                  type: "string"
                },
                {
                  name: "sourcesInfoCategories",
                  label: "Content Five",
                  type: "string"
                },
                {
                  name: "businessPurpose",
                  label: "Content Six",
                  type: "string"
                },
                {
                  name: "thirdPartyCategories",
                  label: "Content Seven",
                  type: "string"
                },
                
        ]
      },
      {
        name: "rights",
        label: "Rights List",
        type: "object",
        fields: [
          {
            name: "right",
            label: "Rights",
            type: "string"
          },
          {
            name: "right1",
            label: "Rights ",
            type: "string"
          },
          {
            name: "head1",
            label: "Rights",
            type: "string"
          },
          {
            name: "right2",
            label: "Rights ",
            type: "string"
          },
          {
            name: "head2",
            label: "Rights",
            type: "string"
          },
          {
            name: "right3",
            label: "Rights ",
            type: "string"
          },
          {
            name: "right4",
            label: "Rights ",
            type: "string"
          },
          {
            name: "euRightsHeading",
            label: "EU Rights",
            type: "string"
          },
          {
            name: "euRightsIntro",
            label: "Contact Us",
            type: "string"
          },
          {
            name: "seeInfoAboutYou",
            label: "See Info",
            type: "string"
          },
          {
            name: "seeProvidedInfo",
            label: "Provided Info",
            type: "string"
          },
          {
            name: "changeCorrectInfo",
            label: "Change Info",
            type: "string"
          },
          {
            name: "deleteInfo",
            label: "Delete Info",
            type: "string"
          },
          {
            name: "stopProcessing",
            label: "Stop Processing",
            type: "string"
          },
          {
            name: "objectToProcessing",
            label: "Object to Processing",
            type: "string"
          },
          {
            name: "withdrawConsent",
            label: "Withdraw Consent",
            type: "string"
          },
          {
            name: "optOutFutureComms",
            label: "Opt Out",
            type: "string"
          },
          {
            name: "declineInfo",
            label: "Decline Info",
            type: "string"
          },
         
          {
            name: "cookieRefusal",
            label: "Refuse Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsFirefox",
            label: "Firefox Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsIE",
            label: "IE Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsChrome",
            label: "Chrome Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsSafariOSX",
            label: "Safari (OS X) Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsSafariIOS",
            label: "Safari (iOS) Cookies",
            type: "string"
          },
          {
            name: "cookieSettingsAndroid",
            label: "Android Cookies",
            type: "string"
          },
          {
            name: "disableCookiesNote",
            label: "Disabled Cookies Note",
            type: "string"
          },
          {
            name: "optOutGoogleAnalytics",
            label: "Opt Out GA",
            type: "string"
          },
          {
            name: "compromiseHeading",
            label: "Compromise Info",
            type: "string"
          },
          {
            name: "notificationProcedures",
            label: "Notification Proc.",
            type: "string"
          },
          {
            name: "noLiability",
            label: "No Liability",
            type: "string"
          },
          {
            name: "linksHeading",
            label: "Links",
            type: "string"
          },
          {
            name: "noResponsibility",
            label: "No Responsibility",
            type: "string"
          },
          {
            name: "notificationHeading",
            label: "Notification Proc.",
            type: "string"
          },
          {
            name: "notificationIntro",
            label: "Notification Policy",
            type: "string"
          },
          {
            name: "contactIntro",
            label: "Contact Us",
            type: "string"
          },
          {
            name: "supportTeam",
            label: "Support Team",
            type: "string"
          },
          {
            name: "support",
            label: "Support Phone",
            type: "string"
          },
          {
            name: "supportPhone",
            label: "Support Phone",
            type: "string"
          },
          {
            name: "supportEmail",
            label: "Support Email",
            type: "string"
          }
          
                 
         ] },
         {
          name: "ready",
          label: "Ready to GetStart",
          type: "object",
          fields: [
            {
              name: "readyheading",
              label: "Heading 1",
              type: "string",
            },
            {
              name: "spanheading",
              label: "Span",
              type: "string",
            },
            {
              name: "readycontent",
              label: "Heading 2 ",
              type: "string",
            },
            {
              name: "bannerButtonText1",
              label: "Button Text I",
              type: "string",
            },
            {
              name: "bannerButtonText2",
              label: "Button Text II",
              type: "string",
            },
          ],
        },
        {
          name: "rgstwo",
          label: "Ready to GetStart2",
          type: "object",
          fields: [
            {
              name: "readyheadingtwo",
              label: "Heading 1",
              type: "string",
            },
            {
              name: "readycontenttwo",
              label: "Heading 2 ",
              type: "string",
            },
            {
              name: "bannerButtonText3",
              label: "Button Text I",
              type: "string",
            },
            {
              name: "readytwoimage",
              label: "Image",
              type: "image",
            },
          ],
        },
        {
          name: "rgsthree",
          label: "Ready to GetStart3",
          type: "object",
          fields: [
            {
              name: "readyheadingthree",
              label: "Heading 1",
              type: "string",
            },
            {
              name: "readycontentthree",
              label: "Heading 2 ",
              type: "string",
            },
            {
              name: "apibuttons",
              label: "Button Text I",
              type: "string",
            },
            {
              name: "readythreeimage",
              label: "Image",
              type: "image",
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
      },
    ],
  },

  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
      static: false,
    },
    accept: ["image/jpeg", "video/mp4"],
  },
});
