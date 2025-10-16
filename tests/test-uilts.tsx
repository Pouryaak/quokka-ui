export * from "@testing-library/react";
import userEvent from "@testing-library/user-event";
export const user = () => userEvent.setup();
