const db = require('../db')

const Boy = db.defineModel('boys', {
  number: {
    type: db.STRING(10),
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
    type: db.STRING(11),
    allowNull: false
  },
  Tel: {
    type: db.STRING(11),
    allowNull: false
  },
})
  

module.exports = {
  commit: async (number, name, gclass, QQ, Tel, ) => {
    let res
    await Boy.create({
      number: number,
      name: name,
      class: gclass,
      QQ: QQ,
      Tel: Tel,
    
    }).then(
    result => {
      res = result
    })
    return res
  },
  /*find: async (number) => {
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
  }*/
}
