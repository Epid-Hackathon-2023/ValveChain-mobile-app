CREATE TABLE IF NOT EXISTS valvetable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_name TEXT, 
    valve_name TEXT
);
INSERT or IGNORE INTO valvetable(id, artist_name, valve_name) VALUES (1, 'MonsieurValve', '1234');
