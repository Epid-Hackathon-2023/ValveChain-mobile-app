CREATE TABLE IF NOT EXISTS valveusers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT, 
    pass_hash TEXT
);
INSERT or IGNORE INTO valveusers(id, user, pass_hash) VALUES (1, 'Jean', '2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18');


CREATE TABLE IF NOT EXISTS valvetable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT, 
    valve_name TEXT
);
INSERT or IGNORE INTO valvetable(id, user, valve_name) VALUES (1, 'MonsieurValve', '1234');
