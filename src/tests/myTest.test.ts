import { test, expect } from "vitest";

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function safeDivide(a: number, b: number): Result<number> {
  if (b === 0) {
    return {
      ok: false,
      error: "cannot divide by zero",
    };
  }
  return {
    ok: true,
    value: a / b,
  };
}

function unwrap<T>(result: Result<T>){
  if (result.ok) {
    return result.value;
  } else {
    return result.error;
  }
}

test("divisible by Zero", () => {
  expect(safeDivide(10, 0)).toStrictEqual({
    ok: false,
    error: "cannot divide by zero",
  });
});

test("ideal case", () => {
    expect(safeDivide(10, 5)).toStrictEqual({
        ok : true,
        value : 2
    });
})

