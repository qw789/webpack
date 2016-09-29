/**
 * Created by 路子飞 on 2016/9/29.
 */
var path=require("path");
module.exports={
    entry:"../src/entry.js",
    output:{
        path:path.join(__dirname,"out"),
        filename:"bundle.js",
        publicPath:"./out/"
    }
}