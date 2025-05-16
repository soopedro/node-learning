export function ExtractQueryParams(query = "") {
  if (typeof query !== "string") return {};

  return query.split("&").reduce((queryParams, param) => {
    const [key, value] = param.split("=");

    if (!key) return queryParams;

    queryParams[key.trim()] = decodeURIComponent(value ?? "").trim();

    return queryParams;
  }, {});
}
