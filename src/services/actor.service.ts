import { axiosClassic } from "@/api/interceptors";
import { API_URL } from "@/config/api.config";
import { IActor } from "@/types/actor.types";

class ActorService {
  async getAll(searchTerm?: string) {
    const { data } = await axiosClassic.get<IActor[]>(API_URL.actors(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return data;
  }
}
