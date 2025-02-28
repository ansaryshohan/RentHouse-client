import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const SingleAgreementRow = ({
  indexNo,
  rowData,
  handlePaymentDataUpdate,
  handleAgreementDelete,
}) => {
  const {_id,
    userEmail,
    location,
    floorNo,
    blockNo,
    houseNo,
    apartmentName,
    price,
    payment,
    apartmentImage}= rowData;
  return  <tr className="hover:bg-slate-300/30 hover:text-white text-white border-b border-white/40">
  <th>{indexNo + 1}</th>
  <td>
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
          <img src={apartmentImage} alt={apartmentName} />
        </div>
      </div>
      <div className="pl-3">
        <div className="font-semibold text-xl">{apartmentName}</div>
      </div>
    </div>
  </td>
  <td className="">
    <div className="">
      <div className=" flex flex-col gap-1  justify-start">
        <div className="font-medium text-sm text-dull-text">
          Location : <span className="text-xs text-white">{location}</span>
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
    <div className="">
      <div className="font-medium text-sm text-dull-text text-center">
        <span className="text-base text-white">{userEmail}</span>
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
      <p className="badge badge-accent text-sm">{payment}</p>
    </div>
  </td>
  <td className="grid place-content-center h-full">
    <div className="flex gap-1 items-center justify-center">
      {/* pay button */}
      <div className="flex items-center justify-center">
        <button
          id="update"
          className="btn btn-info px-2 py-1"
          onClick={() => handlePaymentDataUpdate(_id)}
        >
          <MdEdit size={14} />
        </button>
        <Tooltip anchorSelect="#update" clickable place="top-start">
          <button>update agreement</button>
        </Tooltip>
      </div>
      {/* delete the agreement data */}
      <div className="flex items-center justify-center">
        <button
          id="delete"
          className="btn btn-error  px-2 py-2"
          onClick={() => handleAgreementDelete(_id)}
        >
          <MdDeleteForever size={14} />
        </button>
        <Tooltip anchorSelect="#delete" clickable place="top-start">
          <button>delete agreement</button>
        </Tooltip>
      </div>
    </div>
  </td>
</tr>
};


export default SingleAgreementRow