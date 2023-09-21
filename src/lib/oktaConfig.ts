export const oktaConfig = {
  clientId: "0oab21f6fmmSyets35d7",
  issuer: "https://dev-24096881.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
