// student_database.js

const studentDatabase = [
  {
    htNo: "25G01A4301",
    name: "A B SURESH",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.03,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 22, external: 20, total: 42, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 25, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 22, total: 38, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 43, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 56, total: 81, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4302",
    name: "A G JAMUNA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 43, total: 68, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 41, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 45, total: 72, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 47, total: 74, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 35, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 59, total: 85, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 60, total: 87, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 25, external: 45, total: 70, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4303",
    name: "A M DHANUSH",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.79,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 18, external: 16, total: 34, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 26, total: 45, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 36, total: 57, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 18, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 20, external: 22, total: 42, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 38, total: 61, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 48, total: 65, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 58, total: 83, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 40, total: 55, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4304",
    name: "A P YAMINI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 45, total: 73, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 47, total: 73, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 36, total: 56, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 36, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 35, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 63, total: 89, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 62, total: 89, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 66, total: 94, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 23, external: 48, total: 71, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4305",
    name: "A PREETHI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.00,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 28, total: 54, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 20, external: 5, total: 25, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 19, external: 5, total: 24, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 14, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 17, total: 42, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 60, total: 83, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 60, total: 85, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 55, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 50, total: 65, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4306",
    name: "A VISHNUVARDHAN",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.82,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 37, total: 62, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 48, total: 73, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 25, external: 51, total: 76, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 48, total: 75, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 21, external: 35, total: 56, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 47, total: 74, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 55, total: 80, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 27, external: 47, total: 74, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4307",
    name: "AAVULA DHARANI YADAV",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.85,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 56, total: 83, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 57, total: 84, credits: 3, grade: "A", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 61, total: 88, credits: 3, grade: "A", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 51, total: 79, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 28, external: 46, total: 74, credits: 3, grade: "B", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 59, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 67, total: 94, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 22, external: 62, total: 84, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4308",
    name: "ALLUGANTI VARUN KUMAR REDDY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.79,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 16, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 22, external: 29, total: 51, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 17, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 22, external: 27, total: 49, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 18, external: 24, total: 42, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 24, external: 44, total: 68, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 45, total: 63, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 57, total: 82, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 38, total: 53, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4309",
    name: "AMBATI AJURI LAKSHMI POOJITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.56,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 50, total: 78, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 35, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 26, external: 34, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 36, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 36, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 67, total: 95, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 68, total: 95, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 62, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 43, total: 64, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4310",
    name: "ANDHI NAGA PRANATHI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.26,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 42, total: 71, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 39, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 30, total: 51, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 35, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 20, external: 35, total: 55, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 57, total: 82, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 24, external: 55, total: 79, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 26, external: 48, total: 74, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4311",
    name: "ANGITEELA BHAVANA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.59,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 55, total: 83, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 38, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 2, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 40, total: 68, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 42, total: 67, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 61, total: 88, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 28, external: 66, total: 94, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 62, total: 88, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 19, external: 45, total: 64, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4312",
    name: "ARAVA SOUJANYA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.59,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 44, total: 71, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 25, total: 50, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 25, external: 9, total: 34, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 47, total: 75, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 35, total: 61, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 56, total: 83, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 26, external: 66, total: 92, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 62, total: 88, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 19, external: 58, total: 77, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4313",
    name: "ARDHAMALA SASI KUMAR",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.72,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 21, external: 15, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 20, external: 26, total: 46, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 18, external: 6, total: 24, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 16, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 17, external: 13, total: 30, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 19, external: 48, total: 67, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 45, total: 62, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 20, external: 55, total: 75, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 32, total: 47, credits: 1.5, grade: "E", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4314",
    name: "ATTUKARA YAGNITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.36,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 66, total: 95, credits: 2, grade: "S", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 24, external: 49, total: 73, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 49, total: 78, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 35, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 29, external: 35, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 68, total: 95, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 28, external: 67, total: 95, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 68, total: 96, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 24, external: 60, total: 84, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4315",
    name: "AYYAPPA YUVANSANKAR",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.92,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 13, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 27, total: 46, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 37, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 19, total: 43, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 18, external: 18, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 47, total: 69, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 20, external: 55, total: 75, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 56, total: 79, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 24, external: 53, total: 77, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4316",
    name: "B JHANSI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.03,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 15, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 16, external: 25, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 9, total: 24, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 20, total: 47, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 18, external: 18, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 54, total: 77, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 20, external: 42, total: 62, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 24, external: 63, total: 87, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 20, external: 49, total: 69, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4317",
    name: "B SHALINI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.38,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 31, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 25, total: 44, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 25, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 22, total: 49, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 21, total: 44, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 19, external: 57, total: 76, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 46, total: 63, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 20, external: 62, total: 82, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 50, total: 65, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4318",
    name: "BALA KOWSHIK YADAV",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.10,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 35, total: 61, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 24, external: 36, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 22, external: 40, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 25, external: 36, total: 61, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 22, total: 44, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 49, total: 72, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 19, external: 50, total: 69, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 24, external: 60, total: 84, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 43, total: 58, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4319",
    name: "BATTI SIVAKESAVULU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 1.95,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 16, external: 10, total: 26, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 2, total: 17, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 0, total: 15, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 16, external: 18, total: 34, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 12, total: 28, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 20, external: 44, total: 64, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 40, total: 57, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 21, external: 59, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 30, total: 45, credits: 1.5, grade: "E", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4320",
    name: "BODIREDDY LOHITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.33,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 45, total: 72, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 24, external: 35, total: 59, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 22, external: 42, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 30, total: 54, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 22, total: 49, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 62, total: 90, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 26, external: 67, total: 93, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 67, total: 95, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 45, total: 60, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4321",
    name: "BORRA LALASA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.64,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 51, total: 79, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 29, external: 59, total: 88, credits: 3, grade: "A", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 69, total: 99, credits: 3, grade: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 39, total: 69, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 29, external: 39, total: 68, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 29, external: 66, total: 95, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 70, total: 100, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 69, total: 97, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 24, external: 65, total: 89, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4322",
    name: "BOYA VENU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.38,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 34, total: 61, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 25, total: 42, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 25, total: 40, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 22, external: 23, total: 45, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 18, external: 19, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 24, external: 42, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 21, external: 55, total: 76, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 60, total: 85, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 43, total: 58, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4323",
    name: "BUDAGA VINOD",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.74,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 21, external: 6, total: 27, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 25, total: 44, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 25, total: 45, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 15, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 15, external: 21, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 39, total: 61, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 21, external: 54, total: 75, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 57, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 46, total: 61, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 78, total: 78, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4324",
    name: "BUSUPALLI ARUN KUMAR REDDY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.87,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 8, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 25, total: 42, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 17, external: 16, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 21, external: 18, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 19, external: 19, total: 38, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 42, total: 64, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 20, external: 47, total: 67, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 60, total: 83, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 40, total: 55, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 80, total: 80, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4325",
    name: "C DILLI BABU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.26,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 34, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 9, total: 24, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 25, external: 36, total: 61, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 20, external: 38, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 21, external: 43, total: 64, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 15, external: 42, total: 57, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 22, external: 56, total: 78, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 32, total: 47, credits: 1.5, grade: "E", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4326",
    name: "C S PRAVALIKA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 9.13,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 29, external: 56, total: 85, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 28, external: 47, total: 75, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 70, total: 100, credits: 3, grade: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 42, total: 71, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 55, total: 85, credits: 3, grade: "A", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 65, total: 93, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 29, external: 64, total: 93, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 67, total: 96, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 70, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4327",
    name: "CHADALAVADA YASASWINI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.28,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 30, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 24, external: 39, total: 63, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 25, external: 28, total: 53, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 35, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 29, external: 37, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 60, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 50, total: 75, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 67, total: 94, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 20, external: 58, total: 78, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4329",
    name: "CHINNAGOVINDAPPAGARI DIVYA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.46,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 24, external: 61, total: 85, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 22, external: 40, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 17, external: 25, total: 42, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 26, external: 40, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 36, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 54, total: 80, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 22, external: 44, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 68, total: 95, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 22, external: 58, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 97, total: 97, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4330",
    name: "CHITAMBALAM VAMSIKRISHNA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.90,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 10, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 25, total: 40, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 16, external: 11, total: 27, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 21, external: 15, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 18, total: 34, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 46, total: 68, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 20, external: 40, total: 60, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 64, total: 87, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 40, total: 55, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4331",
    name: "CHITTEMREDDY RAJESH REDDY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.72,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 31, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 21, external: 27, total: 48, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 31, total: 46, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 35, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 21, total: 47, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 52, total: 74, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 26, external: 62, total: 88, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 65, total: 88, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 27, external: 57, total: 84, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4332",
    name: "CHITTOORU GEREESHMA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.51,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 30, total: 56, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 21, external: 31, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 25, total: 40, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 25, total: 54, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 17, external: 19, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 19, external: 61, total: 80, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 19, external: 50, total: 69, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 24, external: 61, total: 85, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 53, total: 68, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4333",
    name: "D SINDHU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.92,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 32, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 32, total: 59, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 16, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 22, total: 50, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 23, external: 24, total: 47, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 24, external: 55, total: 79, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 19, external: 53, total: 72, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 58, total: 83, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 16, external: 54, total: 70, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4334",
    name: "DASARI PRAVEEN BABU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.33,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 33, total: 58, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 20, external: 25, total: 45, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 24, external: 33, total: 57, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 38, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 35, total: 57, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 21, external: 42, total: 63, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 21, external: 45, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 22, external: 56, total: 78, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 36, total: 51, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4335",
    name: "DEVALLA GUNASRI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.44,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 33, total: 59, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 28, total: 47, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 19, external: 25, total: 44, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 27, total: 55, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 24, external: 28, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 55, total: 80, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 22, external: 50, total: 72, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 65, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 20, external: 44, total: 64, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4336",
    name: "DEVARAKONDA MOHITH",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 1.03,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 15, external: 26, total: 41, credits: 2, grade: "E", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 4, total: 19, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 12, total: 27, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 15, external: 16, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 15, external: 18, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 15, external: 38, total: 53, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 16, external: "AB", total: 16, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4337",
    name: "DHANTLA HARIKA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.64,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 24, external: 40, total: 64, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 22, external: 38, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 45, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 41, total: 69, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 36, total: 61, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 59, total: 84, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 58, total: 83, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 63, total: 90, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 21, external: 65, total: 86, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4338",
    name: "DONDU LALITHKUMAR",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 1.36,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 18, external: 12, total: 30, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 16, external: 9, total: 25, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 6, total: 21, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 19, external: 16, total: 35, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 15, external: 12, total: 27, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 16, external: 41, total: 57, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 37, total: 54, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 18, external: 50, total: 68, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 77, total: 77, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4339",
    name: "DONGARA VENU",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.49,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 41, total: 64, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 35, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 26, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 35, total: 59, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 17, external: 23, total: 40, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 21, external: 41, total: 62, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 21, external: 40, total: 61, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 63, total: 86, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 48, total: 63, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 79, total: 79, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4340",
    name: "DUDEKULA BASHEER",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.05,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 19, external: 28, total: 47, credits: 2, grade: "E", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 2, total: 17, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 1, total: 16, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 22, total: 46, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 17, external: 10, total: 27, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 18, external: 55, total: 73, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 15, external: 40, total: 55, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 20, external: 59, total: 79, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 76, total: 76, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4341",
    name: "DUGGULURU SPANDANA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.69,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 24, external: 31, total: 55, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 28, external: 31, total: 59, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 30, external: 56, total: 86, credits: 3, grade: "A", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 35, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 29, external: 21, total: 50, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 57, total: 83, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 63, total: 90, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 64, total: 92, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 23, external: 58, total: 81, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4342",
    name: "E RUSHITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 9.28,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 55, total: 83, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 29, external: 58, total: 87, credits: 3, grade: "A", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 64, total: 93, credits: 3, grade: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 30, external: 44, total: 74, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 30, external: 52, total: 82, credits: 3, grade: "A", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 66, total: 94, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 70, total: 100, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 66, total: 95, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 29, external: 70, total: 99, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4343",
    name: "ERASAPPA RAKSHITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.54,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 19, external: 14, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 18, external: 2, total: 20, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 26, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 13, total: 36, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 19, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 48, total: 74, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 24, external: 55, total: 79, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 55, total: 83, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 16, external: "AB", total: 16, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4344",
    name: "G CHETHAN",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.28,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 16, external: 3, total: 19, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 1, total: 16, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 31, total: 46, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 19, external: 11, total: 30, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 15, external: 11, total: 26, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 15, external: 40, total: 55, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 15, external: 40, total: 55, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 20, external: 60, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 73, total: 73, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4345",
    name: "GAJJAPPAGARI SIDDARTHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.21,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 14, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 21, external: 30, total: 51, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 30, total: 50, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 17, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 25, total: 51, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 24, external: 45, total: 69, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 62, total: 89, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 65, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 56, total: 71, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 80, total: 80, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4346",
    name: "GANAPARTHI MOUNIKA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.90,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 10, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 20, external: 5, total: 25, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 25, total: 45, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 16, total: 43, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 15, total: 40, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 48, total: 71, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 40, total: 57, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 64, total: 89, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 17, external: 38, total: 55, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4347",
    name: "GANDLA DHANALAKSHMI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.05,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 38, total: 64, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 51, total: 78, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 28, external: 54, total: 82, credits: 3, grade: "A", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 25, total: 53, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 29, external: 41, total: 70, credits: 3, grade: "B", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 62, total: 89, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 26, external: 60, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 63, total: 92, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 16, external: 62, total: 78, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4348",
    name: "GANGA RANGA SWAMY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.33,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 1, total: 24, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 18, external: 2, total: 20, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 18, external: 25, total: 43, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 24, total: 48, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 20, external: 19, total: 39, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 20, external: 41, total: 61, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 15, external: 40, total: 55, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 22, external: 58, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 73, total: 73, credits: 0.5, grade: "B", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4349",
    name: "GANJI JASVANTH REDDY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.92,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 26, total: 53, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 19, external: 29, total: 48, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 43, total: 70, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 25, external: 40, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 38, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 19, external: 44, total: 63, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 22, external: 48, total: 70, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 21, external: 60, total: 81, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 38, total: 53, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 81, total: 81, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4350",
    name: "GATTU DHANUSH",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.59,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 21, external: 11, total: 32, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 27, total: 42, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 20, external: 25, total: 45, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 26, total: 54, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 22, external: 22, total: 44, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 21, external: 38, total: 59, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 21, external: 48, total: 69, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 23, external: 61, total: 84, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 45, total: 60, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4351",
    name: "GIDDALURU GANGA VYSHNAVI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.33,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 10, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 20, external: 32, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 19, external: 31, total: 50, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 40, total: 67, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 35, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 57, total: 82, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 49, total: 74, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 63, total: 89, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 18, external: 50, total: 68, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4352",
    name: "GUDE HARSHITHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.77,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 25, total: 52, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 18, external: 32, total: 50, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 26, total: 47, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 38, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 19, total: 46, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 28, external: 62, total: 90, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 60, total: 88, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 17, external: 58, total: 75, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4353",
    name: "GUMMAKONDA SATHISH KUMAR",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 5.97,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 24, external: 25, total: 49, credits: 2, grade: "E", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 21, external: 29, total: 50, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 37, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 21, total: 48, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 26, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 53, total: 79, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 63, total: 90, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 69, total: 97, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 17, external: 54, total: 71, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4355",
    name: "GURRAMKONDA BHARATH REDDY",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 1.59,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 8, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 10, total: 25, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 15, external: 3, total: 18, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 23, external: 14, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 15, total: 31, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 22, external: 38, total: 60, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 40, total: 57, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 24, external: 61, total: 85, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 84, total: 84, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4356",
    name: "HEMACHANDRAN GANGOTHRI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.46,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 27, total: 53, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 17, external: 32, total: 49, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 14, total: 35, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 27, total: 55, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 18, total: 44, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 24, external: 54, total: 78, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 48, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 26, external: 61, total: 87, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 42, total: 57, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4357",
    name: "INDUKURI PREM SWAROOP",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 4.44,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 23, external: 26, total: 49, credits: 2, grade: "E", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 16, external: 32, total: 48, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 24, external: 27, total: 51, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 26, external: 22, total: 48, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 16, external: 22, total: 38, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 19, external: 53, total: 72, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 17, external: 49, total: 66, credits: 1, grade: "C", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 21, external: 59, total: 80, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 49, total: 64, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4358",
    name: "K DIVYA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.51,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 28, external: 51, total: 79, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 25, external: 38, total: 63, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 23, external: 25, total: 48, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 36, total: 64, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 36, total: 63, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 23, external: 63, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 65, total: 92, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 25, external: 68, total: 93, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 19, external: 70, total: 89, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4359",
    name: "KG JANSI RANI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.15,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 30, total: 57, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 43, total: 69, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 29, external: 62, total: 91, credits: 3, grade: "S", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 35, total: 62, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 25, external: 42, total: 67, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 60, total: 85, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 66, total: 96, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 64, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 24, external: 70, total: 94, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4360",
    name: "KASANURU SIDDARTHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.77,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 24, external: 30, total: 54, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 18, external: 34, total: 52, credits: 3, grade: "D", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 22, external: 25, total: 47, credits: 3, grade: "E", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 24, external: 19, total: 43, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 19, external: 22, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 18, external: 38, total: 56, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 20, external: 56, total: 76, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: "AB", total: 15, credits: 0, grade: "-Ab-", result: "FAIL" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4361",
    name: "KAMALAPADU ANAND",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 8.21,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 54, total: 81, credits: 2, grade: "A", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 27, external: 43, total: 70, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 28, external: 45, total: 73, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 28, external: 41, total: 69, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 36, total: 63, credits: 3, grade: "C", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 67, total: 94, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 30, external: 70, total: 100, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 69, total: 98, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 18, external: 54, total: 72, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4362",
    name: "KAMASANI LAKSHMI PRASANNA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 3.05,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 9, total: 34, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 16, external: 25, total: 41, credits: 3, grade: "E", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 21, external: 12, total: 33, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 25, external: 16, total: 41, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 16, total: 42, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 48, total: 73, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 23, external: 50, total: 73, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 64, total: 91, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 17, external: 38, total: 55, credits: 1.5, grade: "D", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 85, total: 85, credits: 0.5, grade: "A", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4363",
    name: "KAMASANI YASWANI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.64,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 36, total: 63, credits: 2, grade: "C", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 24, external: 36, total: 60, credits: 3, grade: "C", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 27, external: 31, total: 58, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 38, total: 67, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 27, external: 45, total: 72, credits: 3, grade: "B", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 59, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 27, external: 64, total: 91, credits: 1, grade: "S", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 61, total: 90, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 18, external: 53, total: 71, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4364",
    name: "KAMINI SHIREESHA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 2.21,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 25, external: 12, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 15, external: 17, total: 32, credits: 0, grade: "F", result: "FAIL" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 22, external: 15, total: 37, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 27, external: 20, total: 47, credits: 0, grade: "F", result: "FAIL" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 19, external: 16, total: 35, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 25, external: 53, total: 78, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 18, external: 40, total: 58, credits: 1, grade: "D", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 27, external: 60, total: 87, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 15, external: 48, total: 63, credits: 1.5, grade: "C", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4365",
    name: "KANAPALA JAHNAVI",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 6.64,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 26, external: 25, total: 51, credits: 2, grade: "D", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 23, external: 48, total: 71, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 25, external: 46, total: 71, credits: 3, grade: "B", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 29, external: 37, total: 66, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 24, external: 22, total: 46, credits: 0, grade: "F", result: "FAIL" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 26, external: 60, total: 86, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 25, external: 62, total: 87, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 28, external: 61, total: 89, credits: 1.5, grade: "A", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 17, external: 60, total: 77, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 92, total: 92, credits: 0.5, grade: "S", result: "PASS" }
    ]
  },
  {
    htNo: "25G01A4366",
    name: "KANAPARTHI AMULYA",
    branch: "ARTIFICIAL INTELLIGENCE",
    semester: "I",
    sgpa: 7.79,
    subjects: [
      { code: "23HM0001", name: "COMMUNICATIVE ENGLISH", internal: 27, external: 51, total: 78, credits: 2, grade: "B", result: "PASS" },
      { code: "23BS0005", name: "CHEMISTRY", internal: 26, external: 50, total: 76, credits: 3, grade: "B", result: "PASS" },
      { code: "23BS0001", name: "LINEAR ALGEBRA & CALCULUS", internal: 25, external: 32, total: 57, credits: 3, grade: "D", result: "PASS" },
      { code: "23ES0101", name: "BASIC CIVIL & MECHANICAL ENGINEERING", internal: 26, external: 39, total: 65, credits: 3, grade: "C", result: "PASS" },
      { code: "23ES0501", name: "INTRODUCTION TO PROGRAMMING", internal: 26, external: 49, total: 75, credits: 3, grade: "B", result: "PASS" },
      { code: "23LC0001", name: "COMMUNICATIVE ENGLISH LAB", internal: 27, external: 60, total: 87, credits: 1, grade: "A", result: "PASS" },
      { code: "23LC0004", name: "CHEMISTRY LAB", internal: 24, external: 50, total: 74, credits: 1, grade: "B", result: "PASS" },
      { code: "23LC0301", name: "ENGINEERING WORKSHOP", internal: 29, external: 64, total: 93, credits: 1.5, grade: "S", result: "PASS" },
      { code: "23LC0501", name: "COMPUTER PROGRAMMING LAB", internal: 20, external: 53, total: 73, credits: 1.5, grade: "B", result: "PASS" },
      { code: "23HM0002", name: "HEALTH AND WELLNESS, YOGA AND SPORTS", internal: null, external: 98, total: 98, credits: 0.5, grade: "S", result: "PASS" }
    ]
  }
];

export default studentDatabase;