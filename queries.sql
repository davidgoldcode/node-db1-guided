select * 
from product;

-- view a list of employees
select * 
from employee;

-- selecting specific columns
select id, productName, supplierId 
from product;

select FirstName, LastName, Title 
from employee;

-- add the electronics & books categories
insert into category (CategoryName, Description)
values ('Electronics', 'Anything that uses electricity or batteries')
, ('Books', 'For those hungry for knowledge');

-- wild card
select * from category
where categoryName like 'c%n%s';

-- update example
update category set description = 'Cool Gadgets'
where id = 9; -- REMEMBER THE WHERE!!!!


-- remove 
delete from category
where id = 10; --REMEMBER THE WHERE

-- list the data sorted by a column
select * 
from category
order by categoryName;

select * 
from employee
order by City, LastName, FirstName;

-- the 5 most expensive products
select * from product
order by UnitPrice desc
limit 5;