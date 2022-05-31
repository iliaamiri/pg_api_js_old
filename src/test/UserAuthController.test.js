

const request = require('supertest');
const app = require('../app.js');

const baseUserAuthUrl = "/api/user/auth";

describe('POST /login', () => {
    describe('Happy Path', () => {
        let response;
        beforeAll(async () => {
            const data = { username: "test", password: "123" };
            response = await request(app).post(`${baseUserAuthUrl}/login`).send(data);
            console.log(response.body);
        });

        test("should have a json content-type", async () => {
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });
        test("should respond with 200 http status code", async () => {
            expect(response.statusCode).toBe(200);
        });
        test("should respond with a payload that contains a status property of true boolean value.", async () => {
            expect(response.body).toBeDefined();
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe(true);
        });
        test("should respond with a payload that contains a jwt token", () => {
            expect(response.body).toBeDefined();
            expect(response.body.token).toBeDefined();
            expect(typeof response.body.token).toBe("string");
        });
    });

    describe('Sad Path', () => {
        describe('If username is invalid', () => {
            let response;
            beforeAll(async () => {
                const data = { username: "invalid23__+!?!'\"\\/username", password: "somepassword"};
                response = await request(app).post(`${baseUserAuthUrl}/login`).send(data);
            });

            test("should respond with an error object",() => {
                expect(response.body.error).toBeDefined();
            });
            test("should give an error corresponding to invalid username",() => {
                expect(response.body.error.code).toBeDefined();
                expect(response.body.error.code).toBe("101");
            });
            test("should response with an english user error saying username is invalid and should be more than 2 charactars.",() => {
                expect(response.body.error.userError).toBeDefined();
                expect(response.body.error.userError).toBe("Please enter a valid username. Username should be more than 2 characters.");
            });
        });

        describe('If username is valid but it doesn\' exist', () => {
            let response;
            beforeAll(async () => {
                const data = { username: "userNamethatdoesntexist_23438990", password: "somepassword"};
                response = await request(app).post(`${baseUserAuthUrl}/login`).send(data);
            });

            test("should respond with an error object",() => {
                expect(response.body.error).toBeDefined();
            });
            test("should give an error corresponding to invalid username",() => {
                expect(response.body.error.code).toBeDefined();
                expect(response.body.error.code).toBe("103");
            });
            test("should response with an english user error saying either username or password is wrong.",() => {
                expect(response.body.error.userError).toBeDefined();
                expect(response.body.error.userError).toBe("Invalid combination of username and password");
            });
        });

        describe('If password is invalid/wrong/doesn\'t match', () => {
            let response;
            beforeAll(async () => {
                const data = { username: "test", password: "wrongPasswordAND+INVALID@#())!($#*()@$*('\"''''//''/\\@@!@@#@##^**&&&^^%%"};
                response = await request(app).post(`${baseUserAuthUrl}/login`).send(data);
            });

            test("should respond with an error object",() => {
                expect(response.body.error).toBeDefined();
            });
            test("should give an error corresponding to invalid password",() => {
                expect(response.body.error.code).toBeDefined();
                expect(response.body.error.code).toBe("102");
            });
            test("should response with an english user error saying either username or password is wrong.",() => {
                expect(response.body.error.userError).toBeDefined();
                expect(response.body.error.userError).toBe("Invalid combination of username and password");
            });
        });
    });
});

describe('POST /register', () => {
    describe('Happy Path', () => {
        let response;
        beforeAll(async () => {
            let passwordHash_layer1 = "lkjdsaf89234jfoasdifj84jkdaj;f98j";
            let data = {
                email: 'testUser@test.com',
                username: 'testUser',
                password: passwordHash_layer1
            };
            response = await request(app).post(`${baseUserAuthUrl}/register`).send(data);
        });

        test(`responds with a 200 status http code and the payload should contain a 'status' property with a true boolean value`, () => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe(true);
        });
        test(`responds with a jwt token`, () => {
            expect(response.body.token).toBeDefined();
            expect(typeof response.body.token).toBe("string");
        });
    });

    describe('Sad Path', () => {

    });
});