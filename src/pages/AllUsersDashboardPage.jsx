import Swal from "sweetalert2";
import useAllUserData from "../hooks/useAllUserData";
import { useState } from "react";
import Title from "../components/shared/Title";
import SingleUserRow from "../components/allUsersDashboardComp.jsx/SingleUserRow";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import Pagination from "../components/shared/Pagination";
import SectionHeader from "../components/shared/SectionHeader";
import useAxiosSecure from "../hooks/useAxiosSecure";


const AllUsersDashboardPage = () => {
  const [currentPageNo, setCurrentPageNo] = useState(0);
  const {axiosCredentialInstance}= useAxiosSecure()
  const { allUsersDataPending, allUsersDataError,allUsersData,refetch }= useAllUserData(currentPageNo,4);
  

  if (allUsersDataError) return "An error has occurred: " + allUsersDataError.message;

  const totalPageNumber = Math.ceil(Number(allUsersData?.totalNoOfUsers) / 4);

  const handleUserRole = async (userId) => {
    Swal.fire({
      title: "sure about make this user Admin ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedData = await axiosCredentialInstance.patch(
          `/rent-easy/user/update-user/${userId}`
        );
        // console.log(deletedData)
        if (updatedData.status === 201) {
          refetch();
          Swal.fire({
            title: "User Updated",
            text: "User has been Updated.",
            icon: "success",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Update cancelled :)",
          icon: "error",
        });
      }
    });
  };
  const handleUserDelete = async (userId) => {
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
          `/rent-easy/user/delete-user/${userId}`
        );
        console.log(deletedData)
        if (deletedData.status === 200) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "User delete cancelled :)",
          icon: "error",
        });
      }
    });
  };

  // console.log(data?.bookings[0].bookedCars);
  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"All-Users | RentEasy"} />
      <div
        className="relative w-full h-full pb-10"
      >
        <div className="relative w-full h-full text-white ">
          <SectionHeader colorTitle={"Users"} title={"All"}/>
          <div className="w-11/12 mx-auto px-4 py-10  bg-gray-background rounded-2xl">
            {/*  */}
            {
              allUsersDataPending ?<><LoadingSpinner/> </>:
              <>
              {allUsersData?.users?.length > 0 ? (
              <div className="overflow-x-auto py-10">
                <table className="table text-white mb-6">
                  {/* head */}
                  <thead className="text-slate-400 text-lg">
                    <tr className="border-b border-white">
                      <th>SI</th>
                      <th>User Info</th>
                      <th className="text-center">User Email</th>
                      <th className="text-center">Role</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsersData?.users?.map(
                      (singleUserData, index) => (
                        <SingleUserRow
                          key={singleUserData._id}
                          indexNo={index}
                          rowData={singleUserData}
                          handleUserDelete={handleUserDelete}
                          handleUserRole={handleUserRole}
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
                  No Users is here Yet
                </h3>{" "}
              </div>
            )}
              </>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsersDashboardPage