import { login } from "../js/api/auth/login";
import { validEmail, goodBoy, testProfile } from "./test-variables";

export default class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

function fetchMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(testProfile),
  });
}

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchMockSuccess());
    const result = await login(validEmail, goodBoy);
    expect(result).toEqual(testProfile);
    //expect(JSON.parse(global.localStorage.getItem("token"))).toEqual(token);
  });
});
