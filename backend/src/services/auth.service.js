let min = 100000,
  max = 999999,
  googleCode;

let cubeAuthStatus = false;

function genRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

setInterval(() => {
  googleCode = genRandom(min, max);
}, 30000);

function getGoogleAuthCode() {
  return { code: String(googleCode) };
}

function getCubeAuthStatus() {
  return { status: cubeAuthStatus };
}

function setCubeAuthStatus(status) {
  cubeAuthStatus = status;
  return {};
}

export const authService = {
  getGoogleAuthCode,
  getCubeAuthStatus,
  setCubeAuthStatus
};
