import { api } from "./api";

export interface PublicGalleryItem {
  _id: string;
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  title?: string;
  alt: string;
  caption?: string;
  description?: string;
  category?: string;
  credit?: string;
  folder?: string;
  sortOrder?: number;
  createdAt: string;
  downloadCount?: number;
}


export const publicGalleryApi = {
  list: (type: "image" | "video") => api.get<PublicGalleryItem[]>(`/gallery?type=${type}`),
  registerDownload: (id: string) => api.post<{ url: string; downloadCount: number }>(`/gallery/${id}/download`),
};
