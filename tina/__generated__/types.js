export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const AboutPartsFragmentDoc = gql`
    fragment AboutParts on About {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
}
    `;
export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const RealtimePartsFragmentDoc = gql`
    fragment RealtimeParts on Realtime {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const FednowPartsFragmentDoc = gql`
    fragment FednowParts on Fednow {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const InstantPartsFragmentDoc = gql`
    fragment InstantParts on Instant {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const MailedPartsFragmentDoc = gql`
    fragment MailedParts on Mailed {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const PrintablePartsFragmentDoc = gql`
    fragment PrintableParts on Printable {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const VirtualPartsFragmentDoc = gql`
    fragment VirtualParts on Virtual {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const ZellePartsFragmentDoc = gql`
    fragment ZelleParts on Zelle {
  __typename
  header {
    __typename
    image
    label1
    label2
    label3
    label4
    label5
    label6
    label7
    button
  }
  heroText {
    __typename
    bannerTitle
    bannerSpanTitle
    bannerContent
    bannerButtonText1
    bannerButtonText2
    bannerImage
  }
  horizhover {
    __typename
    title
    content
    image1
    title1
    content1
    image2
    title2
    content2
  }
  sectionThree {
    __typename
    digital
    digitalspan
    digitalcontent
    title1
    content1
    title2
    content2
    image
  }
  displayinsights {
    __typename
    Headingone
    Headingtwo
    insight
  }
  discover {
    __typename
    image1
    date1
    content1
    btn1
    image2
    date2
    content2
    btn2
    image3
    date3
    content3
    btn3
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
export const TermsPartsFragmentDoc = gql`
    fragment TermsParts on Terms {
  __typename
  conditions {
    __typename
    tacheading
    spanheading
    quote
    spanquote
    quote2
    spanquote2
    quote3
    spanquote3
    tacOne
    termOne
    tacTwo
    termTwo
    tacThree
    termThree
    tacFour
    termFour
    tacFive
    termFive
    tacSix
    termSix
    termSix2
    termSix3
    termSix4
    tacSeven
    termSeven
    tacEight
    termEight
    tacNine
    termNine
    tacTen
    termTen
    tacEleven
    termEleven
    termElevenbold
    termEleven2
    termElevenbold3
    termEleven3
    termEleven4
    termEleven5
    termEleven6
    termEleven7
    termEleven8
    termEleven9
    termEleven10
    termEleven11
    termEleven12
    tacTwelve
    termTwelve
    tacThirteen
    termThirteen
    termThirteen2
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
}
    `;
export const PolicyPartsFragmentDoc = gql`
    fragment PolicyParts on Policy {
  __typename
  Privacypolicy {
    __typename
    heading
    date
    content
    contentOne
    contentTwo
    contentThree
    headingTwo
    info
    headingThree
    personalinfo
    list
    listTwo
    listThree
    allinfo
    headingFour
    infocollect
    headingFive
    spanFive
  }
  PrivacyList {
    __typename
    thirdPartyName
    thirdPartyEmail
    thirdPartyAddress
    thirdPartyPhone
    billingHeading
    creditCard
    billingAddress
    financialHeading
    bankAccount
    taxID
    uniqueIdentifiersHeading
    userName
    accountNumbers
    password
    businessHeading
    companyName
    companySize
    businessType
    transactionVolume
    otherInfoHeading
    transactionData
    generatedInfo
    problemReport
    correspondence
    thirdPartyInfo
    autoCollectHeading
    autoCollectIntro
    ipAddress
    browserType
    referringExitPages
    operatingSystemInfo
    otherBrowserInfo
    trackingPolicy
    howWeUseHeading
    usageDetails
    cookiesUsage
    enforceTermsUsage
    sharingInfo
    noRentSell
    limitedShare
    legalReq
    businessChanges
    otherUses
    nonIdentifiable
    ccpaHeading
    ccpaIntro
    right
    rightToKnow
    rightToKnowDetails
    collectedInfoCategories
    sourcesInfoCategories
    businessPurpose
    thirdPartyCategories
  }
  rights {
    __typename
    right
    right1
    head1
    right2
    head2
    right3
    right4
    euRightsHeading
    euRightsIntro
    seeInfoAboutYou
    seeProvidedInfo
    changeCorrectInfo
    deleteInfo
    stopProcessing
    objectToProcessing
    withdrawConsent
    optOutFutureComms
    declineInfo
    cookieRefusal
    cookieSettingsFirefox
    cookieSettingsIE
    cookieSettingsChrome
    cookieSettingsSafariOSX
    cookieSettingsSafariIOS
    cookieSettingsAndroid
    disableCookiesNote
    optOutGoogleAnalytics
    compromiseHeading
    notificationProcedures
    noLiability
    linksHeading
    noResponsibility
    notificationHeading
    notificationIntro
    contactIntro
    supportTeam
    support
    supportPhone
    supportEmail
  }
  ready {
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
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `;
export const AboutDocument = gql`
    query about($relativePath: String!) {
  about(relativePath: $relativePath) {
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
    ...AboutParts
  }
}
    ${AboutPartsFragmentDoc}`;
export const AboutConnectionDocument = gql`
    query aboutConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutFilter) {
  aboutConnection(
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
        ...AboutParts
      }
    }
  }
}
    ${AboutPartsFragmentDoc}`;
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
export const RealtimeDocument = gql`
    query realtime($relativePath: String!) {
  realtime(relativePath: $relativePath) {
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
    ...RealtimeParts
  }
}
    ${RealtimePartsFragmentDoc}`;
export const RealtimeConnectionDocument = gql`
    query realtimeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RealtimeFilter) {
  realtimeConnection(
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
        ...RealtimeParts
      }
    }
  }
}
    ${RealtimePartsFragmentDoc}`;
export const FednowDocument = gql`
    query fednow($relativePath: String!) {
  fednow(relativePath: $relativePath) {
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
    ...FednowParts
  }
}
    ${FednowPartsFragmentDoc}`;
export const FednowConnectionDocument = gql`
    query fednowConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FednowFilter) {
  fednowConnection(
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
        ...FednowParts
      }
    }
  }
}
    ${FednowPartsFragmentDoc}`;
export const InstantDocument = gql`
    query instant($relativePath: String!) {
  instant(relativePath: $relativePath) {
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
    ...InstantParts
  }
}
    ${InstantPartsFragmentDoc}`;
export const InstantConnectionDocument = gql`
    query instantConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: InstantFilter) {
  instantConnection(
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
        ...InstantParts
      }
    }
  }
}
    ${InstantPartsFragmentDoc}`;
export const MailedDocument = gql`
    query mailed($relativePath: String!) {
  mailed(relativePath: $relativePath) {
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
    ...MailedParts
  }
}
    ${MailedPartsFragmentDoc}`;
export const MailedConnectionDocument = gql`
    query mailedConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MailedFilter) {
  mailedConnection(
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
        ...MailedParts
      }
    }
  }
}
    ${MailedPartsFragmentDoc}`;
export const PrintableDocument = gql`
    query printable($relativePath: String!) {
  printable(relativePath: $relativePath) {
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
    ...PrintableParts
  }
}
    ${PrintablePartsFragmentDoc}`;
export const PrintableConnectionDocument = gql`
    query printableConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PrintableFilter) {
  printableConnection(
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
        ...PrintableParts
      }
    }
  }
}
    ${PrintablePartsFragmentDoc}`;
export const VirtualDocument = gql`
    query virtual($relativePath: String!) {
  virtual(relativePath: $relativePath) {
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
    ...VirtualParts
  }
}
    ${VirtualPartsFragmentDoc}`;
export const VirtualConnectionDocument = gql`
    query virtualConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VirtualFilter) {
  virtualConnection(
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
        ...VirtualParts
      }
    }
  }
}
    ${VirtualPartsFragmentDoc}`;
export const ZelleDocument = gql`
    query zelle($relativePath: String!) {
  zelle(relativePath: $relativePath) {
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
    ...ZelleParts
  }
}
    ${ZellePartsFragmentDoc}`;
export const ZelleConnectionDocument = gql`
    query zelleConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ZelleFilter) {
  zelleConnection(
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
        ...ZelleParts
      }
    }
  }
}
    ${ZellePartsFragmentDoc}`;
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
export const TermsDocument = gql`
    query terms($relativePath: String!) {
  terms(relativePath: $relativePath) {
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
    ...TermsParts
  }
}
    ${TermsPartsFragmentDoc}`;
export const TermsConnectionDocument = gql`
    query termsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TermsFilter) {
  termsConnection(
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
        ...TermsParts
      }
    }
  }
}
    ${TermsPartsFragmentDoc}`;
export const PolicyDocument = gql`
    query policy($relativePath: String!) {
  policy(relativePath: $relativePath) {
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
    ...PolicyParts
  }
}
    ${PolicyPartsFragmentDoc}`;
export const PolicyConnectionDocument = gql`
    query policyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PolicyFilter) {
  policyConnection(
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
        ...PolicyParts
      }
    }
  }
}
    ${PolicyPartsFragmentDoc}`;
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
    about(variables, options) {
      return requester(AboutDocument, variables, options);
    },
    aboutConnection(variables, options) {
      return requester(AboutConnectionDocument, variables, options);
    },
    blog(variables, options) {
      return requester(BlogDocument, variables, options);
    },
    blogConnection(variables, options) {
      return requester(BlogConnectionDocument, variables, options);
    },
    realtime(variables, options) {
      return requester(RealtimeDocument, variables, options);
    },
    realtimeConnection(variables, options) {
      return requester(RealtimeConnectionDocument, variables, options);
    },
    fednow(variables, options) {
      return requester(FednowDocument, variables, options);
    },
    fednowConnection(variables, options) {
      return requester(FednowConnectionDocument, variables, options);
    },
    instant(variables, options) {
      return requester(InstantDocument, variables, options);
    },
    instantConnection(variables, options) {
      return requester(InstantConnectionDocument, variables, options);
    },
    mailed(variables, options) {
      return requester(MailedDocument, variables, options);
    },
    mailedConnection(variables, options) {
      return requester(MailedConnectionDocument, variables, options);
    },
    printable(variables, options) {
      return requester(PrintableDocument, variables, options);
    },
    printableConnection(variables, options) {
      return requester(PrintableConnectionDocument, variables, options);
    },
    virtual(variables, options) {
      return requester(VirtualDocument, variables, options);
    },
    virtualConnection(variables, options) {
      return requester(VirtualConnectionDocument, variables, options);
    },
    zelle(variables, options) {
      return requester(ZelleDocument, variables, options);
    },
    zelleConnection(variables, options) {
      return requester(ZelleConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    },
    terms(variables, options) {
      return requester(TermsDocument, variables, options);
    },
    termsConnection(variables, options) {
      return requester(TermsConnectionDocument, variables, options);
    },
    policy(variables, options) {
      return requester(PolicyDocument, variables, options);
    },
    policyConnection(variables, options) {
      return requester(PolicyConnectionDocument, variables, options);
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
