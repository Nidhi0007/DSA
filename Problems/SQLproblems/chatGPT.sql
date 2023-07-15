1. -- Consider a database table called "employees" with the following columns: employee_id (integer), first_name (text), last_name (text), salary (decimal), and hire_date (date).

-- Write an SQL query to retrieve the top 5 employees with the highest salaries, ordered by salary in descending order.

select * from employees order by salary desc limit 5;


-- 2.Consider a database table called products with the following schema:
-- products
-- --------
-- product_id (integer)
-- product_name (varchar)
-- price (decimal)
-- category_id (integer)
-- Write an SQL query to retrieve the total count of products in each category, ordered by the category with the highest count first.

SELECT category_id, COUNT(*) AS product_count
FROM products
GROUP BY category_id
ORDER BY product_count DESC;

-- Question 3:
-- Consider a database table called orders with the following schema:
-- orders
-- ------
-- order_id (integer)
-- order_date (date)
-- customer_id (integer)
-- Write an SQL query to find the customer who placed the most number of orders
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC
LIMIT 1;


-- Question 4:
-- Consider a database table called invoices with the following schema:
-- invoices
-- --------
-- invoice_id (integer)
-- invoice_date (date)
-- total_amount (decimal)
-- customer_id (integer)
-- Write an SQL query to retrieve the total amount of invoices for each month in the year 2022, ordered by the month.



SELECT 
    DATE_FORMAT(invoice_date, '%Y-%m') AS month,
    SUM(total_amount) AS total_invoice_amount
FROM 
    invoices
WHERE 
    YEAR(invoice_date) = 2022
GROUP BY 
    month
ORDER BY 
    month;


-- Question 5:
-- Consider a database table called students with the following schema:
-- students
-- --------
-- student_id (integer)
-- student_name (varchar)
-- date_of_birth (date)
-- grade (varchar)
-- Write an SQL query to retrieve the count of students in each grade, ordered by the grade in ascending order.
SELECT grade, COUNT(*) AS student_count
FROM students
GROUP BY grade
ORDER BY grade ASC;

-- JOIN

-- Problem 1:
-- Consider two tables, "customers" and "orders", with the following columns:

-- Table "customers":

-- customer_id (integer)
-- first_name (text)
-- last_name (text)

-- Table "orders":

-- order_id (integer)
-- order_date (date)
-- customer_id (integer)
-- Write an SQL query to retrieve the first and last names of customers who have placed orders.

select c.first_name, c.last_name from customers as c inner join order o on c.customer_id = o.customer_id;


-- Given three tables, "students", "courses", and "enrollments", with the following columns:

-- Table "students":

-- student_id (integer)
-- first_name (text)
-- last_name (text)

-- Table "courses":

-- course_id (integer)
-- course_name (text)

-- Table "enrollments":

-- enrollment_id (integer)
-- student_id (integer)
-- course_id (integer)
-- Write an SQL query to retrieve the first and last names of students along with the courses they are enrolled in.


SELECT s.first_name, s.last_name, c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;



-- Consider two tables, "employees" and "departments", with the following columns:

-- Table "employees":

-- employee_id (integer)
-- first_name (text)
-- last_name (text)
-- department_id (integer)
-- salary (decimal)


-- Table "departments":

-- department_id (integer)
-- department_name (text)
-- Write an SQL query to retrieve the average salary for each department, along with the department name.

select avg(e.salaries), d.department_name from employees e inner join departments d on e.department_id=d.department_id group by d.department_name;


-- Problem:
-- Consider the following database tables:
-- --------
-- student_id (integer)
-- student_name (varchar)
-- major_id (integer)

-- majors
-- ------
-- major_id (integer)
-- major_name (varchar)
-- Write an SQL query to retrieve the names of students along with their corresponding major names. However, if a student does not have a major assigned (major_id is NULL), display "Undeclared" as the major name for that student.
SELECT s.student_name, COALESCE(m.major_name, 'Undeclared') AS major_name
FROM students s
LEFT JOIN majors m ON s.major_id = m.major_id;

-- . The COALESCE function is used to replace NULL major names with the value "Undeclared". 



-- Given three tables, "orders", "order_items", and "products", with the following columns:

-- Table "orders":

-- order_id (integer)
-- order_date (date)
-- customer_id (integer)

-- Table "order_items":

-- item_id (integer)
-- order_id (integer)
-- product_id (integer)
-- quantity (integer)

-- Table "products":

-- product_id (integer)
-- product_name (text)
-- price (decimal)
-- Write an SQL query to find the total sales amount for each order, along with the order ID and customer ID.


select sum(p.price*o.quantity) , o.order_id, os.customer_id as total from products p inner join order_items o on o.product_id=p.product_id 
inner join orders os on os.order_id= o.order_id group by o.order_id;