# Practice Assessment Quiz: SQL

<!-- LO: Define a database and explain the uses for a database -->
<quiz>
  <question>
    <p>True or False: The data of a database will reset when the server resets.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>A database stores persistent data in the backend of a full-stack application. It will not reset when the server resets.</explanation>
  </question>
</quiz>

<!-- LO: Compare and contrast SQL vs NoSQL -->
<quiz>
  <question>
    <p>Identify a characteristic of a NoSQL database.</p>
    <answer correct>Can store records of data in a single set with completely different properties</answer>
    <answer>Has stricter definitions of data than a SQL database</answer>
    <answer>Store data in rows and columns of tables</answer>
    <explanation>A NoSQL database stores data in documents with key-value pairs instead of rows and columns in tables. This means that NoSQL databases can store documents in the same dataset with the same or completely different keys and values. A NoSQL document is like an object. Imagine one JavaScript object that has a `hello` property with an array value. Another JavaScript object can have that same `hello` property, but with a different type of value like a string. Or the second JavaScript object can have more properties than just the `hello` property.</explanation>
  </question>
</quiz>

<!-- LO: Describe the unusual power and danger of SQL commands -->
<quiz>
  <question>
    <p>True or False: `DROP TABLE` statements in SQL **will NOT** erase all your table data permanently.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>`DROP TABLE` statements are dangerous operations in SQL because it will erase all your records in a table. You should execute them with care.</explanation>
  </question>
</quiz>

<!-- LO: Create a database -->
```bash
> sqlite3
```

<quiz>
  <question>
    <p>What will the above command do when executed in the terminal?</p>
    <answer correct>Create a transient in-memory SQLite database</answer>
    <answer>Create a SQLite database file</answer>
    <answer>Use the previous transient in-memory SQLite database</answer>
    <answer>Find the previous SQLite database file</answer>
    <explanation>The `sqlite3` command will create a transient in-memory SQLite database and allow you to execute commands on it in a `sqlite3` CLI shell.</explanation>
  </question>
</quiz>

<!-- LO: Update a single or multiple entries from a table -->
<quiz>
  <question multiple>
    <p>To create a statement to `UPDATE` a single record in a table in SQL, you must do **one or more** of the following:</p>
    <answer correct>Specify the record that you want to update</answer>
    <answer correct>Specify the table that the record is in</answer>
    <answer correct>Specify the properties that you want to change on the record</answer>
    <answer>Specify the database that you want to update the record in</answer>
    <answer>Specify what to do in case of a failure to update</answer>
    <explanation>The `UPDATE` statement in SQL needs the table name that the record is in, which record(s) you want to update, and which properties you want to update on the record(s).</explanation>
  </question>
</quiz>

<!-- LO: Destroy a table -->
<quiz>
  <question>
    <p>What clause should be added to `DROP TABLE cats` to destroy the `cats` table only if it has already been created?</p>
    <answer correct>`IF EXISTS`</answer>
    <answer>`IF FORMED`</answer>
    <answer>`IF CREATED`</answer>
    <answer>nothing should be added</answer>
    <explanation>`DROP TABLE cats IF EXISTS` will drop the table called `cats` if the table has already been created. If not, it will not execute the command to drop a table that has not been created yet.</explanation>
  </question>
</quiz>

<!-- LO: Explain the role of primary and foreign keys in building relationships between data in a relational database -->
<quiz>
  <question>
    <p>True or False: To create an explicit relationship between two tables in a SQL database schema, you need a foreign key in one table to match the primary key in another table.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>You need a foreign key to create an explicit relationship between data in a SQL database schema, BUT you don't need the foreign key to match a primary key. The foreign key can match any columns of any table, and it doesn't even need to match any column exactly. It just needs to match to any value in any column of any table.</explanation>
  </question>
</quiz>

<!-- LO:Create a many-to-many relationship between two tables using another table -->
<quiz>
  <question>
    <p>How do you define a many-to-many relationship between two tables in a SQL database schema?</p>
    <answer correct>A table must be created with foreign key references to each of the tables you want to connect.</answer>
    <answer>One of the tables must have a foreign key reference to itself and another foreign key reference to the other table.</answer>
    <answer>One of the tables must have a foreign key reference to the other table.</answer>
    <explanation>A "join table" must be added to the SQL database schema. It should connect the two tables in a many-to-many relationship by having a foreign key references pointing to each table it's connecting in that relationship.</explanation>
  </question>
</quiz>

<!-- LO: Describe how using delete on one entry can necessitate deletions to cascade to other tables -->
```sql
PRAGMA foreign_keys = ON;

CREATE TABLE cats (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE toys (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  cat_id INTEGER NOT NULL,
  FOREIGN KEY (cat_id) REFERENCES cats(id)
);
```

<quiz>
  <question>
    <p>Based on the SQL database schema above, what will happen if you try to delete a cat record that has many toys?</p>
    <answer correct>Returns an error.</answer>
    <answer>Remove the cat record and all the toy records related to that cat.</answer>
    <answer>Remove the cat record.</answer>
    <explanation>Since the cat has toy records that have foreign key references to it, an error will be returned when you try to delete a cat with references to it. If you want to remove the cat record without removing the toy record, you need to change the foreign key values on the toy records first or delete the toy records. You can also change the database schema to delete the toy records when the cat is deleted by adding an `ON DELETE CASCADE` clause to the end of the `cat_id` foreign key reference.</explanation>
  </question>
</quiz>

<!-- Differentiate the purpose between using an aggregate and a subquery -->
<!-- <quiz>
  <question>
    <p>What should you use to dynamically insert seed data using relationships for foreign key properties?</p>
    <answer correct>A subquery</answer>
    <answer>An aggregate</answer>
    <explanation>Subqueries can be used to dynamically insert seed data.</explanation>
  </question>
</quiz> -->
