__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jakub Dudek 4D"

from datetime import date



class Student:
    def __init__(self, _id: int, first_name: str, last_name: str, birth_date: date):
        self._id = _id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_date = birth_date


    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age
    

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.age})"
    