import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthContext } from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { getImgUrl } from "../../utils/getImageUrl";
import InputField from "../login&RegisterComp/InputField";

const AddApartmentForm = () => {
  const [dataPostingLoading, setDataPostingLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuthContext();
  const { axiosCredentialInstance } = useAxiosSecure();

  const onSubmit = async (formInput) => {
    setDataPostingLoading(true);
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    formData1.append("image", formInput.mainImage[0]);
    const mainImgUrl = await getImgUrl(formData1);
    let imageOneUrl = "";
    let imageTwoUrl = "";
    if (formInput.image2) {
      formData2.append("image", formInput.image2[0]);
      imageOneUrl = await getImgUrl(formData2);
    }
    if (formInput.image3) {
      formData3.append("image", formInput.image3[0]);
      imageTwoUrl = await getImgUrl(formData3);
    }

    const {
      bedroom,
      bathroom,
      price,
      mainImage,
      image2,
      image3,
      amenities,
      ...rest
    } = formInput;
    // make the main data
    const apartmentData = {
      ...rest,
      price: parseInt(price),
      addedBy: {
        email: user?.email,
        name: user?.displayName,
      },
      houseInfo: {
        bedroom: parseInt(bedroom),
        bathroom: parseInt(bathroom),
      },
      mainImage: mainImgUrl,
      images: [imageOneUrl, imageTwoUrl],
      amenities: amenities.split(","),
    };

    const response = await axiosCredentialInstance.post(
      `/rent-easy/apartments/add-apartment`,
      apartmentData
    );

    if (response?.data?.status === "success") {
      setDataPostingLoading(false);
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "apartment data is added",
        showConfirmButton: false,
        timer: 700,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white shadow-lg rounded-md"
    >
      {/* Apartment Name */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Apartment Name"
        requiredStar
        error={errors?.apartmentName?.message}
      >
        <input
          id="apartmentName"
          type="text"
          placeholder="Apartment Name"
          {...register("apartmentName", {
            required: "Apartment name is required",
          })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* House No */}
      <InputField
        customClassName="text-primary-chocolate"
        label="House No"
        requiredStar
        error={errors?.houseNo?.message}
      >
        <input
          id="houseNo"
          type="text"
          placeholder="House No"
          {...register("houseNo", { required: "House number is required" })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Location */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Location"
        requiredStar
        error={errors?.location?.message}
      >
        <input
          id="location"
          type="text"
          placeholder="location of apartment"
          {...register("location", { required: "Location is required" })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Floor No */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Floor No"
        requiredStar
        error={errors?.floorNo?.message}
      >
        <input
          id="floorNo"
          type="number"
          placeholder="Floor No"
          {...register("floorNo", {
            required: "Floor number is required",
            min: 1,
          })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Block No */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Block No"
        requiredStar
        error={errors?.blockNo?.message}
      >
        <input
          id="blockNo"
          type="text"
          placeholder="Block No"
          {...register("blockNo", { required: "Block number is required" })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Price */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Price (USD)"
        requiredStar
        error={errors?.price?.message}
      >
        <input
          id="price"
          type="number"
          placeholder="25000"
          {...register("price", { required: "Price is required", min: 1 })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Category */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Category"
        requiredStar
        error={errors?.category?.message}
      >
        <select
          {...register("category", { required: "Category is required" })}
          className="input input-bordered w-full"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="rent">Rent</option>
          <option value="sell">Sell</option>
        </select>
      </InputField>

      {/* Availability */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Availability"
        requiredStar
        error={errors?.availability?.message}
      >
        <select
          {...register("availability", {
            required: "Availability is required",
          })}
          className="input input-bordered w-full"
        >
          <option value="true">Available</option>
        </select>
      </InputField>

      {/* Bedrooms */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Bedrooms"
        requiredStar
        error={errors?.bedroom?.message}
      >
        <input
          id="bedroom"
          type="number"
          placeholder="4"
          {...register("bedroom", {
            required: "Bedroom count is required",
            min: 1,
          })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Bathrooms */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Bathrooms"
        requiredStar
        error={errors?.bathroom?.message}
      >
        <input
          id="bathroom"
          type="number"
          placeholder="3"
          {...register("bathroom", {
            required: "Bathroom count is required",
            min: 1,
          })}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Description */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Description"
        requiredStar
        error={errors?.description?.message}
      >
        <textarea
          id="description"
          placeholder="Apartment description"
          {...register("description", { required: "Description is required" })}
          className="textarea textarea-bordered w-full"
        />
      </InputField>

      {/* Main Image */}
      <InputField
        customClassName="text-primary-chocolate"
        label="Main Image URL"
        requiredStar
        error={errors?.mainImage?.message}
      >
        <input
          id="mainImage"
          type="file"
          className="file-input file-input-success input-bordered w-full"
          {...register("mainImage", { required: "Main image URL is required" })}
        />
      </InputField>

      {/* Additional Images */}
      <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box flex  justify-between items-center gap-5">
        <legend className="fieldset-legend text-primary-chocolate text-sm">
          Additional Image
        </legend>
        <InputField customClassName="text-primary-chocolate">
          <input
            id="image2"
            type="file"
            className="file-input file-input-neutral input-bordered w-full"
            {...register("image2")}
          />
        </InputField>
        <InputField customClassName="text-primary-chocolate">
          <input
            id="image3"
            type="file"
            className="file-input file-input-neutral input-bordered w-full"
            {...register("image3")}
          />
        </InputField>
      </fieldset>

      {/* Amenities */}
      <InputField
        label="Amenities (comma separated)"
        customClassName="text-primary-chocolate"
      >
        <input
          id="amenities"
          type="text"
          placeholder="Amenities (comma separated)"
          {...register("amenities")}
          className="input input-bordered w-full"
        />
      </InputField>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn bg-secondary-chocolate text-white w-full"
      >
        {dataPostingLoading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </>
        ) : (
          "Add Apartment"
        )}
      </button>
    </form>
  );
};

export default AddApartmentForm;
