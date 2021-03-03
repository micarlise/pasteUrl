
CREATE KEYSPACE pastedata WITH replication = {'class': 'SimpleStrategy',
'replication_factor': 1};

CREATE TABLE IF NOT EXISTS pastedata.pastebin (shortcode text PRIMARY KEY, contentkey text, creation_date date);
