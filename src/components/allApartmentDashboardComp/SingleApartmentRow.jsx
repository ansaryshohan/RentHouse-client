import { IoMdEye } from "react-icons/io";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const SingleApartmentRow = ({
  rowData,
  indexNo,
  handleApartmentDataUpdate,
  handleApartmentDelete,
  handleApartmentApprove,
  handleApartmentReject,
}) => {
  const navigate = useNavigate();
  const {
    _id,
    apartmentName,
    category,
    mainImage,
    location,
    houseNo,
    floorNo,
    blockNo,
    houseInfo: { bedroom, bathroom },
    price,
    adminApproval,
  } = rowData;

  return (
    <>
      <tr className="hover:bg-slate-300/30 hover:text-white text-white border-b border-white/40">
        <th>{indexNo + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src={mainImage} alt={apartmentName} />
              </div>
            </div>
            <div className="pl-3">
              <div className="font-semibold text-xl">{apartmentName}</div>
              <div className="font-medium text-xl">
                {category === "rent" ? (
                  <span className="badge badge-accent">{category}</span>
                ) : (
                  <span className="badge badge-info">{category}</span>
                )}
              </div>
            </div>
          </div>
        </td>
        <td className="">
          <div className="">
            <div className=" flex flex-col gap-1  justify-start">
              <div className="font-medium text-sm text-dull-text">
                Location :{" "}
                <span className="text-xs text-white">{location}</span>
              </div>
              <div className="font-normal text-sm text-dull-text">
                HouseNo : <span className="text-xs text-white">{houseNo}</span>
              </div>
              <div className="font-normal text-xs text-dull-text">
                Floor : <span className="text-xs text-white">{floorNo}</span>
              </div>
              <div className="font-normal text-sm text-dull-text">
                Block : <span className="text-xs text-white">{blockNo}</span>
              </div>
            </div>
          </div>
        </td>
        <td className="">
          <div className=" flex flex-col gap-1">
            <div className="font-medium text-sm text-dull-text">
              Bedroom : <span className="text-xs text-white">{bedroom}</span>
            </div>
            <div className="font-medium text-sm text-dull-text">
              Bathroom : <span className="text-xs text-white">{bathroom}</span>
            </div>
          </div>
        </td>
        <td className="">
          <div className="">
            <div className="font-medium text-sm text-dull-text text-center">
              $<span className="text-base text-white">{price}</span>
            </div>
          </div>
        </td>
        <td>
          <div className="text-center text-base font-medium flex justify-center items-center gap-1">
            <p>{adminApproval}</p>
            {adminApproval === "approved" && (
              <>
                <button
                  id="reject"
                  className="btn btn-error  h-auto min-h-3 px-1 py-2"
                  onClick={() => handleApartmentReject(_id)}
                >
                  <MdDelete size={14} />
                </button>
                <Tooltip anchorSelect="#reject" clickable place="top-start">
                  <button>reject</button>
                </Tooltip>
              </>
            )}
            {adminApproval === "pending" && (
              <>
                <button
                  id="approve"
                  className="btn btn-info  h-auto min-h-3 px-1 py-2"
                  onClick={() => handleApartmentApprove(_id)}
                >
                  <MdEdit size={14} />
                </button>
                <Tooltip anchorSelect="#approve" clickable place="top-start">
                  <button>approve</button>
                </Tooltip>
                <button
                  id="reject"
                  className="btn btn-error  h-auto min-h-3 px-1 py-2"
                  onClick={() => handleApartmentReject(_id)}
                >
                  <MdDelete size={14} />
                </button>
                <Tooltip anchorSelect="#reject" clickable place="top-start">
                  <button>reject</button>
                </Tooltip>
              </>
            )}

            {adminApproval === "rejected" && (
              <>
                <button
                  id="approve"
                  className="btn btn-info  h-auto min-h-3 px-1 py-2"
                  onClick={() => handleApartmentApprove(_id)}
                >
                  <MdEdit size={14} />
                </button>
                <Tooltip anchorSelect="#approve" clickable place="top-start">
                  <button>approve</button>
                </Tooltip>
              </>
            )}
          </div>
        </td>
        <td className="grid place-content-center h-full">
          <div className="flex gap-1 items-center justify-around">
            {/* view the apartment data */}
            <div className="flex items-center justify-center">
              <button
                id="view"
                className="btn btn-success  h-auto min-h-3 px-1 py-2"
                onClick={() => navigate(`/apartment/${_id}`)}
              >
                <IoMdEye size={14} />
              </button>
              <Tooltip anchorSelect="#view" clickable place="top-start">
                <button>view apartment</button>
              </Tooltip>
            </div>
            {/* edit the apartment data */}
            <div className="flex items-center justify-center">
              <button
                id="update"
                className="btn btn-info  h-auto min-h-3 px-1 py-2"
                onClick={() => handleApartmentDataUpdate(_id)}
              >
                <MdEdit size={14} />
              </button>
              <Tooltip anchorSelect="#update" clickable place="top-start">
                <button>delete User</button>
              </Tooltip>
            </div>
            {/* delete the apartment data */}
            <div className="flex items-center justify-center">
              <button
                id="delete"
                className="btn btn-error  h-auto min-h-3 px-1 py-2"
                onClick={() => handleApartmentDelete(_id)}
              >
                <MdDeleteForever size={14} />
              </button>
              <Tooltip anchorSelect="#delete" clickable place="top-start">
                <button>delete User</button>
              </Tooltip>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SingleApartmentRow;
