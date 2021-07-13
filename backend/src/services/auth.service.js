let min = 100000,
  max = 999999,
  googleCode;

let start = new Date();

let cubeAuthStatus = false;

function genRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// initial value for googlecode
googleCode = genRandom(min, max);

setInterval(() => {
  googleCode = genRandom(min, max);
  start = new Date()
}, 30000);

function getGoogleAuthCode() {
  let currentDur = new Date() - start;
  return { code: String(googleCode), 
            time: currentDur };
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
