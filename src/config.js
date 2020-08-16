module.exports = {
  token: process.env.DISCORD_TOKEN || 'no_token_set',
  commandPrefix: 'sheev',
  maxHistory: 5,
  DB_URI: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/sheev-bot'
};
