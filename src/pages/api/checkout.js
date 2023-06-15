const stripe = require("stripe")(
  "sk_test_51IWUwdG7sNvxSo7yxnDrUbh4l96P6sMtHklfitO5mfHNuT34jUTZ6ho5vFhflua2zjXQKvN29kmDuFUdYGonghyy00KZTnpAeW"
);

export default async function handler(req, res) {
  try {
    const json = JSON.parse(await req.body);
    console.log("req obj", await json);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: json?.prodId,
          quantity: json?.quantity,
        },
      ],
      mode: "subscription",
      invoice_creation: {
        enabled: true,
      },
      success_url: `http://localhost:3000/?success=true`,
      cancel_url: `http://localhost:3000/?success=true`,
    });
    // console.log("session ", session);
    return res.json(session);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
