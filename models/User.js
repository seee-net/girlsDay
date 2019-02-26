const db = require('../db')

const User = db.defineModel('users', {
  number: {
    type: db.STRING(100),
    allowNull: false,
    unique: true
  },
  passwd: {
    type: db.STRING(100),
    allowNull: false
  }
})

module.exports = {
  create: async (number, passwd) => {
    let res
    await User.create({
    number: number,
    passwd: passwd
    }).then(
    result => {
      res = result
    })
    return res
  },
  find: async (number) => {
    let res
    await User.findOne({// 还有find、findAll等方法
    where: {
      number: number// 查询条件
    }
    }).then(
    result => {
      res = result
    })
    return res
  }
}
