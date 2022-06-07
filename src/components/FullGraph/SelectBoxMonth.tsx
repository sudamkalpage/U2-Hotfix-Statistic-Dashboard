import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface SelectProps {
  handleSelection: (month: number) => void;
  month: number;
}

export default function SelectAutoWidth(Props: SelectProps) {
  const [month, setMonth] = React.useState(Props.month);
  // new Date().getMonth()
  const handleChange = (event: any) => {
    setMonth(event.target.value);
    Props.handleSelection(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={month}
          onChange={handleChange}
          autoWidth
          label="Month"
          size="small"
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
