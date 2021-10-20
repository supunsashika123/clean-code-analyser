function requireF(modulePath) {
  // force require
  try {
    return require(modulePath);
  } catch (e) {
    return false;
  }
}

module.exports = { requireF };
