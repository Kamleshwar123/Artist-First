import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import GoldCategory from "../../Icons/GoldCategory";
const useStyles = makeStyles((theme) => ({
  categoryBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "35px",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    paddingBottom: "30px",
    marginBottom: "30px",
  },
  gold: {
    marginLeft: "20px",
    fontSize: "16px",
  },
  privilegesBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default function Tier({ data, tier }) {
  const classes = useStyles();
  const [tierDetails, setTierDetails] = useState();
  let tierData;
  let color;
  switch (tier) {
    case "gold":
      tierData = 1;
      color = "#FFAB2D";
      break;
    case "silver":
      tierData = 3;
      color = "#C0C0C0";
      break;
    case "platinum":
      tierData = 2;
      color = "#E5E4E2";
      break;
  }
  useEffect(() => {
    if (tierData)
      fetch(`/api/tier-privileges/${tierData}?populate=*`)
        .then((data) => data.json())
        .then((d) => setTierDetails(d));
  }, [tierData]);
  return (
    <div>
      <div className={classes.categoryBox}>
        <div style={{ display: "flex" }}>
          <GoldCategory color={color} />
          <span style={{ color: color }} className={classes.gold}>
            {tierDetails?.data?.attributes?.asset_tier_mnemonics}
          </span>
        </div>
        <span>Total Minted Cards - 300</span>
      </div>
      <div className={classes.privilegesBox}>
        <span style={{ marginBottom: "10px", fontSize: "14px" }}>
          Privilidges
        </span>
        {/\d/.test(tierDetails?.data?.attributes?.Privilege1) &&
        /[a-zA-Z]/.test(tierDetails?.data?.attributes?.Privilege1) ? (
          typeof tierDetails?.data?.attributes?.Privilege1 == "string" ? (
            <span>
              <span style={{ color: "#E14084" }}>❤️</span>{" "}
              {tierDetails?.data?.attributes?.Privilege1}
            </span>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {/\d/.test(tierDetails?.data?.attributes?.Privilege2) &&
        /[a-zA-Z]/.test(tierDetails?.data?.attributes?.Privilege2) ? (
          typeof tierDetails?.data?.attributes?.Privilege2 == "string" ? (
            <span>
              <span style={{ color: "#E14084" }}>❤️</span>{" "}
              {tierDetails?.data?.attributes?.Privilege2}
            </span>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {/\d/.test(tierDetails?.data?.attributes?.Privilege3) &&
        /[a-zA-Z]/.test(tierDetails?.data?.attributes?.Privilege3) ? (
          typeof tierDetails?.data?.attributes?.Privilege3 == "string" ? (
            <span>
              <span style={{ color: "#E14084" }}>❤️</span>{" "}
              {tierDetails?.data?.attributes?.Privilege3}
            </span>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {/\d/.test(tierDetails?.data?.attributes?.Privilege4) &&
        /[a-zA-Z]/.test(tierDetails?.data?.attributes?.Privilege4) ? (
          typeof tierDetails?.data?.attributes?.Privilege4 != "string" ? (
            <span>
              <span style={{ color: "#E14084" }}>❤️</span>{" "}
              {tierDetails?.data?.attributes?.Privilege4}
            </span>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
