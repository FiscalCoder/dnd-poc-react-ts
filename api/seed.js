const sqlite3 = require('sqlite3').verbose();
const seedData = require('./data.json');

const db = new sqlite3.Database('./database.db');


// Function to seed data
const seedDatabase = () => {
  db.serialize(() => {
    // Drop the table if it exists (reset the table)
    db.run("DROP TABLE IF EXISTS cat_gifs");

    // Create the table
    db.run(`CREATE TABLE IF NOT EXISTS cat_gifs (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT NOT NULL,
      description TEXT
    )`);

    // Insert each item in the seed data array
    const stmt = db.prepare("INSERT INTO cat_gifs (id, name, image, description) VALUES (?, ?, ?, ?)");

    seedData.forEach(item => {
      stmt.run(item.id, item.name, item.image, item.description);
    });

    stmt.finalize();
    console.log('Seed data inserted successfully');
  });

  // Close the database connection
  db.close();
};

// Execute the seed function
seedDatabase();
