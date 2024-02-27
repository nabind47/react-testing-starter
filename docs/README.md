```sh
npm i vitest -D
```

```ts
import { describe, expect, it } from "vitest";

describe("group", () => {
  it("should", () => {
    expect(1).toBeTruthy();
  });
});
```

> `iv` & `d` & `i` & `npm run test:ui`

```sh
npm i @testing-library/react@14.2.0 -D
npm i jsdom@24.0.0 -D
npm i @testing-library/jest-dom -D
```

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
```

> `vitest.config.ts`
