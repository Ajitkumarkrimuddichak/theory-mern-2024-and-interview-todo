// const employees = [
//   { empId: 1, name: "Ajit" },
//   { empId: 2, name: "Ram" },
//   { empId: 3, name: "Sarsvati" },
// ];
// employees.find((item, i, self) => item.empId === 1); //find method Object Return karata hai

//Own myFind method create
Array.prototype.myFind = function (callback) {
  if (!callback) {
    throw Error("Undefined is not a function");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      return arr[i];
    }
  }
  return undefined;
};

employees.myFind((item) => item.empId === 2);
