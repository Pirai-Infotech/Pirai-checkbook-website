export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  __typename
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  sectionTwo {
    __typename
    title
    titlecontent
    titlecontentimage
    title2
    titlecontent2
    titlecontentimage3
    title3
    titlecontent3
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  rgs {
    __typename
    readyheading
    spanheading
    readycontent
    bannerButtonText1
    bannerButtonText2
  }
  rgstwo {
    __typename
    readyheadingtwo
    readycontenttwo
    bannerButtonText3
    readytwoimage
  }
  rgsthree {
    __typename
    readyheadingthree
    readycontentthree
    apibuttons
    readythreeimage
  }
  faq {
    __typename
    faqheading
    questions {
      __typename
      question
      answer
      ctatext
      ctalink
    }
  }
}
    `;
export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  banner {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerSubTitle
    bannerButtonText
  }
  sectionOne {
    __typename
    sectionOneText
    sectionOneImage
  }
  sectionTwo {
    __typename
    TableHead1
    TableHead2
    TableHead3
    TableHead4
    TableBody1
    TableBody2
    TableBody3
    TableBody4
    TableImage1
    TableImage2
    TableImage3
    TableImage4
    TableImageAlt
  }
  sectionThreeText {
    __typename
    Heading
    Content
    Button
  }
  sectionFourText {
    __typename
    HeadingI
    HeadingII
    HeadingIII
    ImageTopText
    Image
    HoverList {
      __typename
      Heading1
      Content1
      Heading2
      Content2
      Heading3
      Content3
    }
  }
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `;
export const BlogDocument = gql`
    query blog($relativePath: String!) {
  blog(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogParts
  }
}
    ${BlogPartsFragmentDoc}`;
export const BlogConnectionDocument = gql`
    query blogConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogFilter) {
  blogConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogParts
      }
    }
  }
}
    ${BlogPartsFragmentDoc}`;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    blog(variables, options) {
      return requester(BlogDocument, variables, options);
    },
    blogConnection(variables, options) {
      return requester(BlogConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
