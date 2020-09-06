const yaml = require("js-yaml")
const readFile = require("fs").readFileSync
const resolve = require('path').resolve

const inputfile = readFile(resolve(__dirname, ".releaserc.yml"), {encoding: "utf-8"})
module.exports = yaml.load(inputfile)
