"use client";
import CmsTitle from "@/components/management/mainTitle";
import CardContainer from "@/components/management/mainPage/cardContainer";
import BreadCrumb from "@/components/management/breadCrumb";
import BasicButton from "@/components/management/basicbutton";
import PageWraper from "@/components/management/pageWrapper";

function RenderPage() {
  return (
    <>
      <PageWraper buttonType="button">
        <BreadCrumb lastStep="" />
        <CmsTitle />
        <CardContainer>
          <BasicButton label={"All"} handlerOnClick={() => {}} />
          <BasicButton label={"Small"} handlerOnClick={() => {}} />
          <BasicButton label={"Medium"} handlerOnClick={() => {}} />
          <BasicButton label={"Large"} handlerOnClick={() => {}} />
        </CardContainer>
      </PageWraper>
    </>
  );
}

export default RenderPage;
