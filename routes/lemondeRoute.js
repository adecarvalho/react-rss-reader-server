const router = require("express").Router();

//
const lemonde_rss_url_la_une = "https://www.lemonde.fr/rss/une.xml";
const lemonde_rss_url_europe = "https://www.lemonde.fr/europe/rss_full.xml";
const lemonde_rss_url_monde =
  "https://www.lemonde.fr/international/rss_full.xml";
//
const lemonde_rss_url_amerique =
  "https://www.lemonde.fr/ameriques/rss_full.xml";
//
const lemonde_rss_url_afrique = "https://www.lemonde.fr/afrique/rss_full.xml";
//
const lemonde_rss_url_asie =
  "https://www.lemonde.fr/asie-pacifique/rss_full.xml";

//
const { fetchData } = require("../api/index");

//monde
router.get("/monde", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_monde);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});
//
//asie
router.get("/asie", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_asie);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});

//afrique
router.get("/afrique", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_afrique);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});

//
//europe
router.get("/europe", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_europe);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});

//amerique
router.get("/amerique", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_amerique);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});

//
//une
router.get("/une", async (req, res, next) => {
  try {
    const datas = await fetchData(lemonde_rss_url_la_une);
    //console.log(datas);
    res.status(200);
    res.json(datas);
  } catch (error) {
    res.status(422);
    error = new Error(error);
    next(error);
  }
});

//

//
module.exports = router;
