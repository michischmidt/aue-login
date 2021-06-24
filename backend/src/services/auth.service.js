let min = 100000,
  max = 999999,
  googleCode;

function genRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

setInterval(() => {
  googleCode = genRandom(min, max);
}, 30000);

function getGoogleAuthCode() {
  return { code: String(googleCode) };
}

export const authService = {
  getGoogleAuthCode
};
