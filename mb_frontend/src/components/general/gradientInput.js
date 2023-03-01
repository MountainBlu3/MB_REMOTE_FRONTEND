import { styled, TextField } from "@mui/material";

const GradientInput = styled(TextField)(({ theme, dark }) => {
//   const color = dark ? "black" : theme.palette.text.primary;
  return {
    label: {
      textTransform: "capitalize",
    //   color: color,
    },
    "& .MuiInputBase-input": {
      border: "2px solid",
      borderImageSlice: 1,
      color: "white",
      borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
    },
    "&:hover": {
      border: "2px solid",
      borderImageSlice: 1,
      backgroundColor: "transparent",
      borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
    },
    "&.Mui-focused": {
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
    },
  };
});

export default GradientInput;

// export function GradientInput() {
//   return (
//     <TextField
//       variant="outlined"
//       placeholder="Username"
//       sx={{}}
//       InputProps={{
//         sx: {
//           "& .MuiInputBase-input": {
//             border: "2px solid",
//             borderImageSlice: 1,
//             color: "white",
//             borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
//           },
//           "&:hover": {
//             border: "2px solid",
//             borderImageSlice: 1,
//             backgroundColor: "transparent",
//             borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
//           },
//           "&.Mui-focused": {
//             borderImageSlice: 1,
//             borderImageSource: "linear-gradient(180deg, #020415 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #0874D1 91.61%)",
//           },
//         },
//       }}
//     />
//   );
// }
