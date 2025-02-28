import bgImage from "../assets/image-2.webp";
import Title from "../components/shared/Title";

const AdminDashBoardPage = () => {
  return (
    <div className="w-full ">
      <Title title={"Admin-Dashboard | RentEasy"} />
      {/* welcome Image */}
      <div
        className="text-center w-full  h-[40vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full bg-black/30 py-8  flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase bg-gradient-to-r from-black/60 to-transparent px-10">
            Welcome In DashBoard
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardPage;
