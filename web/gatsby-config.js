// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const path = require("path");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true,
        token:
          "skbOHP2iKHza8N7mfzaroA86EytCrBUfAmkJtFmPp1ww0Odprrt3jP1QxAqiVA00FyfQUejAriNQraKs2wh28tz3xnDd0V5Xepwxf8t2xkPJ1mzc4wnT9WfCUgggiOP9brOCtUzFIgtHFoVUNDQjLqadfgGrh3qBrVkEgOfeg5y5X4rodAGY"
      }
    }
  ]
};
