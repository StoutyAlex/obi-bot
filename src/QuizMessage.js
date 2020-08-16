const QuizMessages = require('./database/models/QuizMessages');

class QuizMessage {
  QuizMessage() {
    this.message = [];
  }

  async load() {
    this.message = await QuizMessages.find();
  }

  async add(message) {
    this.message.push(message);
    await new QuizMessages(message).save();
  }

  get({ messageId, userId }) {
    return this.message.filter((item) => {
      if (item.userId === userId && item.messageId === messageId) return true
      return false;
    })[0] || null;
  }

  async remove({ messageId, userId, questionId}) {
    this.message = this.message.filter((item) => {
      if (item.userId === userId && item.messageId === messageId && item.questionId === questionId) return false;
      return true;
    });
    QuizMessages.findOneAndDelete({ messageId, userId, questionId} ).exec();
  }
}

const singleton = new QuizMessage();

module.exports = singleton;
