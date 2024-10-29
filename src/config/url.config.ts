export const APP_URL = `${process.env.SERVER_URL}/api` as string;

export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,
  home: () => PUBLIC_URL.root("/"),
  auth: () => PUBLIC_URL.root("/auth"),
  explorer: () => PUBLIC_URL.root("/explorer"),
  trending: () => PUBLIC_URL.root("/trending"),
  actor: (slug = "") => PUBLIC_URL.root(`/actor/${slug}`),
  genre: (slug = "") => PUBLIC_URL.root(`/genre/${slug}`),
  movie: (slug = "") => PUBLIC_URL.root(`/movie/${slug}`),
  premium: () => PUBLIC_URL.root("/premium"),
};
export const DASHBOARD_URL = {};
export const ADMIN_URL = {};
