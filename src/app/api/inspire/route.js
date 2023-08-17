import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  if (!data)
    return NextResponse.json(
      { error: "Missing request body" },
      { status: 400 }
    );
  if (!data.prompt)
    return NextResponse.json(
      { error: "Missing request body" },
      { status: 400 }
    );
  try {
    let response = await fetch("https://api.edenai.run/v2/image/generation", {
      method: "POST",
      body: JSON.stringify({
        providers: "openai",
        text: data.prompt,
        resolution: "512x512",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.apiKey || process.env.EDENAI_API_KEY}`,
      },
    });
    let fetchData = await response.json();
    if (fetchData?.detail === "Invalid Api Key")
      return NextResponse.json({ error: "Invalid Api Key" }, { status: 401 });

    return NextResponse.json(fetchData);
  } catch (err) {
    console.error("Error in the inspiration step", err);
    return NextResponse.json(
      { error: "Error in the inspiration step" },
      { status: 500 }
    );
  }
}
