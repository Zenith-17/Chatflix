export const LOGO="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1052/2020/12/17062216/netflix-logo.png";
export const USER_AVATAR="https://tse2.mm.bing.net/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&pid=Api&P=0&h=180";
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780"

  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" ;

  export const SUPPORTED_LANGUAGES=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;