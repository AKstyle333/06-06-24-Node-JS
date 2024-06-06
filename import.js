//(1) => one to one function
// const oneTone = require("./export")
// oneTone()


// (2) => many to many function
// const manyToMany = require("./export")
// manyToMany()


// (3) => export object and use one with . (dot)
// const exportWithDot = require("./export")

// exportWithDot.object1()
// exportWithDot.object2()
// exportWithDot.object3()
// exportWithDot.object4()


// (4) => export object and use one with destructure
// const {object2} = require("./export")

// object2()

// (5) => export object and use many with destructure
const { object1, object2, object3, object4 } = require("./export");
object1()
object2()
object3()
object4()
