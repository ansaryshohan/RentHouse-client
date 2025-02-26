import { useState } from "react";
import AllApartments from "../components/allApartmentsComp/AllApartments";
import FilterAndSortSection from "../components/allApartmentsComp/FilterAndSortSection";
import PageHeader from "../components/shared/PageHeader";
import Pagination from "../components/shared/Pagination";
import Title from "../components/shared/Title";
import useAllApartmentData from "../hooks/useAllApartmentData";

const AllApartmentPage = () => {
  const [currentPageNo, setCurrentPageNo] = useState(0);
  const [priceSort, setPriceSort] = useState("");
  const [filterDataSearch, setFilterDataSearch] = useState({
    search: "",
    apartmentType: "",
  });

  const {
    allApartmentDataPending,
    allApartmentDataError,
    allApartmentData,
    refetch,
  } = useAllApartmentData(
    currentPageNo,
    9,
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
    Number(allApartmentData?.totalNoOfApartments) / 9
  );

  // const totalPageNumber = 2

  return (
    <div className="">
      <Title title={"All-Apartment | RentEasy"} />

      <div
        className="relative w-full min-h-screen py-10"
      >
        <div
        style={{
          background:
            "linear-gradient(to left, #603813, #b29f94)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
         className="relative rounded-t-2xl w-full h-full md:w-11/12 top-0 left-[50%] translate-x-[-50%] z-10 text-white ">
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
            <AllApartments
              isPending={allApartmentDataPending}
              error={allApartmentDataError}
              data={allApartmentData}
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

export default AllApartmentPage;
