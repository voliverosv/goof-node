exports.protPollution = function (req) {
  const userData = db.loadUserData(req.body.username.userId);
  let merged = merge(userData, req.body);
  db.write(merged);
};


function merge(target, source) {
  for (const attr in source) {
    if (
      typeof target[attr] === "object" &&
      typeof source[attr] === "object"
    ) {
      merge(target[attr], source[attr])
    } else {
      target[attr] = source[attr]
    }
  }
}
