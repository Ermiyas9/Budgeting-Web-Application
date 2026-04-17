namespace BudgetingWebApp.Server.Models
{
    public class ExpenseCatagory
    {
        public int CategoryIdExpenseCatagoryID { get; set; }
        public string ExpenseName { get; set; } = string.Empty;

        // this cant be null so when user creates a catagory we will assign for that user 
        public string? UserName { get; set; }

        // so this  will be a navigation property for category-to-expenses relationship cus one catagory can have many expense 
        // this will tell ef core that there is a relationship between this catagory and the expenses that belong to it
        public ICollection<Expense> Expenses { get; set; } = new List<Expense>();
    }
}
