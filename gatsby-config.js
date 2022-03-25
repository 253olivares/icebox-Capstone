module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // ...otherPlugins,
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: "AIzaSyDoVUvgsG9ZbpA-LnjuGMeVgr1JrcyUI2A",
          authDomain: "capstone-sp22.firebaseapp.com",
          projectId: "capstone-sp22",
          storageBucket: "capstone-sp22.appspot.com",
          messagingSenderId: "1050121475702",
          appId: "1:1050121475702:web:bb16b98afc902ad0deb157",
          measurementId: "G-GSJM35V8KH",
        },
      },
    },
  ],
};
