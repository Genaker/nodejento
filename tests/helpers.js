const { getSequelize } = require('../config/db');

async function skipUnlessDbReachable(t) {
  try {
    await getSequelize().authenticate();
    return true;
  } catch (err) {
    t.skip(`Database not reachable: ${err.message}`);
    return false;
  }
}

module.exports = { skipUnlessDbReachable };
