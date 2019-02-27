const db = require('../db')

const WishData = db.defineModel('wishData', {
  girlnumber: {
    type: db.STRING(10),
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  girlname: {
    type: db.STRING(10),
    allowNull: false
  },
  girlclass: {
    type: db.STRING(15),
    allowNull: false
  },
  girlQQ: {
    type: db.STRING(15),
    allowNull: false
  },
  girlTel: {
    type: db.STRING(11),
    allowNull: false
  },
  wish: {
    type: db.STRING(100),
    allowNull: false
  },
  password: {
    type: db.STRING(6),
    allowNull: false
  },
  boynumber: {
    type: db.STRING(10),
    allowNull: true,
    unique: true,
    primaryKey: false
  },
  boyname: {
    type: db.STRING(10),
    allowNull: true
  },
  boyclass: {
    type: db.STRING(15),
    allowNull: true
  },
  boyQQ: {
    type: db.STRING(11),
    allowNull: true
  },
  boyTel: {
    type: db.STRING(11),
    allowNull: true
  },
  finish: {
    type: db.STRING(10),
    allowNull: true
  },
})

module.exports = {
  girlCommit: async (gNumber, gName, gClass, gQQ, gTel, gWish, gPassword, ) => {
    let res
    await WishData.create({
      girlnumber: gNumber,
      girlname: gName,
      girlclass: gClass,
      girlQQ: gQQ,
      girlTel: gTel,
      wish: gWish,
      password: gPassword
    }).then(
      result => {
        res = result
      })
    return res
  },

  getUnclaimed: async () => {
    let res
    await WishData.findAll({ // 还有find、findAll等方法
    //  where: {
    //    boynumber: ''
    //  }
    }).then(
      result => {
        res = result
      })
    return res
  },

  boyCommit: async (bNumber, bName, bClass, bQQ, bTel, ) => {
    let res
    await WishData.create({
      boynumber: bNumber,
      boyname: bName,
      boyclass: bClass,
      boyQQ: bQQ,
      boyTel: bTel
    }).then(
      result => {
        res = result
      })
    return res
  }
}
