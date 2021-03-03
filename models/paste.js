
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['0.0.0.0'],
    localDataCenter: 'datacenter1',
    keyspace: 'pastedata'
});

let queries = {
    insertPaste: 'INSERT INTO pastebin (shortcode, contentkey) VALUES (?, ?) IF NOT EXISTS',
    getPaste: 'SELECT contentkey FROM pastebin WHERE shortcode = ?',
};

function insertPaste(shortcode, contentkey) {
    params = [shortcode, contentkey];

    return client.execute(queries.insertPaste, params, {prepare: true})
}

function getPaste(shortcode) {
    return client.execute(queries.getPaste, [shortcode], {prepare: true})
        .then((response) => {
            if (response.rows.length == 0) {
                return
            }

            return response.rows[0].contentkey;
        });
}


module.exports = { insertPaste, getPaste }
