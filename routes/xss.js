exports.xss = function (req, res) {
  let messageContent = req.body.message;
  return res.send(`<p class="messageContent">${messageContent}</p>`);
};
