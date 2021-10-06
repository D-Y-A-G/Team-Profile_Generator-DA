const Intern = require("../lib/Intern");

describe("Intern employee", () => {
  describe("School Name", () => {
    it("getSchool", () => {
      const intData = new Intern("Den", "12345", "myemail@me.com", "UTSA");
      let a = intData.getSchool();
      expect(a).toBe("UTSA");
    });
  });
});
