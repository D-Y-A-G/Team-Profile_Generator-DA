const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("Manager", () => {
    it("getOfficeNum", () => {
      const dataMan = new Manager("Denis", "12345", "denis@me.com", "144");
      let a = dataMan.getOfficeNum();
      expect(a).toBe("144");
    });
  });
});
