const url =
  "https://api.giphy.com/v1/gifs/search?q=&limit=10&api_key=7hajsFPHFlo7TnRGI7Wri9tye61xigX1";
const cleanData = (data) => {
  const cleanDataGif = data.map(({ id, username, title, images }) => {
    return {
      id,
      username,
      title,
      url: images?.downsized_medium.url,
    };
  });
  return cleanDataGif;
};
export const getGifts = async (category) => {
  try {
    const response = await fetch(
      url.replace(/q=/g, `q=${category.replace(/ /g, "")}`)
    );
    const { data } = await response.json();
    return cleanData(data);
  } catch (error) {
    console.warn(error);
  }
};
