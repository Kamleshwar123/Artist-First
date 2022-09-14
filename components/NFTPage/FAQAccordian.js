import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "50px",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "90%",
      margin: "auto",
      justifyContent: "center",
    },
  },
  root: {
    width: "100%",
    background: "#242033",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
    marginBottom: "50px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "auto",
      justifyContent: "center",
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "100%",
      textAlign: "center",
      marginBottom: "10px",
    },
  },
}));
export default function FAQAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>FAQ</h1>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ background: "#222222" }}
        >
          <Typography style={{ color: "white" }}>
            What are Sound Tiger music NFTs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#222222" }}>
          <Typography style={{ color: "white" }}>
            Blockchains enable two primary types of transactable records (called
            “tokens”) — fungible and non-fungible. Fungible means any two tokens
            are indistinguishable from one another and can therefore be
            exchanged with true one-to-one value. Most cryptocurrencies fall
            under this categorization. Non-fungible means tokens are
            intentionally marked with unique identifiers, so they can be
            distinguished from every other token in existence.
          </Typography>
        </AccordionDetails>
        <Divider />
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{ background: "#222222" }}
        >
          <Typography
            sx={{ width: "100%", flexShrink: 0 }}
            style={{ color: "white" }}
          >
            What is ERC 721 and ERC 1155?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#222222" }}>
          <Typography style={{ color: "white" }}>
            The ERC-721 token standard was the first of its kind, and
            consequently, the one of the popular standard for creating these
            unique tokens. Dapper Labs, the company behind CryptoKitties,
            introduced ERC-721 via an Ethereum Improvement Proposal (EIP) in
            2017. The ERC-1155 token standard was developed by Enjin project
            team. Enjin introduced the token standard in 2019, and it is a
            middle ground between the ERC-20 standard and the ERC-721 standard.
          </Typography>
        </AccordionDetails>
        <Divider />
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{ background: "#222222" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{ width: "100%", flexShrink: 0 }}
            style={{ color: "white" }}
          >
            What are key differences btw ERC-721 vs. ERC-1155
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color: "white" }}>
          <Typography>
            ERC-1155 permits the creation of both semi-fungible tokens and
            non-fungible tokens, whereas ERC-721 permits only the latter.
          </Typography>
          <Typography>
            In ERC-1155, smart contracts are linked to multiple URIs and do not
            store additional metadata (such as file names). In comparison,
            ERC-721 only supports static metadata stored directly on the smart
            contract for each token ID,, increasing deployment costs and
            limiting flexibility.
          </Typography>
          <Typography>
            ERC-1155’s smart contracts support an infinite number of tokens,
            whereas ERC-721 needs a new smart contract for each type of token.
          </Typography>
          <Typography>
            ERC-1155 also allows batch transfers of tokens, which can reduce
            transaction costs and times. With ERC-721, if you want to send
            multiple tokens, they happen individually.
          </Typography>
        </AccordionDetails>
        <Divider />
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{ background: "#222222" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{ width: "100%", flexShrink: 0 }}
            style={{ color: "white" }}
          >
            Which Token Standard Song Tiger NFTs support.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
            Our Non Fungible tokens are ETC1155 compatible.
          </Typography>
        </AccordionDetails>
        <Divider />
      </Accordion>
    </div>
  );
}
