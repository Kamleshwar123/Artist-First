import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
export default function NFTCard({ arrayItem }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "85%",
        display: "flex",
        margin: "auto",
        marginTop: "10px",
        background: "#0d091b",
        color: "white",
        border: "solid white 0.5px",
      }}
      key={arrayItem?.id}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={arrayItem?.attributes?.asset_image_url}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {arrayItem?.attributes?.asset_tier_mnemonics}
          </Typography>
          <Typography variant="subtitle1" component="div">
            $ {arrayItem?.attributes?.starting_bid}
          </Typography>
          <Typography mt={1} variant="subtitle2" component="div">
            {arrayItem?.attributes?.tier_current_supply} /
            {arrayItem?.attributes?.tier_max_supply} Available Tokens
          </Typography>
          <Typography
            style={{
              marginTop: "5px",
              display: "flex",
              alignItems: "flex-start",
            }}
            variant="subtitle2"
            component="div"
          >
            <CheckIcon
              style={{ height: "18px", width: "auto", color: "#E14084" }}
            />
            {arrayItem?.attributes?.Privilege1}
          </Typography>
          <Typography
            style={{ display: "flex", alignItems: "flex-start" }}
            variant="subtitle2"
            component="div"
          >
            <CheckIcon
              style={{ height: "18px", width: "auto", color: "#E14084" }}
            />
            {arrayItem?.attributes?.Privilege2}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
