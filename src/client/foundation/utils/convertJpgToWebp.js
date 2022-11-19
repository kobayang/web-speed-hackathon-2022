import { ASSRT_URL_HOST } from "./constants";

export const convertJpgToWebp = (path) => {
  const pathByCdn = path.replace("/assets", "");
  return `${ASSRT_URL_HOST}${pathByCdn}`.replace(".jpg", ".webp");
};
