import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const SingleUserRow = ({
  rowData,
  indexNo,
  handleUserDelete,
  handleUserRole,
}) => {
  const { image, role, email, name, _id } = rowData;

  return (
    <>
      <tr className="hover:bg-slate-300/30 hover:text-white text-white border-b border-white/40">
        <th>{indexNo + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src={image} alt={name} />
              </div>
            </div>
            <div className="pl-3">
              <div className="font-bold text-xl">{name}</div>
            </div>
          </div>
        </td>
        <td className="text-center text-base font-medium">{email}</td>
        <td>
          <div className="text-center text-base font-medium flex justify-center items-center gap-1">
            <p>{role}</p>
            {role !== "admin" ? (
              <>
                <button
                  id="update"
                  className="btn btn-info  h-auto min-h-3 px-1 py-2"
                  onClick={() => handleUserRole(_id)}
                >
                  <MdEdit size={14} />
                </button>
                <Tooltip anchorSelect="#update" clickable place="top-start">
                  <button>Make admin</button>
                </Tooltip>
              </>
            ) : (
              <></>
            )}
          </div>
        </td>
        <td></td>
        <th className="grid place-content-center h-full">
          {/* delete the car booking data */}
          <div className="flex items-center justify-center">
            <button
              id="delete"
              className="btn btn-error  h-auto min-h-3 px-1 py-2"
              onClick={() => handleUserDelete(_id)}
            >
              <MdDeleteForever size={14} />
            </button>
            <Tooltip anchorSelect="#delete" clickable place="top-start">
              <button>delete User</button>
            </Tooltip>
          </div>
        </th>
      </tr>
    </>
  );
};

export default SingleUserRow;
