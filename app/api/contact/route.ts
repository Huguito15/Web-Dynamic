import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }

  // Honeypot: si el campo "company" viene relleno, es un bot. Respondemos "ok" sin enviar nada.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, weddingDate, message } = parsed.data;

  // TODO: Conectar aquí un proveedor de email real (Resend, SendGrid, Postmark...).
  // Ejemplo con Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "web@dynamiccasaments.com",
  //   to: "hola@dynamiccasaments.com",
  //   replyTo: email,
  //   subject: `Nueva consulta de boda — ${name}`,
  //   text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nFecha de boda: ${weddingDate}\n\n${message}`,
  // });

  console.log("Nueva consulta de contacto recibida:", { name, email, phone, weddingDate, message });

  return NextResponse.json({ ok: true });
}
