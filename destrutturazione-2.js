const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

  const{name:myName,age:myAge}=student.info;
  console.log(myName);
  console.log(myAge);
  
  const{grades}=student;
  console.log(grades);
