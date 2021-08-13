const util = require('util');
const fs = require('fs')
const path = require("path");
// const dbconn = require('./dbconn');

module.exports = {
    findAllCards: async function() {
        try {
            const readFile = util.promisify(fs.readFile).bind(fs);
            const data = await readFile(path.resolve('.', 'backend', 'models', 'json', 'data.json'), 'utf8');
            return JSON.parse(data);
        } catch(e) {
            console.error(e);
        }
    },
    insertTask: async function(cardNo, task) {
        // const conn = dbconn();
        // const query = util.promisify(conn.query).bind(conn);
        // try {
        //     return await query(
        //         "insert into emaillist values(null, ?, ?, ?)",
        //         Object.values(emaillist)
        //     );
        // } catch(e) {
        //     console.error(e);
        // } finally {
        //     conn.end();
        // }
    }
}