import localdata from "../localdata.json" assert { type: "json" };

const printCalendar = (month) => {
  console.log(localdata.WEEKS.map((w) => w.padStart(2)).join(""));
  const d = new Date(2023, month, 1, 21, 30, 0);
  let outStr = "   ".repeat(d.getDay());
  for (let i = 0; i < 30; i += 1) {
    outStr += d.getDate().toString().padStart(3);
    if (d.getDay() === 6) outStr += "\n";
    d.setDate(d.getDate() + 1);
  }
  console.log(outStr);
};

export { printCalendar };
