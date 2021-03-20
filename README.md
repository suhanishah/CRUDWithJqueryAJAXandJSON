# CRUDWithJqueryAJAXandJSON
CRUD operations using Jquery AJAX and JSON.

Server side code is intentionally kept simple. When using in real applications - add server side validaitons and possibly add repository pattern. I would also use AutoMapper to map the entities on Edit. 


Before starting the project -> Create Database (EmployeeDB) 
and Execute the query below to add table:
CREATE TABLE dbo.Employee
(
EmployeeId INT IDENTITY NOT NULL,
Name NVARCHAR(50),
Age NVARCHAR(50),
State NVARCHAR(50),
Country NVARCHAR(50),
CONSTRAINT PK_Employee PRIMARY KEY (EmployeeId)
)
GO


