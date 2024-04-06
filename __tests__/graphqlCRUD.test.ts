import request from "supertest";
import app from "../src/app"; // Expressアプリケーションをインポート

describe("CRUD正常系", () => {
  let userId: number;

  // Create
  it("Create", async () => {
    const mutation = `
      mutation {
        createUser(name: "John Doe", email: "john@example.com") {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation })
      .expect(200);

    expect(response.body.data.createUser).toHaveProperty("id");
    expect(response.body.data.createUser).toHaveProperty("name", "John Doe");
    expect(response.body.data.createUser).toHaveProperty(
      "email",
      "john@example.com"
    );
    userId = response.body.data.createUser.id;
  });

  // Read
  it("Read", async () => {
    const query = `
      query {
        user(id: ${userId}) {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query })
      .expect(200);

    expect(response.body.data.user).toHaveProperty("id", userId);
    expect(response.body.data.user).toHaveProperty("name");
    expect(response.body.data.user).toHaveProperty("email");
  });

  // Update
  it("Update", async () => {
    const mutation = `
      mutation {
        updateUser(id: ${userId}, name: "Jane Doe", email: "jane@example.com") {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation })
      .expect(200);

    expect(response.body.data.updateUser).toHaveProperty("id", userId);
    expect(response.body.data.updateUser).toHaveProperty("name", "Jane Doe");
    expect(response.body.data.updateUser).toHaveProperty(
      "email",
      "jane@example.com"
    );
  });

  // Delete
  it("Delete", async () => {
    const mutation = `
      mutation {
        deleteUser(id: ${userId}) {
          id
        }
      }
    `;

    const response = await request(app)
      .post("/graphql")
      .send({ query: mutation })
      .expect(200);

    expect(response.body.data.deleteUser).toHaveProperty("id", userId);

    // Optionally, verify the user is actually deleted by trying to fetch it again
  });
});
