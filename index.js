// const createEmployeeRecord = (employee) => {
//   return {
//     firstName: employee[0],
//     familyName: employee[1],
//     title: employee[2],
//     payPerHour: employee[3],
//     timeInEvents:  [],
//     timeOutEvents: []
//   }
// }
// TWO DIFFERENT WAYS TOO DO THE FUNCTION 
function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(employees) {
  return employees.map(function (e) {
    return createEmployeeRecord(e);
  });
}

function createTimeInEvent(record, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  record.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  });
  return record;
}
// THEY ARE KIND OF SAME BUT JUST TWO DIFFERENT WAYS

const createTimeOutEvent = (record, dateStamp) => {
  let [date, hour] = dateStamp.split(" ");
  record.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return record;
};

function hoursWorkedOnDate(record, date) {
  let timeIn = record.timeInEvents.find(function (record) {
    return record.date === date;
  });
  let timeOut = record.timeOutEvents.find(function(record){
    return record.date === date;
  });
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate (record, date){
  return hoursWorkedOnDate(record, date) * record.payPerHour;
}

function allWagesFor(record){
  let workDates = record.timeInEvents.map(function(record){
    return record.date;
  });
  return workDates.reduce((total, date) => {
    return total + wagesEarnedOnDate(record, date);
  }, 0);
}

  const findEmployeeByFirstName = (src, employee) =>{
    return src.find(record => { return record.firstName === employee })
  }

  function calculatePayroll(records){
  return records.reduce((total, record) => { return total + allWagesFor(record) }, 0);
} 
