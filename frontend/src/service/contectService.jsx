import api from "./api";

export const submitContactForm = async (formData) => {
  const response = await api.post("/api/contact", formData);

  return response.data;
};
export const submitPartnerForm = async (formData) => {
  const response = await api.post("/api/partner", formData);
  console.log(response);

  return response.data;
};