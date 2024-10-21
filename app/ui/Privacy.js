"use client";
import React from "react";
import ReadytoGetStart from "../ui/ReadytoGetStart";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

export default function Page(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const tinaData = data?.policy;
  const policy = tinaData?.Privacypolicy;
  const privacy = tinaData?.PrivacyList;
  const Rights = tinaData?.rights;
  return (
    <div className="px-4 md:px-0">
      <section className="container main-con m-auto flex flex-col lg:flex-row gap-10 lg:gap-3 items-center pb-8 md:pb-0 md:py-10 sm:w-[95%] lg:w-[80%] 2xl:w-[70%] px-4 md:px-0">
        <div className="flex-1 px-[0%] sm:px-[7%] lg:px-[0%] lg:pr-[5%] 2xl:pr-[2%]">
          <h1
            className="text-center text-[45px] xl:text-[70px] 2xl:text-[88px]"
            data-tina-field={tinaField(policy, "heading")}
          >
            <span>{policy?.heading}</span>
          </h1>
          <p
            className="pt-[30px] text-center text-[18px] 2xl:text-[27px]"
            data-tina-field={tinaField(policy, "date")}
          >
            {policy?.date}
          </p>
        </div>
      </section>
      <section className="container main-con m-auto rounded-[35px] lg:rounded-[60px] p-[20px] sm:p-[32px] lg:p-[63px] bg-gradient-to-r from-[#E0EBFBCC] to-[#E0EBFB00] sm:w-[99%] lg:w-[80%] 2xl:w-[78%] mb-14 lg:mb-0">
        <div>
          {["content", "contentOne", "contentTwo", "contentThree"].map(
            (key) => (
              <p key={key} data-tina-field={tinaField(policy, key)}>
                {policy?.[key]}
              </p>
            )
          )}
        </div>

        <div>
          <h5 data-tina-field={tinaField(policy, "headingTwo")}>
            {policy?.headingTwo}
          </h5>
          <p data-tina-field={tinaField(policy, "info")}>{policy?.info}</p>
          <h5 data-tina-field={tinaField(policy, "headingThree")}>
            {policy?.headingThree}
          </h5>
          <p data-tina-field={tinaField(policy, "personalinfo")}>
            {policy?.personalinfo}
          </p>
          <ul data-tina-field={tinaField(policy, "list")}>
            {["list", "listTwo", "listThree"].map((field, index) => (
              <li key={index} data-tina-field={tinaField(policy, field)}>
                {policy?.[field]}
              </li>
            ))}
          </ul>

          <p data-tina-field={tinaField(policy, "allinfo")}>
            {policy?.allinfo}
          </p>
          <h5 data-tina-field={tinaField(policy, "headingFour")}>
            {" "}
            {policy?.headingFour}
          </h5>
          <p data-tina-field={tinaField(policy, "infocollect")}>
            {policy?.infocollect}
          </p>
          <h6 data-tina-field={tinaField(policy, "headingFive")}>
            {policy?.headingFive}{" "}
            <span data-tina-field={tinaField(policy, "spanFive")}>
              {" "}
              {policy?.spanFive}{" "}
            </span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "thirdPartyName")}>
              {privacy?.thirdPartyName}
            </li>
            <li data-tina-field={tinaField(privacy, "thirdPartyEmail")}>
              {privacy?.thirdPartyEmail}
            </li>
            <li data-tina-field={tinaField(privacy, "thirdPartyAddress")}>
              {privacy?.thirdPartyAddress}
            </li>
            <li data-tina-field={tinaField(privacy, "thirdPartyPhone")}>
              {privacy?.thirdPartyPhone}
            </li>
          </ul>
          <h6 data-tina-field={tinaField(privacy, "billingHeading")}>
            {privacy?.billingHeading}, <span>such as</span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "creditCard")}>
              {privacy?.creditCard}
            </li>
            <li data-tina-field={tinaField(privacy, "billingAddress")}>
              {privacy?.billingAddress}
            </li>
          </ul>

          <h6 data-tina-field={tinaField(privacy, "financialHeading")}>
            {privacy?.financialHeading}, <span>such as</span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "bankAccount")}>
              {privacy?.bankAccount}
            </li>
            <li data-tina-field={tinaField(privacy, "taxID")}>
              {privacy?.taxID}
            </li>
          </ul>

          <h6 data-tina-field={tinaField(privacy, "uniqueIdentifiersHeading")}>
            {privacy?.uniqueIdentifiersHeading}, <span>such as</span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "userName")}>
              {privacy?.userName}
            </li>
            <li data-tina-field={tinaField(privacy, "accountNumbers")}>
              {privacy?.accountNumbers}
            </li>
            <li data-tina-field={tinaField(privacy, "password")}>
              {privacy?.password}
            </li>
          </ul>

          <h6 data-tina-field={tinaField(privacy, "businessHeading")}>
            {privacy?.businessHeading}, <span>such as</span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "companyName")}>
              {privacy?.companyName}
            </li>
            <li data-tina-field={tinaField(privacy, "companySize")}>
              {privacy?.companySize}
            </li>
            <li data-tina-field={tinaField(privacy, "businessType")}>
              {privacy?.businessType}
            </li>
            <li data-tina-field={tinaField(privacy, "transactionVolume")}>
              {privacy?.transactionVolume}
            </li>
          </ul>

          <h6 data-tina-field={tinaField(privacy, "otherInfoHeading")}>
            {privacy?.otherInfoHeading}, <span>including</span>
          </h6>
          <ul>
            <li data-tina-field={tinaField(privacy, "transactionData")}>
              {privacy?.transactionData}
            </li>
            <li data-tina-field={tinaField(privacy, "generatedInfo")}>
              {privacy?.generatedInfo}
            </li>
            <li data-tina-field={tinaField(privacy, "problemReport")}>
              {privacy?.problemReport}
            </li>
            <li data-tina-field={tinaField(privacy, "correspondence")}>
              {privacy?.correspondence}
            </li>
            <li data-tina-field={tinaField(privacy, "thirdPartyInfo")}>
              {privacy?.thirdPartyInfo}
            </li>
          </ul>
          <h5 data-tina-field={tinaField(privacy, "autoCollectHeading")}>
            {privacy?.autoCollectHeading}
          </h5>
          <p data-tina-field={tinaField(privacy, "autoCollectIntro")}>
            {privacy?.autoCollectIntro}
          </p>
          <ul>
            <li data-tina-field={tinaField(privacy, "ipAddress")}>
              {privacy?.ipAddress}
            </li>
            <li data-tina-field={tinaField(privacy, "browserType")}>
              {privacy?.browserType}
            </li>
            <li data-tina-field={tinaField(privacy, "referringExitPages")}>
              {privacy?.referringExitPages}
            </li>
            <li data-tina-field={tinaField(privacy, "operatingSystemInfo")}>
              {privacy?.operatingSystemInfo}
            </li>
            <li data-tina-field={tinaField(privacy, "otherBrowserInfo")}>
              {privacy?.otherBrowserInfo}
            </li>
          </ul>
          <p data-tina-field={tinaField(privacy, "trackingPolicy")}>
            {privacy?.trackingPolicy}
          </p>

          <h5 data-tina-field={tinaField(privacy, "howWeUseHeading")}>
            {privacy?.howWeUseHeading}
          </h5>
          <p data-tina-field={tinaField(privacy, "usageDetails")}>
            {privacy?.usageDetails}
          </p>
          <p data-tina-field={tinaField(privacy, "cookiesUsage")}>
            {privacy?.cookiesUsage}
          </p>
          <p data-tina-field={tinaField(privacy, "enforceTermsUsage")}>
            {privacy?.enforceTermsUsage}
          </p>
          <h5 data-tina-field={tinaField(privacy, "sharingInfo")}>
            {privacy?.sharingInfo}
          </h5>
          <p data-tina-field={tinaField(privacy, "noRentSell")}>
            {privacy?.noRentSell}
          </p>
          <p data-tina-field={tinaField(privacy, "limitedShare")}>
            {privacy?.limitedShare}
          </p>
          <p data-tina-field={tinaField(privacy, "legalReq")}>
            {privacy?.legalReq}
          </p>
          <p data-tina-field={tinaField(privacy, "businessChanges")}>
            {privacy?.businessChanges}
          </p>
          <p data-tina-field={tinaField(privacy, "otherUses")}>
            {privacy?.otherUses}
          </p>
          <p data-tina-field={tinaField(privacy, "nonIdentifiable")}>
            {privacy?.nonIdentifiable}
          </p>
          <h5 data-tina-field={tinaField(privacy, "ccpaHeading")}>
            {privacy?.ccpaHeading}
          </h5>
          <p data-tina-field={tinaField(privacy, "ccpaIntro")}>
            {privacy?.ccpaIntro}
          </p>
          <p data-tina-field={tinaField(privacy, "rightToKnow")}>
            <b data-tina-field={tinaField(privacy, "right")}>
              {privacy?.right}
            </b>
            {privacy?.rightToKnow}
          </p>
          <p data-tina-field={tinaField(privacy, "rightToKnowDetails")}>
            {privacy?.rightToKnowDetails}
          </p>
          <ul>
            <li data-tina-field={tinaField(privacy, "collectedInfoCategories")}>
              {privacy?.collectedInfoCategories}
            </li>
            <li data-tina-field={tinaField(privacy, "sourcesInfoCategories")}>
              {privacy?.sourcesInfoCategories}
            </li>
            <li data-tina-field={tinaField(privacy, "businessPurpose")}>
              {privacy?.businessPurpose}
            </li>
            <li data-tina-field={tinaField(privacy, "thirdPartyCategories")}>
              {privacy?.thirdPartyCategories}
            </li>
            <li
              data-tina-field={tinaField(privacy, "disclosureInfoCategories")}
            >
              {privacy?.disclosureInfoCategories}
            </li>
          </ul>

          <p data-tina-field={tinaField(Rights, "right1")}>
            <b data-tina-field={tinaField(Rights, "right")}>{Rights?.right}</b>
            {Rights?.right1}
          </p>
          <p data-tina-field={tinaField(Rights, "right2")}>
            <b data-tina-field={tinaField(Rights, "head1")}>{Rights?.head1}</b>
            {Rights?.right2}
          </p>
          <p data-tina-field={tinaField(Rights, "right3")}>
            <b data-tina-field={tinaField(Rights, "head2")}>{Rights?.head2}</b>
            {Rights?.right3}
          </p>
          <p data-tina-field={tinaField(Rights, "right4")}>{Rights?.right4}</p>
          <h5 data-tina-field={tinaField(Rights, "euRightsHeading")}>
            {Rights?.euRightsHeading}
          </h5>
          <p data-tina-field={tinaField(Rights, "euRightsIntro")}>
            {Rights?.euRightsIntro}
          </p>
          <ul>
            <li data-tina-field={tinaField(Rights, "seeInfoAboutYou")}>
              {Rights?.seeInfoAboutYou}
            </li>
            <li data-tina-field={tinaField(Rights, "seeProvidedInfo")}>
              {Rights?.seeProvidedInfo}
            </li>
            <li data-tina-field={tinaField(Rights, "changeCorrectInfo")}>
              {Rights?.changeCorrectInfo}
            </li>
            <li data-tina-field={tinaField(Rights, "deleteInfo")}>
              {Rights?.deleteInfo}
            </li>
            <li data-tina-field={tinaField(Rights, "stopProcessing")}>
              {Rights?.stopProcessing}
            </li>
            <li data-tina-field={tinaField(Rights, "objectToProcessing")}>
              {Rights?.objectToProcessing}
            </li>
            <li data-tina-field={tinaField(Rights, "withdrawConsent")}>
              {Rights?.withdrawConsent}
            </li>
            <li data-tina-field={tinaField(Rights, "optOutFutureComms")}>
              {Rights?.optOutFutureComms}
            </li>
          </ul>
          <p data-tina-field={tinaField(Rights, "declineInfo")}>
            {Rights?.declineInfo}
          </p>
          <p data-tina-field={tinaField(Rights, "cookieRefusal")}>
            {Rights?.cookieRefusal}
          </p>
          <ul>
            <li data-tina-field={tinaField(Rights, "cookieSettingsFirefox")}>
              {Rights?.cookieSettingsFirefox}
            </li>
            <li data-tina-field={tinaField(Rights, "cookieSettingsIE")}>
              {Rights?.cookieSettingsIE}
            </li>
            <li data-tina-field={tinaField(Rights, "cookieSettingsChrome")}>
              {Rights?.cookieSettingsChrome}
            </li>
            <li data-tina-field={tinaField(Rights, "cookieSettingsSafariOSX")}>
              {Rights?.cookieSettingsSafariOSX}
            </li>
            <li data-tina-field={tinaField(Rights, "cookieSettingsSafariIOS")}>
              {Rights?.cookieSettingsSafariIOS}
            </li>
            <li data-tina-field={tinaField(Rights, "cookieSettingsAndroid")}>
              {Rights?.cookieSettingsAndroid}
            </li>
          </ul>
          <p data-tina-field={tinaField(Rights, "disableCookiesNote")}>
            {Rights?.disableCookiesNote}
          </p>
          <p data-tina-field={tinaField(Rights, "optOutGoogleAnalytics")}>
            {Rights?.optOutGoogleAnalytics}
          </p>
          <h5 data-tina-field={tinaField(Rights, "compromiseHeading")}>
            {Rights?.compromiseHeading}
          </h5>
          <p data-tina-field={tinaField(Rights, "notificationProcedures")}>
            {Rights?.notificationProcedures}
          </p>
          <p data-tina-field={tinaField(Rights, "noLiability")}>
            {Rights?.noLiability}
          </p>
          <h5 data-tina-field={tinaField(Rights, "linksHeading")}>
            {Rights?.linksHeading}
          </h5>
          <p data-tina-field={tinaField(Rights, "noResponsibility")}>
            {Rights?.noResponsibility}
          </p>

          <h5 data-tina-field={tinaField(Rights, "notificationHeading")}>
            {Rights?.notificationHeading}
          </h5>
          <p data-tina-field={tinaField(Rights, "notificationIntro")}>
            {Rights?.notificationIntro}
          </p>
          <h5 data-tina-field={tinaField(Rights, "contactIntro")}>
            {Rights?.contactIntro}
          </h5>
          <div data-tina-field={tinaField(Rights, "supportTeam")}>
            <p data-tina-field={tinaField(Rights, "supportTeam")}>
              {" "}
              {Rights?.supportTeam}
            </p>
            <p data-tina-field={tinaField(Rights, "support")}>
              {Rights?.support}
            </p>
            <p data-tina-field={tinaField(Rights, "supportPhone")}>
              {Rights?.supportPhone}
            </p>
            <br />
            <Link
              href="#"
              className="font-circular-spotify text-[#3D77EA] cursor-pointer"
              data-tina-field={tinaField(Rights, "supportEmail")}
            >
              {Rights?.supportEmail}
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden lg:block">
      <ReadytoGetStart  
        rgs={tinaData?.ready}
        rgstwo={tinaData?.rgstwo}    
        rgsthree={tinaData?.rgsthree}
      />
      </section>
    </div>
  );
}
