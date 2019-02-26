const db = require('../db')

const Girl = db.defineModel('girls', {
  number: {
    type: db.STRING(100),
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  name: {
    type: db.STRING(10),
    allowNull: false
  },
  class: {
    type: db.STRING(15),
      allowNull: false
  },
  QQ: {
    type: db.STRING(15),
    allowNull: false
  },
  Tel: {
    type: db.STRING(11),
    allowNull: false
  },
  dream: {
    type: db.STRING(100),
    allowNull: false
  },
  passwd: {
    type: db.STRING(6),
    allowNull: false
  },
  boyid: {
    type: db.STRING(10),
    allowNull: true
  },
  finish: {
    type: db.STRING(10),
    allowNull: true
  },
})
module.exports = {
  commit: async (number, name, gclass, QQ, Tel, dream, passwd) => {
    let res
    await Girl.create({
      number: number,
      name: name,
      class: gclass,
      QQ: QQ,
      Tel: Tel,
      dream: dream,
      passwd: passwd,
    }).then(
      result => {
        res = result
      })
    return res
  },

  read: async () => {
    let res
    await Girl.findAll({ // 还有find、findAll等方法
      where: {
        boyid: null
      }
    }).then(
      result => {
        res = result
      })
    return res
  },

  finish: async (boyid, passwd) => {
    let res
    await Girl.update({
      finish: 'yes',
    }, {
      where: {
        boyid: boyid,
        passwd: passwd
      }
    }).then(
      result => {
        res = result
      })
    return res
  }
}