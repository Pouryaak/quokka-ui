import { expect, afterEach } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import "vitest-axe/extend-expect";

expect.extend(matchers);
afterEach(() => cleanup());
