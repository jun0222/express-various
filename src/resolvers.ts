import db from "./db";

const resolvers = {
  user: ({ id }: { id: number }) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },
  users: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  createUser: ({ name, email }: { name: string; email: string }) => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
      stmt.run([name, email], function (err) {
        if (err) reject(err);
        db.get(
          "SELECT * FROM users WHERE id = ?",
          [this.lastID],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        );
      });
    });
  },
  updateUser: ({
    id,
    name,
    email,
  }: {
    id: number;
    name?: string;
    email?: string;
  }) => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(
        "UPDATE users SET name = ?, email = ? WHERE id = ?"
      );
      stmt.run([name, email, id], function (err) {
        if (err) reject(err);
        db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        });
      });
    });
  },
  deleteUser: ({ id }: { id: number }) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          });
        }
      });
    });
  },
};

export default resolvers;
