import AddApartmentForm from "../components/addApartmentComp/AddApartmentForm";
import SectionHeader from "../components/shared/SectionHeader";
import Title from "../components/shared/Title";

const AddApartmentPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"AddApartment | RentEasy"} />
      {/* <UpdateReviewModal setMyReviews={setMyReviews} /> */}
      <div
        className="relative w-full min-h-screen pb-10"
        style={{
          background:
            "linear-gradient(to right, #ab9d90 0%,#d6c9c0 22%,#d6c9c0 80%,#d6c9c0 80%,#ab9d90 100%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative w-full h-full lg:w-11/12 top-0 text-white ">
          <SectionHeader colorTitle={"Apartment"} title={"Add"} />
          <div className="w-11/12 mx-auto px-4 py-10  bg-gray-background rounded-2xl">
            <AddApartmentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApartmentPage;
