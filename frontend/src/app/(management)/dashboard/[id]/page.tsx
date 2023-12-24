import PageWraper from "@/components/management/pageWrapper";
import BreadCrumb from "@/components/management/breadCrumb";
import FormPage from "@/components/management/formPage.tsx/formPage";

function RenderPage({ params }: { params: { id: string } }) {
  return (
    <>
      <PageWraper buttonType={"button"}>
        <BreadCrumb lastStep="Add New Car" />
        <FormPage
          apiAction={`https://binar-rent-backend.fly.dev/cars/${params.id}/update`}
          method="patch"
        />
      </PageWraper>
    </>
  );
}

export default RenderPage;
