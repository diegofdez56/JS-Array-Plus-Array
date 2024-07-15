import { describe, it, expect } from "vitest";
import { arrSum } from "../public/js/app";

describe("arrSum", () => {
  it("should return 21 for arrays [1, 2, 3] and [4, 5, 6]", () => {
    expect(arrSum([1, 2, 3], [4, 5, 6])).toBe(21);
  });

  it("should return -21 for arrays [-1, -2, -3] and [-4, -5, -6]", () => {
    expect(arrSum([-1, -2, -3], [-4, -5, -6])).toBe(-21);
  });

  it("should return 15 for arrays [0, 0, 0] and [4, 5, 6]", () => {
    expect(arrSum([0, 0, 0], [4, 5, 6])).toBe(15);
  });

  it("should return 2100 for arrays [100, 200, 300] and [400, 500, 600]", () => {
    expect(arrSum([100, 200, 300], [400, 500, 600])).toBe(2100);
  });
});
