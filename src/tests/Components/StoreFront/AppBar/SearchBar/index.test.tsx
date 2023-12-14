import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Search } from "@mui/icons-material";

test("render the SearchBar inside the AppBar", () => {
  render(<Search></Search>);
});
