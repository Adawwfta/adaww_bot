const Telegraf = require('telegraf')
const bot = new Telegraf('708252186:AAHBrMRC5mGC-dVi2aCv3M_u1lGWh0Z9GvA')

bot.on('text', (ctx) => {
 console.log(ctx.message)

 if (ctx.message.text == '/start') {
    ctx.replyWithHTML(
     '<i>Halo, </i> <b>'+ ctx.from.first_name +'</b>!',
  {'reply_to_message_id':ctx.message.message_id})}

 if (ctx.message.text == 'tes') {
    ctx.replyWithMarkdown(
     'Tes jua, *'+ ctx.from.first_name +'*',
  {'reply_to_message_id':ctx.message.message_id})}

 })

bot.startPolling()