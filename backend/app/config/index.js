const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri:
      process.env.MONGODB_URI ||
      "mongodb+srv://ginoace2k1:Tgn5V5Za1KiJUfyH@cluster0.cfos4.mongodb.net/ql-vat-tu-nong-nghiep?retryWrites=true&w=majority&appName=Cluster0",
  },
  jwt: process.env.JWT || "goodbyeworld",
};

module.exports = config;
