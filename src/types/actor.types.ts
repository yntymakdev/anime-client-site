import { TypeIconName } from "@/components/ui/icon";

export interface IActor {
  id: string;
  name: string;
  slug: string;
  photoUrl: string;
  movies: any[];
}

export interface IActorEditInput extends Omit<IActor, "movies"> {}
