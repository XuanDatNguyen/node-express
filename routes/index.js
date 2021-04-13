// module.exports =  function(req, res) {
//     res.render('index');
//  };

 module.exports =  function(req, res) {
    let query = "SELECT * FROM `categories`";
    db.query(query, (err, result) => {
        res.render('index', {categories:result});
    });
 };