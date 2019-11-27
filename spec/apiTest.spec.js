describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3000/users", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});

describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3000/user:id", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});

describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3000/patients", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});

describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3000/labReports", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});

describe("GET /", () => {
    var data = {};
    beforeAll((done) => {
        Request.get("http://localhost:3000/labAssistants", (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
    });
});