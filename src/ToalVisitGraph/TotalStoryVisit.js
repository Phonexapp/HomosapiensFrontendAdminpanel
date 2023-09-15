import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Select, MenuItem, FormControl, InputLabel, Grid } from '@material-ui/core';

const data = [
  { weekly: "sun",  value: 10 },
  { weekly: "Tue",  value: 20 },
  { weekly: "Wed", value: 60 },
  { weekly: "Thu", value: 100 },
  { weekly: "Fri",  value: 550 },
  { weekly: "Sat", value: 350 },
  { year: 2020, month: 'Jan', value: 50 },
  { year: 2021, month: 'Feb', value: 80 },
  { year: 2022, month: 'Mar', value: 200 },
  { year: 2023, month: 'Apr', value: 180 },
  { year: 2025, month: 'May', value: 220 },
  { year: 2026, month: 'June', value: 220 },
  { year: 2027, month: 'July', value: 220 },
  { year: 2028, month: 'Aug', value: 500 },
  { year: 2029, month: 'Sep', value: 220 },
  { year: 2030, month: 'Oct', value: 220 },
  { year: 2031, month: 'Nov', value: 220 },
  { year: 2023, month: 'Dec', value: 900 },
];

// const WeeklyData = [
//   { weekly: "sun",  value: 50 },
//   { weekly: "Tue",  value: 200 },
//   { weekly: "Wed", value: 180 },
//   { weekly: "Thu", value: 220 },
//   { weekly: "Fri",  value: 220 },
//   { weekly: "Sat", value: 220 },
// ];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    backgroundColor: 'transparent',
  },
  formControl: {
    margin: theme.spacing(1), // Adjust spacing
    minWidth: 120,
  },
}));

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const TotalStoryVisit = () => {
  const classes = useStyles();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [SelectedWeekly, setSelectedWeekly] = useState('');

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleChangeWeekly = (event) => {
    setSelectedWeekly(event.target.value);
  };


  const uniqueMonths = [...new Set(data.map((entry) => entry.month))];
  const uniqueYears = [...new Set(data.map((entry) => entry.year))];
  const uniqueWeekly = [...new Set(data.map((entry) => entry.weekly))];


  const filteredData = data.filter(
    (entry) =>
      (selectedMonth === '' || entry.month === selectedMonth) &&
      (selectedYear === '' || entry.year === selectedYear) &&
      (SelectedWeekly === '' || entry.weekly === SelectedWeekly)
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Weekly</InputLabel>
              <Select value={SelectedWeekly} onChange={handleChangeWeekly}>
                <MenuItem value="">All</MenuItem>
                {uniqueWeekly.map((weekly) => (
                  <MenuItem key={weekly} value={weekly}>
                    {weekly}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Month</InputLabel>
              <Select value={selectedMonth} onChange={handleChangeMonth}>
                <MenuItem value="">All</MenuItem>
                {uniqueMonths.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel>Year</InputLabel>
              <Select value={selectedYear} onChange={handleChangeYear}>
                <MenuItem value="">All</MenuItem>
                {uniqueYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <BarChart
          width={800}
          height={400}
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Paper>
    </ThemeProvider>
  );
};

export default TotalStoryVisit;





