import { merge } from "../src/merge_func";

describe("merge function", () => {
  test("basic case", () => {
    const c1 = [1, 4, 7];
    const c2 = [10, 6, 3];
    const c3 = [2, 5, 8];

    expect(merge(c1, c2, c3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 10
    ]);
  });


  test("one empty arrays", () => {
    expect(merge([], [5, 4, 3], [1,4,10])).toEqual([1, 3, 4, 4, 5, 10]);
  });

  test("two empty arrays", () => {
    expect(merge([], [5, 4, 3], [])).toEqual([3, 4, 5]);
  });

  test("all empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("duplicate arrays", () => {
    const c1 = [1, 2, 3];
    const c2 = [5, 2, 1];
    const c3 = [1, 2, 3];

    expect(merge(c1, c2, c3)).toEqual([
      1, 1, 1, 2, 2, 2, 3, 3, 5
    ]);
  });

  test("different length", () => {
    const c1 = [1, 4, 7];
    const c2 = [5, 2, 1];
    const c3 = [2, 3];

    expect(merge(c1, c2, c3)).toEqual([
      1, 1, 2, 2, 3, 4, 5, 7
    ]);
  });

  test("negative numbers", () => {
    const c1 = [-7, -4, -1];
    const c2 = [-1, -2, -3];
    const c3 = [-8, -5, -1];

    expect(merge(c1, c2, c3)).toEqual([
        -8, -7, -5, -4, -3, -2, -1, -1, -1
    ]);
  });

  test("negative and positive numbers", () => {
    const c1 = [-4, -1, 5];
    const c2 = [10, 7, -1];
    const c3 = [-1, 7, 8];

    expect(merge(c1, c2, c3)).toEqual([
        -4, -1, -1, -1, 5, 7, 7, 8, 10
    ]);
  });
});
