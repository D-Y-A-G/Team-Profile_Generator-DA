const Engineer = require("../lib/Engineer");

describe("Engineer employee", () => {
  describe("github username", () => {
    it("getGitHub", () => {
      const dataEng = new Engineer(
        "Den",
        "12345",
        "myemail@me.com",
        "dnsarce21"
      );
      let a = dataEng.getGitHub();
      expect(a).toBe("dnsarce21");
    });
  });
});
