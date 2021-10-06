const Employee = require("../lib/Employee");

// need to test employee class and input provided by user name-id-email//
// does getRole() methof return role "employee"//
// when a new object is created with name id email does it match with input//

describe("employee class", () => {
  describe("Employee", () => {
    it("should return a new object with name-id-email", () => {
      const dataEmp = new Employee("Denis", "12345", "denisarce@me.com");
      let a = dataEmp.getName();
      expect(a).toBe("Denis");
    });
  });

  describe("Employee", () => {
    it("should return a new object with name-id-email", () => {
      const dataEmp = new Employee("Denis", "12345", "denisarce@me.com");
      let a = dataEmp.getEmail();
      expect(a).toBe("denisarce@me.com");
    });
  });

  describe("Employee", () => {
    it("should return a new object with name-id-email", () => {
      const dataEmp = new Employee("Denis", "12345", "denisarce@me.com");
      let a = dataEmp.getId();
      expect(a).toBe("12345");
    });
  });
});
