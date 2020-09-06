const yaml = require("js-yaml")
const fs = require("fs")

const inputfile = fs.readFileSync(".releaserc.yml", {encoding: "utf-8"})
module.exports = yaml.load(inputfile)
