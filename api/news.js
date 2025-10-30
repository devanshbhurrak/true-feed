export default async function handler(req, res) {
  const { category = "general", q, page = 1, max = 10 } = req.query;
  const apiKey = process.env.VITE_NEWS_API_KEY;

  const endpoint = q
    ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=en&country=in&max=${max}&page=${page}&apikey=${apiKey}`
    : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=${max}&page=${page}&apikey=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Add CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
