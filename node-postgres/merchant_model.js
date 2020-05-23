const {Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'salutH',
  password: 'Uzescalou98',
  port: 5432,
});

const getPays = () =>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT DISTINCT article.Pays From article',(error,results) => {
            if(error){
                reject(error);
            }
            resolve(results.rows);
        })

    })
}

module.exports = {
    getPays,
}