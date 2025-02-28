import Swal from "sweetalert2";
import SingleUnpaidAgreementRow from "../components/MakePaymentDashboardComp/SingleUnpaidAgreementRow";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import SectionHeader from "../components/shared/SectionHeader";
import Title from "../components/shared/Title";
import { useAuthContext } from "../hooks/useAuthContext";
import useSingleAgreementUserData from "../hooks/useSingleAgreementUserData";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MakePaymentDashboardPage = () => {
  const { user } = useAuthContext();
  const {axiosCredentialInstance}=useAxiosSecure();
  const {
    userUnpaidAgreementDataPending,
    userUnpaidAgreementDataError,
    userUnpaidAgreementData,
    refetch,
  } = useSingleAgreementUserData();

  const handlePaymentDataUpdate=(agreementId)=>{}
  
  const handleAgreementDelete=(agreementId)=>{
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
          `/rent-easy/agreements/user-agreement-delete/${agreementId}`,
          { data: { userEmail: user?.email } }
        );
        // console.log(deletedData);
        if (deletedData.status === 200) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "The agreement has been deleted.",
            icon: "success",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "agreement delete cancelled :)",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"Make-Payment | RentEasy"} />
      {/* <UpdateReviewModal setMyReviews={setMyReviews} /> */}
      <div
        className="w-full h-full pb-10"
      >
        <div className="relative w-full h-full  text-white ">
          <SectionHeader colorTitle={"Payment"} title={"Make"} />
          <div className="relative w-11/12 mx-auto px-2 py-10  bg-gray-background rounded-2xl">
            {/* table for agreement */}
             {userUnpaidAgreementDataPending ? (
              <>
                <LoadingSpinner />{" "}
              </>
            ) : (
              <>
                {userUnpaidAgreementData?.length > 0 ? (
                  <div className="overflow-x-auto py-10">
                    <table className="table text-white mb-6">
             <thead className="text-slate-400 text-lg">
                        <tr className="border-b border-white">
                          <th>SI</th>
                          <th>Apartment Info</th>
                          <th>Location</th>
                          <th className="">User Email</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userUnpaidAgreementData?.map(
                          (singleAgreement, index) => (
                            <SingleUnpaidAgreementRow
                              key={singleAgreement._id}
                              indexNo={index}
                              rowData={singleAgreement}
                              handleAgreementDelete={handleAgreementDelete}
                              handlePaymentDataUpdate={handlePaymentDataUpdate}
                            />
                          )
                        )}
                      </tbody>
                    </table>
                  </div> 
             ) : (
                  <div className="w-10/12 mx-auto h-full flex justify-center items-center py-16">
                    {" "}
                    <h3 className="text-2xl font-bold text-red-600 text-center">
                      No agreement made by you
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

export default MakePaymentDashboardPage;
