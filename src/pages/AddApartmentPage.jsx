import AddApartmentForm from "../components/addApartmentComp/AddApartmentForm";
import SectionHeader from "../components/shared/SectionHeader";
import Title from "../components/shared/Title";

const AddApartmentPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"Add-Apartment | RentEasy"} />
      {/* <UpdateReviewModal setMyReviews={setMyReviews} /> */}
      <div className=" w-full h-full pb-10">
        <div className=" w-full h-full text-white ">
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
