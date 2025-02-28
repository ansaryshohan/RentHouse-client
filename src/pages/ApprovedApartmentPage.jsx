import { useState } from "react";
import ApprovedApartments from "../components/approvedApartmentsComp/ApprovedApartments";
import FilterAndSortSection from "../components/approvedApartmentsComp/FilterAndSortSection";
import PageHeader from "../components/shared/PageHeader";
import Pagination from "../components/shared/Pagination";
import Title from "../components/shared/Title";
import useApprovedApartmentData from "../hooks/useApprovedApartmentData";

const ApprovedApartmentPage = () => {
  const [currentPageNo, setCurrentPageNo] = useState(0);
  const [priceSort, setPriceSort] = useState("");
  const [filterDataSearch, setFilterDataSearch] = useState({
    search: "",
    apartmentType: "",
  });

  const {
    approvedApartmentDataPending,
    approvedApartmentDataError,
    approvedApartmentData,
    refetch,
  } = useApprovedApartmentData(
    currentPageNo,
    6,
    priceSort,
    filterDataSearch.apartmentType,
    filterDataSearch.search
  );
  // console.log(filterDataSearch)

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  const totalPageNumber = Math.ceil(
    Number(approvedApartmentData?.totalNoOfApartments) / 9
  );

  // const totalPageNumber = 2

  return (
    <div className="">
      <Title title={"All-Apartment | RentEasy"} />

      <div className="relative w-full min-h-screen py-10">
        <div
          style={{
            background: "linear-gradient(to left, #603813, #b29f94)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          className="relative rounded-t-2xl w-full h-full md:w-11/12 top-0 left-[50%] translate-x-[-50%] z-10 text-white "
        >
          <PageHeader titleText={"ALL Apartments"} />
          {/* filter  inputs divs */}
          <FilterAndSortSection
            priceSort={priceSort}
            setPriceSort={setPriceSort}
            filterDataSearch={filterDataSearch}
            setFilterDataSearch={setFilterDataSearch}
            handleSearchSubmit={handleSearchSubmit}
          />
          {/* all the cars section with pagination component */}
          <div className="w-full mx-auto pt-8 pb-10 px-6 ">
            <ApprovedApartments
              isPending={approvedApartmentDataPending}
              error={approvedApartmentDataError}
              data={approvedApartmentData}
            />
            <div>
              <Pagination
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                totalPageNumber={totalPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedApartmentPage;
