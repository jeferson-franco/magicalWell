const solution = require("./magicalWell.js");

test("test 1", () => {
    expect(solution(1, 2, 2)).toBe(8);
});

test("test 2", () => {
    expect(solution(1, 1, 1)).toBe(1);
});

test("test 3", () => {
    expect(solution(6, 5, 3)).toBe(128);
});

test("test 4", () => {
    expect(solution(1601, 337, 0)).toBe(0);
});

test("test 5", () => {
    expect(solution(1891, 352, 0)).toBe(0);
});

test("test 6", () => {
    expect(solution(1936, 1835, 5)).toBe(17800540);
});

test("test 7", () => {
    expect(solution(957, 57, 2)).toBe(110113);
});

test("test 8", () => {
    expect(solution(687, 1337, 0)).toBe(0);
});

test("test 9", () => {
    expect(solution(491, 1552, 4)).toBe(3060400);
});

test("test 10", () => {
    expect(solution(1275, 362, 2)).toBe(924738);
});
