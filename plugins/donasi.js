let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [081804832728]
│ • Telkomsel [081318759394]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
