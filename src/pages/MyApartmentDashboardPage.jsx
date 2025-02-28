import { useState } from "react";
import Swal from "sweetalert2";
import axiosCredentialInstance from "../axios/axiosCredentialInstance";
import SingleMyApartmentRow from "../components/myApartmentDashboardComp/SingleMyApartmentRow";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import Pagination from "../components/shared/Pagination";
import SectionHeader from "../components/shared/SectionHeader";
import Title from "../components/shared/Title";
import { useAuthContext } from "../hooks/useAuthContext";
import useMyApartmentsData from "../hooks/useMyApartmentsData";

const MyApartmentDashboardPage = () => {
  const [currentPageNo, setCurrentPageNo] = useState(0);
  const [priceSort, setPriceSort] = useState("");
  const { user } = useAuthContext();
  const { userApartmentDataPending, userApartmentData, refetch } =
    useMyApartmentsData(currentPageNo, 6, priceSort);
  const totalPageNumber = Math.ceil(
    Number(userApartmentData?.totalNoOfApartmentsByUser) / 6
  );

  // apartment delete handle
  const handleMyApartmentDelete = (apartmentId) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deletedData = await axiosCredentialInstance.delete(
          `/rent-easy/apartments/user-apartment-delete/${apartmentId}`,
          { data: { userEmail: user?.email } }
        );
        // console.log(deletedData);
        if (deletedData.status === 200) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "The Apartment has been deleted.",
            icon: "success",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Apartment delete cancelled :)",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"My-Apartments | RentEasy"} />
      <div
        className="relative w-full h-full pb-10"
      >
        <div className="relative w-full h-full  top-0 text-white ">
          <SectionHeader colorTitle={"Apartments"} title={"My Added"} />
          <div className="relative w-11/12 mx-auto px-2 py-10  bg-gray-background rounded-2xl">
            {/* sorting by price */}
            {
              userApartmentData?.allApartmentsByUser?.length > 0 && 
              <div className="absolute right-2 top-2 flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-4xl">
                <p className="text-sm font-semibold text-primary-orange">
                  sort by :
                </p>
                <select
                  name="genre"
                  id="genre"
                  defaultValue={priceSort}
                  onChange={(e) => setPriceSort(e.target.value)}
                  className="bg-black text-sm text-white"
                >
                  <option value="">No filter Selected</option>
                  <option value="price_asc">Price Ascending</option>
                  <option value="price_dsc">Price Descending</option>
                </select>
              </div>
            }
            {/* table for apartment */}
            {userApartmentDataPending ? (
              <>
                <LoadingSpinner />{" "}
              </>
            ) : (
              <>
                {userApartmentData?.allApartmentsByUser?.length > 0 ? (
                  <div className="overflow-x-auto py-10">
                    <table className="table text-white mb-6">
                      {/* head */}
                      <thead className="text-slate-400 text-lg">
                        <tr className="border-b border-white">
                          <th>SI</th>
                          <th>Apartment Info</th>
                          <th>Location</th>
                          <th className="">Details</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userApartmentData?.allApartmentsByUser?.map(
                          (singleApartmentData, index) => (
                            <SingleMyApartmentRow
                              key={singleApartmentData._id}
                              indexNo={index}
                              rowData={singleApartmentData}
                              handleMyApartmentDelete={handleMyApartmentDelete}
                            />
                          )
                        )}
                      </tbody>
                    </table>
                    <div className="flex items-center justify-end pr-15">
                      <Pagination
                        currentPageNo={currentPageNo}
                        setCurrentPageNo={setCurrentPageNo}
                        totalPageNumber={totalPageNumber}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-10/12 mx-auto h-full flex justify-center items-center py-16">
                    {" "}
                    <h3 className="text-2xl font-bold text-red-600 text-center">
                      No  Apartment added by you
                    </h3>{" "}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApartmentDashboardPage;
