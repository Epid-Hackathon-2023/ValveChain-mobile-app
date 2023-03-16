CREATE TABLE IF NOT EXISTS userstable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT, 
    pass_hash TEXT
);
INSERT or IGNORE INTO userstable(id, user, pass_hash) VALUES (1, 'Jean', 'f02368945726d5fc2a14eb576f7276c0');
INSERT or IGNORE INTO userstable(id, user, pass_hash) VALUES (2, 'ok', 'c3f56b0696971c831f7a2fc925a72bd5');


CREATE TABLE IF NOT EXISTS valvetable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT, 
    valve_name TEXT
);
INSERT or IGNORE INTO valvetable(id, user, valve_name) VALUES (1, 'MonsieurValve', '1234');
