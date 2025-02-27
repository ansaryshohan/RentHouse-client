import { toast } from "react-toastify";

export const getImgUrl= async(formData)=>{
  try {
    // console.log(formData.get('mainImage'))
    // Upload image to ImgBB
    const imgBBResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_imgbbAPI
      }`,
      {
        method: "POST",
        body: formData,
      }
    );

    const imgBBData = await imgBBResponse.json();
    if (imgBBData.success) {
      // console.log(imgBBData);
      return imgBBData?.data?.url
       
    }
  } catch (error) {
    toast.error(error.message);
  }
}