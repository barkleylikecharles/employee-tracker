use employee_DB;

INSERT INTO department (department_name)
VALUES ("sales"),
    ("finance"),
    ("legal"),
    ("engineering");

SELECT * FROM department;

INSERT INTO role (title, salary, dept_id)
VALUES ("software engineer", 110000, 4),
    ("accounting manager", 100000, 2),
    ("engineering manager", 200000, 4),
    ("accountant", 75000, 2),
    ("sales manager", 120000, 1),
    ("salesperson", 50000, 1),
    ("general counsel", 210000, 3),
    ("associate attorney", 150000, 3);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, dept_id)
VALUES ("Verona", "Nelson", 4, 2),
     ("Bryan", "Daines", 7, NULL),
     ("Nancy", "Birdd", 1, 4),
     ("Peter", "Allen", 8, 3),
     ("Henley", "Nelson", 5, NULL);

SELECT * FROM employee;