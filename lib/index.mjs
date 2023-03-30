import get from "lodash.get";

export const pick = (obj, path) => {
  return get(obj, path);
};
