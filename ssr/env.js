const config = {
  "test": {
    face: {
      host: "http://localhost:3000",
    },
    api: {
      host: "https://api-v3-test.artdevivre.com",
    },
    server: {
      port: 3000,
      host: "localhost",
    },
  },
  "prod": {
    face: {
      host: "https://artdevivre.com",
    },
    api: {
      host: "https://api.artdevivre.com",
    },
    server: {
      port: 3000,
      host: "localhost",
    },
  }
}

module.exports = config[process.env.ENV];
