import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const twilioNumber = "whatsapp:+14155238886";
const authNumber = `whatsapp:${process.env.ADMIN_NUMBER}`;

export function sendAdminWppMessage(data) {
  const products = data.items.map((item) => item.product);
  const productsMessage = products.join(",\n");
  client.messages.create({
    from: twilioNumber,
    to: authNumber,
    body: `Nuevo pedido de: ${data.email}.\nProductos: \n${productsMessage}.`,
  });
}

export function sendClientWppMessage(user) {
  client.messages.create({
    from: twilioNumber,
    to: `whatsapp:${user.telefono}`,
    body: "¡Tu pedido ha sido realizado con exito y se encuentra en proceso!",
  });
}
