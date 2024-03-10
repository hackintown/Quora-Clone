"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root": {
            width: "50%",
          },
        },
      },
    },
  },
  // Add more theme options if needed
});

export default theme;
