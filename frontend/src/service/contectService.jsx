import api from "./api";

export const submitContactForm = async (formData) => {
  const response = await api.post("/api/contact", formData);

  return response.data;
};
export const submitPartnerForm = async (formData) => {
  const response = await api.post("/api/partner", formData);

  return response.data;
};
export const submitCareerForm = async (formData) => {
  try {
    const response = await api.post(
      "/api/career/apply",
      formData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Career API Error:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.message ||
        "Unable to submit career application."
    );
  }
};