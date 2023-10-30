import { styled } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, Typography } from "@mui/material";

import { bgBlur } from "../../../utils/cssStyles";

// import AccountPopover from "./AccountPopover";

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }: { theme: any }) => ({
  ...(bgBlur({ color: theme.palette.secondary.main }) as any),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
  [theme.breakpoints.up("xs")]: {
    // marginRight: "12px !important",
  },
  background: "transparent !important",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
    width: "100%",
  },
}));

// ----------------------------------------------------------------------

interface HeaderProp {
  className?: string;
}

export default function Header({ className }: HeaderProp) {
  return (
    <StyledRoot className={className}>
      <StyledToolbar>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
          className=""
        >
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
            }}
          >
            ONLINE ORDERS
          </Typography>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
