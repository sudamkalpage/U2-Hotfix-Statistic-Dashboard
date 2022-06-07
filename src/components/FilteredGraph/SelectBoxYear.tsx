import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface SelectProps {
  handleSelection: (year: number) => void;
  year: number;
}

export default function SelectAutoWidth(Props: SelectProps) {
  const [year, setYear] = React.useState(Props.year);

  const handleChange = (event: any) => {
    setYear(event.target.value);
    Props.handleSelection(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={year}
          onChange={handleChange}
          autoWidth
          defaultValue={new Date().getFullYear()}
          label="Year"
          size="small"
        >
          <MenuItem value={0}>2019</MenuItem>
          <MenuItem value={1}>2020</MenuItem>
          <MenuItem value={2}>2021</MenuItem>
          <MenuItem value={3}>2022</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
