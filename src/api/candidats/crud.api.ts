import type { Candidat } from "../../data/models/canditat";



export const candidatApi = {
    getAll: async (): Promise<Candidat[]> => {
        const response = await axiosInstance.get('/projects');
        return response.data;
    },

    create: async (formData: FormData): Promise<Candidat[]> => {
        const response = await axiosInstance.post('/projects', formData);
        return response.data;
    },

    read: async (id: number): Promise<Candidat> => {
        const response = await axiosInstance.get(`/projects/${id}`);
        return response.data.data;
    },

    update: async (id: number, formData: FormData): Promise<Candidat[]> => {
        const response = await axiosInstance.put(`/projects/${id}`, formData);
        return response.data;
    },

    destroy: async (id: number): Promise<Candidat[]> => {
        const response = await axiosInstance.delete(`/projects/${id}`);
        return response.data;
    },

}