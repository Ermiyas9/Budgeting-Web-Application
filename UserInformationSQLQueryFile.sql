
-- Switch to master database first
USE master;
GO
-- Drop the database if it already exists
-- Check if the database exists
IF DB_ID('BudgettingAppDatabase') IS NOT NULL
BEGIN
    -- Set single-user mode to disconnect all active connections
    ALTER DATABASE BudgettingAppDatabase 
    SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

    -- Drop the database
    DROP DATABASE BudgettingAppDatabase;
END
GO

-- Create the database
CREATE DATABASE BudgettingAppDatabase
GO

-- Use the database
USE BudgettingAppDatabase
GO

-- Drop tables if they exist
IF OBJECT_ID('UserInformation', 'U') IS NOT NULL DROP TABLE Likes
GO

-- Create UserInformation table
CREATE TABLE UserInformation (
   UserID INT IDENTITY(1,1) PRIMARY KEY,
    fullEmail VARCHAR(255) NOT NULL,
    username VARCHAR(100) NOT NULL,
    UNIQUE(fullEmail, username) -- NEED TO BE UNIQUE FOR EVERY USER
    );

GO


SELECT * FROM UserInformation

