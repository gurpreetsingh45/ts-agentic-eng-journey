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

function unwrap<T>(result : Result<T>) : T {
    if(result.ok){
        return result.value;
    } else {
        throw new Error (result.error);
    }
}

