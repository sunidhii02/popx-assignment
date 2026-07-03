import TextField from "@mui/material/TextField";

export default function CustomInput({ label, type = "text", ...props }) {
  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      variant="outlined"
      placeholder={props.placeholder ?? `Enter ${label.toLowerCase()}`}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        mt: 2,

        "& .MuiOutlinedInput-root": {
          borderRadius: "6px",
          backgroundColor: "#F7F7F7",
          height: "56px",

          "& fieldset": {
            borderColor: "#D9D9D9",
          },

          "&:hover fieldset": {
            borderColor: "#6C25FF",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#6C25FF",
            borderWidth: "1.5px",
          },
        },

        "& .MuiInputLabel-root": {
          color: "#6C25FF",
          fontSize: "14px",
          backgroundColor: "#fff",
          padding: "0 4px",
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "#6C25FF",
        },

        "& .MuiInputBase-input::placeholder": {
          color: "#919191",
          opacity: 1,
        },
      }}
      {...props}
    />
  );
}