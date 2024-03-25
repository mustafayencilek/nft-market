export async function POST(request: Request) {
  const userData = await request.json();
  return Response.json({ msg: "hello world", userData });
}
