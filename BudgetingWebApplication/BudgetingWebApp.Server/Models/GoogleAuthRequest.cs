namespace BudgetingWebApp.Server.Models
{
    public class GoogleAuthRequest
    {
        public string FullEmail { get; set; }
        public string UserName { get; set; }
        public string GoogleSubject { get; set; }
        public string? PhotoUrl { get; set; }
    }
}
