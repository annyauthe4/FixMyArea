-- Set a database for the Job seeker project
-- Create user, database and grant privileges

-- Create a Database job_dev_db if it does not exists
CREATE DATABASE IF NOT EXISTS fix_area_dev_db;

-- Create user job_dev if it does not exist
CREATE USER IF NOT EXISTS 'fix_area_dev'@'localhost' IDENTIFIED BY 'fix_area_dev_pwd';

-- Grant all privileges on the job_dev_dbdatabase to job_dev user
GRANT ALL PRIVILEGES ON fix_area_dev_db.* TO 'fix_area_dev'@'localhost';

-- Grant SELECT privilege on the performance_schema database
GRANT SELECT ON performance_schema.* TO 'fix_area_dev'@'localhost';

FLUSH PRIVILEGES;
