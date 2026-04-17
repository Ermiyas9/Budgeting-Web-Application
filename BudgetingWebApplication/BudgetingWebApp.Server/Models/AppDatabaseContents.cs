using Microsoft.EntityFrameworkCore;



namespace BudgetingWebApp.Server.Models
{
    public class AppDatabaseContents : DbContext
    {

        // this entity will be our table in the database, it will store user information .
        // The UserID field will be the primary key that we specify in sql, and the email and username
        // user name will be the email id of the user without @domain part this is the class that we created in Models/User.cs

        public DbSet<UserInformation> UserInformation { get; set; }

        public DbSet<ExpenseCatagory> ExpenseCatagory { get; set; }
        public DbSet<Expense> Expenses { get; set; }




        // here I am doing is creating a constructor for the AppDatabaseContents class that takes in DbContextOptions and passes it to the base class constructor
        public AppDatabaseContents(DbContextOptions<AppDatabaseContents> options) : base(options)
        {
        }
    }
}
