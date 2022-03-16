const { route } = require("express/lib/application");

// function cek object kosong 
function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

module.exports = (req, res, next) => {
    // jika req body kosong maka next() atau skip middleware ini
    if (isEmpty(req.body)) {
        res.send("req body kosong");
    }

    //jika req body tidak kosong, maka akan menampilkan req body 
    res.send(req.body);
    next();
}