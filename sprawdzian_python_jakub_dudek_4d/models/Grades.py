__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jakub Dudek 4D"

from .Student import Student
from .Subject import Subject


from typing import List

class Grades:
    def __init__(self, student: Student, subject: Subject, grades: List[int] = None):
        if grades is None:
            grades = []
        self.grades = grades
        self.student = student
        self.subject = subject

    def add_grade(self, grade: int):
        if grade <= 0 or grade >= 7:
            raise ValueError("Grade must be in <1,6>")
        else:
            self.grades.append(grade)

    def get_grades(self):
        return self.grades 

    def get_average(self):
        if len(self.grades) > 0:
            return round(sum(self.grades) / len(self.grades), 2)
        else:
            return 0 