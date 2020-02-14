const router = require("express").Router()

//
const flux = [
  {
    id: Math.random().toString(),
    name: "La Une",
    url: "https://www.lemonde.fr/rss/une.xml",
    url_end: "/une"
  },
  {
    id: Math.random().toString(),
    name: "Europe",
    url: "https://www.lemonde.fr/europe/rss_full.xml",
    url_end: "/europe"
  },
  {
    id: Math.random().toString(),
    name: "International",
    url: "https://www.lemonde.fr/international/rss_full.xml",
    url_end: "/monde"
  },
  {
    id: Math.random().toString(),
    name: "Amérique",
    url: "https://www.lemonde.fr/ameriques/rss_full.xml",
    url_end: "/amerique"
  },
  {
    id: Math.random().toString(),
    name: "Afrique",
    url: "https://www.lemonde.fr/afrique/rss_full.xml",
    url_end: "/afrique"
  },
  {
    id: Math.random().toString(),
    name: "Asie",
    url: "https://www.lemonde.fr/asie-pacifique/rss_full.xml",
    url_end: "/asie"
  }
]

//
router.get("/", (req, res) => {
  res.status(200)
  res.json({
    count: flux.length,
    flux
  })
})

//
module.exports = router
