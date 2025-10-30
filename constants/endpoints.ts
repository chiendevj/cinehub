const API_URL = 'https://ophim1.com';
const API_VERSION = 'v1';

const API_ENDPOINTS = {
    HOME: `${API_URL}/${API_VERSION}/api/home`,
    LIST: (slug : string, query_params: string) => `${API_URL}/${API_VERSION}/api/danh-sach/${slug}?${query_params}`,
    GENRES: `${API_URL}/${API_VERSION}/api/the-loai`,
    GENRE_DETAIL: (slug : string, query_params: string) => `${API_URL}/${API_VERSION}/api/the-loai/${slug}?${query_params}`,
    SEARCH: (search : string, query_params: string) => `${API_URL}/${API_VERSION}/api/tim-kiem?keyword=${search}?${query_params}`,
    COUNTRIES: `${API_URL}/${API_VERSION}/api/quoc-gia`,
    COUNTRY_DETAIL: (slug : string, query_params: string) => `${API_URL}/${API_VERSION}/api/quoc-gia/${slug}?${query_params}`,
    ISSUE_YEAR: `${API_URL}/${API_VERSION}/api/nam-phat-hanh`,
    ISSUE_YEAR_DETAIL: (year : string, query_params: string) => `${API_URL}/${API_VERSION}/api/nam-phat-hanh/${year}?${query_params}`,
    MOVIE_DETAIL: (slug : string) => `${API_URL}/${API_VERSION}/api/phim/${slug}`,
    KEYWORD_MOVIE: (slug : string) => `${API_URL}/${API_VERSION}/api/phim/${slug}/keywords`,
    THUMNAIL_BACKDROP_IMAGES: (slug : string) => `${API_URL}/${API_VERSION}/api/phim/${slug}/images`,
    ACTOR: (slug : string) => `${API_URL}/${API_VERSION}/api/phim/${slug}/peoples`,
};
export default API_ENDPOINTS;