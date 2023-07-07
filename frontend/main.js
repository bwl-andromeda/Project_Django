class Student {
    constructor(name, age, averageScore) {
      this.name = name;
      this.age = age;
      this.averageScore = averageScore;
    }
  
    increaseAge = () => {
      this.age += 1;
    };
  
    increaseScore = (amount) => {
      this.GPA += amount;
    };
  
    getStatus = () => {
      if (this.GPA >= 90) {
        return 'отличник';
      } else if (this.GPA >= 75) {
        return 'хорошист';
      } else if (this.GPA >= 60) {
        return 'троечник';
      } else {
        return 'неудовлетворительно';
      }
    };
  
    static maxScore = 0;
    static getMaxScore = (students) => {
      let maxScore = 0;
      for (const student of students) {
        if (student.GPA > maxScore) {
          maxScore = student.GPA;
        }
      }
      return maxScore;
    };
  
    static filterByScore = (students, score) => {
      return students.filter((student) => student.GPA > score);
    };
  }

// Пример использования классов:

// Создание студентов
const student1 = new Student('Иван', 20, 85);
const student2 = new Student('Мария', 19, 92);
const student3 = new Student('Алексей', 21, 78);
const student4 = new Student('Елена', 22, 95);

// Вызов методов для студента
student1.increaseAge();
student1.increaseScore(5);
console.log(student1.getStatus()); // выводит 'хорошист'

// Получение максимального балла среди всех студентов
const students = [student1, student2, student3, student4];
console.log(Student.getMaxScore(students)); // выводит 95

// Фильтрация студентов по среднему баллу
const filteredStudents = Student.filterByScore(students, 80);
console.log(filteredStudents); // выводит [student2, student4]
