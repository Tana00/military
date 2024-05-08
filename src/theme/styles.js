import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    brand: {
      blue: "#111c44",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
};
