import { describe, expect, it, beforeEach, vi } from "vitest";
import { getUsername } from "./storage.js";

global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.getItem.mockReset();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ name: "Alice" }));
    expect(getUsername()).toBe("Alice");
  });

  it("returns null when no user exists in storage", () => {
    localStorage.getItem.mockReturnValue(null);
    expect(getUsername()).toBe(null);
  });
});
