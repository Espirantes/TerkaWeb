import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Jméno a e-mail jsou povinné." },
      { status: 400 },
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { error } = await supabase
    .from("leads")
    .insert({ name, email, phone, message });

  if (error) {
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
