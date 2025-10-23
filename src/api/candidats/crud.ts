import type { Candidat } from "../../data/models/canditat";
import axiosInstance from "../axios_instance";

export const candidatApi = {
  getAll: async (): Promise<Candidat[]> => {
    const response = await axiosInstance.get("/candidats");
    return response.data.data;
  },

  create: async (formData: FormData): Promise<Candidat[]> => {
    const response = await axiosInstance.post("/candidats", formData);
    return response.data;
  },

  read: async (id: number): Promise<Candidat> => {
    const response = await axiosInstance.get(`/candidats/${id}`);
    return response.data.data;
  },

  update: async (id: number, formData: FormData): Promise<Candidat[]> => {
    const response = await axiosInstance.post(`/candidats/${id}`, formData);
    return response.data;
  },

  destroy: async (id: number): Promise<Candidat[]> => {
    const response = await axiosInstance.delete(`/candidats/${id}`);
    return response.data;
  },
};
