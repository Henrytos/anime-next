export async function Api(url: string) {
  try {
    const baseUrl = "https://api.jikan.moe/v4/";
    const path = `${baseUrl}${url}`;
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
