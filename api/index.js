const rssParser = require("react-native-rss-parser");
const fetch = require("node-fetch");

//
function fetchData(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const articles = [];

      const response = await fetch(url);
      const responsetxt = await response.text();
      const responseData = await rssParser.parse(responsetxt);

      const { items } = responseData;

      items.forEach(element => {
        const article = {
          title: element.title,
          link: element.links[0].url,
          description: element.description,
          published: element.published,
          imageUrl: element.enclosures[0]
        };
        //
        articles.push(article);
      });

      resolve({ count: articles.length, articles });
    } catch (error) {
      reject("Error fetch data");
    }
  });
}

//
module.exports = {
  fetchData
};
