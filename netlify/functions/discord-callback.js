const axios = require('axios');

exports.handler = async function (event, context) {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;
  const code = event.queryStringParameters.code;

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch user's Discord profile data
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = userResponse.data;

    // Redirect to homepage with user data in query string
    const redirectUrl = `https://antigambling.netlify.app/?username=${userData.username}&avatar=${userData.avatar}&discriminator=${userData.discriminator}&id=${userData.id}`;

    return {
      statusCode: 302,
      headers: {
        Location: redirectUrl,
      },
    };
  } catch (error) {
    console.error('Error during Discord OAuth callback:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Authentication failed' }),
    };
  }
};
