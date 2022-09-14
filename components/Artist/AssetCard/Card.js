import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import BuyNow from "../../Buttons/BuyNow";
export default function NFTCard({ arrayItem }) {
  return (
    <Card
      sx={{
        margin: "auto",
        marginTop: "10px",
        background: "#1A1828",
        color: "white",
        width: "30%",
      }}
      key={arrayItem?.id}
    >
      <CardMedia
        component="img"
        image={arrayItem?.attributes?.image_url}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {arrayItem?.attributes?.Title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {arrayItem?.attributes?.ytube_views}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{ fontWeight: "700" }}
              mt={1}
              variant="subtitle2"
              component="div"
            >
              <p>Lowest Ask</p> {arrayItem?.attributes?.lowest_ask}
            </Typography>
            <Typography
              sx={{ textAlign: "right", fontWeight: "700" }}
              mt={1}
              variant="subtitle2"
              component="div"
            >
              <p>Available Tokens</p> {arrayItem?.attributes?.available_token + "/" + arrayItem?.attributes?.total_tokens}
            </Typography>
          </div>
          <BuyNow style={{ margin: "auto", width: "90%" }} nft_slug={ arrayItem?.attributes?.nft_slug}/>
          <Typography
            sx={{
              fontWeight: "700",
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              justifyContent: "center",
            }}
            variant="subtitle2"
            component="div"
          >
            Listen on
            <a href={arrayItem?.attributes?.spotify_url} target="_blank"><span style={{ marginLeft: "5px", color: "green" }}>
              {"  Spotify"}
            </span>
            </a>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
