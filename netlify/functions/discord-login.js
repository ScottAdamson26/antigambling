exports.handler = async function (event, context) {
    const clientId = process.env.DISCORD_CLIENT_ID;
    const redirectUri = process.env.DISCORD_REDIRECT_URI || "https://antigambling.netlify.app/.netlify/functions/discord-callback";
  
    const discordLoginUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify`;
  
    return {
      statusCode: 302,
      headers: {
        Location: discordLoginUrl,
      },
    };
  };
  