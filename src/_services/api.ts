export async function Api(url: string) {
  try {
    const path = new URL(url, process.env.NEXT_PUBLIC_API);
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
