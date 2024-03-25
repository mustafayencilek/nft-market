export async function GET() {
  const randomNumber = Math.floor(Math.random() * 20);
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${randomNumber}`);
    const jsonData = await response.json();

    const monkes = Array.from({ length: randomNumber }, (value, index) => ({
      image: jsonData[index].download_url,
      name: jsonData[index].author,
      id1: jsonData[index].id,
      id2: `678${Math.floor(Math.random() * 100)}`,
      priceBTC: "0.0123",
      priceUSD: "1500",
    }));
    console.log(monkes);

    return Response.json(monkes);
  } catch (error) {
    console.log(error);
    return Response.json({ msg: "Internal Server Error" });
  }
}
