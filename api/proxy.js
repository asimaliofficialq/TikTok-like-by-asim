export default async function handler(req, res) {
  try {
    const response = await fetch("https://tajammalsmmprovider.com/api/v2", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: req.body
    });

    const text = await response.text();

    try {
      const data = JSON.parse(text);
      res.status(200).json(data);
    } catch {
      res.status(200).send(text);
    }
  } catch (error) {
    res.status(500).json({ error: "Proxy connection failed" });
  }
                                 }
