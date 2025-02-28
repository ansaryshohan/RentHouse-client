import SectionHeader from "../components/shared/SectionHeader";
import Title from "../components/shared/Title";

const PaymentHistoryDashboardPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Title title={"Payment-History | RentEasy"} />
      <div className="w-full h-full pb-10">
        <div className="relative w-full h-full  text-white ">
          <SectionHeader colorTitle={"Payment"} title={"History"} />
          <div className="relative w-11/12 mx-auto px-2 py-10  bg-gray-background rounded-2xl">
            {/* table for payment history */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryDashboardPage;
