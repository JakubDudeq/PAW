__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jakub Dudek 4D"

from models.Grades import Grades
from models.Student import Student
from models.Teacher import Teacher
from models.Student import Student
from models.Subject import Subject
import year_grade

from typing import List

import datetime
import json

teachers: List[Teacher] = []
subjects: List[Subject] = []
students: List[Student] = []
grades :  List[Grades]  = []

plik = open("teachers.txt", "r")
for line in plik:
    lines = line.strip().split()
    object = Teacher(int(lines[0]), str(lines[1]), str(lines[2]))
    teachers.append(object)
plik.close()

plik = open("subjects.txt", "r")
for line in plik:
    lines = line.strip().split()
    teacher_line = lines[2]

    for teacher in teachers:
       if teacher._id == int(teacher_line): 
            object = Subject(int(lines[0]), str(lines[1]), teacher)
            subjects.append(object)
            break
plik.close()

plik = open("students.txt", "r")
for line in plik:
    lines = line.strip().split()
    birthdate = datetime.datetime.strptime(lines[3], '%Y-%m-%d').date() 
    object = Student(int(lines[0]), str(lines[1]), str(lines[2]), birthdate)
    students.append(object)
plik.close()

plik = open("grades.txt", "r")
for line in plik:
    lines = line.strip().split()
    student_obj: Student = None
    subject_obj: Subject = None
    for student in students:
        if student._id == int(lines[0]):
            student_obj = student
    for subject in subjects:
        if subject._id == int(lines[1]):
            subject_obj = subject

    if lines[2].split(","):
        grades_list = []
        for grade in lines[2].split(","):
            grades_list.append(int(grade))
    else:
        grades_list = []


    if student_obj is not None and subject_obj is not None:
        object = Grades(student_obj, subject_obj, grades_list)
        grades.append(object)
plik.close()


student_data = {}

for student in students:
    print(f"{student.first_name} {student.last_name} ({student.age}):")
    
    student_grades: List[Grades] = []
    for grade in grades:
        if grade.student._id == student._id:
            student_grades.append(grade)
    
    studentJSON = {
        f"{student.first_name} {student.last_name} ({student.age})": {}
    }

    for grade in student_grades:
        print(f" {grade.subject.name}:")
        print(f"\tOceny: ", end="")
        grade_values = grade.get_grades()
        grades_string = ""
        for i in range(len(grade_values) - 1):
            grades_string += str(grade_values[i])
            grades_string += ","
        grades_string += str(grade_values[len(grade_values) - 1])
        print(grades_string)
        print(f"\tŚrednia: {grade.get_average()}")
        print(f"\tOcena końcowa: {year_grade.year_grade(grade.get_average())}")

        studentJSON[student.first_name + " " + student.last_name + " (" + str(student.age) + ")"][grade.subject.name] = {
            "Oceny": grades_string,
            "Srednia": grade.get_average(),
            "Ocena Roczna": year_grade.year_grade(grade.get_average())
        }

    student_data.update(studentJSON)
    print()

plik = open("students.json", "w")
json.dump(student_data, plik, indent=4)
plik.close()

for i in range(50):
    print("=")
print()

grades2: List[Grades] = []

plik = open("grades.txt", "r")
for line in plik:
    lines = line.strip().split()
    student_obj: Student = None
    subject_obj: Subject = None
    for student in students:
        if student._id == int(lines[0]):
            student_obj = student
    for subject in subjects:
        if subject._id == int(lines[1]):
            subject_obj = subject

    if lines[2].split(","):
        grades_list = []
        for grade in lines[2].split(","):
            grades_list.append(int(grade))
    else:
        grades_list = []


    if student_obj is not None and subject_obj is not None:
        new_list = [lines[1], grades_list]
        grades2.append(new_list)
plik.close()

def remove_duplicates(x):
    seen = set()
    result = []
    for item in x:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

ids_list = []

for list in grades2:
    ids_list.append(list[0])

ids_list = remove_duplicates(ids_list)

grades3 = []

for index in ids_list:
    new_list2 = []
    for list in grades2:
        if list[0] == index:
            for element in list[1]:
                new_list2.append(element)
    grades3.append([index, new_list2])


subjects_data = []


for list in grades3:
    subject_id = int(list[0])
    subject_grades = list[1]

    subject = None
    for s in subjects:
        if s._id == subject_id:
            subject = s
            break

    if subject is not None:
        average = round(sum(subject_grades) / len(subject_grades), 2) if subject_grades else 0

        subject_dict = {
            subject.name: {
                "Nauczyciel": f"{subject.teacher.name} {subject.teacher.surname}",
                "Oceny": subject_grades,
                "Srednia": average
            }
        }

        print(f'{subject.name}:')
        print(f"\tNauczyciel: {subject.teacher}")
        print(f"\tOceny: {subject_grades}")
        print(f"\tSrednia: {average}")

    subjects_data.append(subject_dict)

 


plik = open("subjects.json", "w")
json.dump(subjects_data, plik, indent=4)
plik.close()