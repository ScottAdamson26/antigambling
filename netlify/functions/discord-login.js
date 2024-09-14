exports.handler = async function (event, context) {
    const clientId = process.env.DISCORD_CLIENT_ID;
    const redirectUri = process.env.DISCORD_REDIRECT_URI;
  
    const discordLoginUrl = `https://discord.com/oauth2/authorize?client_id=1283353891815161938&response_type=code&redirect_uri=https%3A%2F%2Fantigambling.netlify.app%2Fauth%2Fdiscord%2Fcallback&scope=identify`;
  
    return {
      statusCode: 302,
      headers: {
        Location: discordLoginUrl,
      },
    };
  };
  