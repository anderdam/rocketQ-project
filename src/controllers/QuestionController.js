module.exports = {
  index(req, res) {
    const roomId = req.params.room;
    const questionId = req.params.question;
    const { action } = req.params;
    const { password } = req.body;

    console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);
  },
};
