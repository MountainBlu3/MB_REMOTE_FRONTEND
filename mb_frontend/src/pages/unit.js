import {
    Box,
    Button,
    Grid,
    Stack,
    Switch,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function UnitPage() {
    const main = 1400;
    const mobileScreen = 500;
    const md = 100 / main;
    const size = 1358 / main;
    const sm = 958 / main;
    const xs = 600 / main;
  
    const ta = 100 / mobileScreen;
  
    const [val, setVal] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [font, setFont] = useState(0);
  
    const addNew = () => {
      val.unshift("0");
      setVal([...val]);
    };
  
    const handleChange = (e, i) => {
      val[i] = e.target.value;
      setVal([...val]);
    };
  
    const handleFont = (value) => {
      const [desktop, mobile] = value.split(" ");
      const em = mobile / 18
      // const em = 14 / (mobile *ta)
      const result = `{xs:"${(em).toFixed(2)}em", md:"${(desktop * md).toFixed(2)}vw"}`;
      setFont(result)
    };
    return (
      <Grid container>
        <Grid item xs={8}>
          <Stack direction={"row"} width={{ xs: "100%", sm: "50" }}>
            <Button onClick={addNew}>
              <Typography variant="body2">ADD </Typography>
            </Button>
            <Switch value={isMobile} onChange={(e) => setIsMobile(!isMobile)} />
          </Stack>
  
          <Stack
            flexWrap={"wrap"}
            direction={"row"}
            gap="1.5vw"
            width={{ xs: "100%", sm: "50%" }}
          >
            {val.map((item, i) => {
              console.log(item);
              const [value, mobile] = item?.split(" ");
              const smValue = value * sm;
              const mobileValue = mobile && mobile * size;
  
              return (
                <Box key={`${i}`}>
                  <TextField
                    value={item || ""}
                    onChange={(e) => handleChange(e, i)}
                  />
                  {isMobile ? (
                    <>
                      <Typography variant="h5">
                        {`{`}xs:"{(mobile * size).toFixed(0)}px",
                        {mobileValue < smValue
                          ? `sm:"${(value * sm).toFixed(0)}px",`
                          : ""}
                        md:"{(value * md).toFixed(2)}vw"
                        {`}`}
                      </Typography>
                      <Typography variant="h5">
                        {`{`}xs:"{(mobile * ta).toFixed(2)}vw", md:"
                        {(value * md).toFixed(2)}vw"
                        {`}`}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="h5">
                      {`{`}xs:"{(value * xs).toFixed(0)}px", sm:"
                      {(value * sm).toFixed(0)}px", md:"{(value * md).toFixed(2)}
                      vw"
                      {`}`}
                    </Typography>
                  )}
                  <Typography variant="h5">
                    size: {(value * size).toFixed(0)}px
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <TextField onChange={(e) => handleFont(e.target.value)} />
          <Typography variant="h5">{font}</Typography>
        </Grid>
      </Grid>
    );
  }