{
  // Problem 5 solutions:: calculate average Grade

  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): number {
    const total = student.grades.reduce((sum, mark) => sum + mark, 0);
    return total / student.grades.length;
  }

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob)
}
