
-- Switch to master database first
USE master;
GO
-- Drop the database if it already exists
-- Check if the database exists
IF DB_ID('BudgettingWebAppDB') IS NOT NULL
BEGIN
    -- Set single-user mode to disconnect all active connections
    ALTER DATABASE BudgettingWebAppDB 
    SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

    -- Drop the database
    DROP DATABASE BudgettingWebAppDB;
END
GO

-- Create the database
CREATE DATABASE BudgettingWebAppDB
GO

-- Use the database
USE BudgettingWebAppDB
GO

-- Drop tables if they exist
IF OBJECT_ID('UserInformation', 'U') IS NOT NULL DROP TABLE UserInformation
GO

-- Create UserInformation table
CREATE TABLE UserInformation (
   UserID INT IDENTITY(1,1) PRIMARY KEY,
   FullEmail VARCHAR(255) NOT NULL,
   Username VARCHAR(100) NOT NULL,
   GoogleSubject VARCHAR(100) NULL, 
   UNIQUE(FullEmail, Username, GoogleSubject) -- NEED TO BE UNIQUE FOR EVERY USER
    );

GO


SELECT * FROM UserInformation

SELECT DB_NAME() AS CurrentDB;

SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'UserInformation';
DROP TABLE UserInformation;