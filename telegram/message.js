class Message {
    getInlineKeyboardButton(text) {
        return [{
            text: text,
            callback_data: 'Button_here'
        }]
    }

    getInlineKeyboardMarkup(text) {
        return {inline_keyboard: [this.getInlineKeyboardButton(text), this.getInlineKeyboardButton(text)]}
    }
}

module.exports = Message