const Discord = require('discord.js');
const Moment = require('moment');
const client = new Discord.Client();
module.exports = client => {
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

  const aktiviteListesi = [
   `Anomoly ${prefix}yardım 🔥 ${prefix}davet 🔥 ${prefix}premium 🔥 + Beta 0.2`
  ]

  client.user.setStatus('online')

  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}
