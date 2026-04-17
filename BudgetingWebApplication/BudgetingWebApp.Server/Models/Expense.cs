using Microsoft.EntityFrameworkCore;

namespace BudgetingWebApp.Server.Models
{
    public class Expense
    {
        public int ExpenseId { get; set; }

        [Precision(18, 2)]
        public decimal Amount { get; set; }
        public string? Description { get; set; }
        public DateTime Date { get; set; }

        public int CategoryId { get; set; }
        public ExpenseCatagory ExpenseCatagory { get; set; }

        public string UserId { get; set; } = string.Empty;
    }

}
