export const API_BASE_URL = "https://api.noroff.dev/api/v1";
const register = "/auction/auth/register";
export const API_REG_URL = `${API_BASE_URL}${register}`;
const login = "/auction/auth/login";
export const API_LOGIN_URL = `${API_BASE_URL}${login}`;
const listings = "/auction/listings?sort=created&sortOrder=desc";
export const API_LISTINGS_URL = `${API_BASE_URL}${listings}`;
