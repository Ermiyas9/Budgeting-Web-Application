using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetingWebApp.Server.Models
{
    public class UserInformation
    {
        [Key]
        [Column("UserInformationID")]
        public int UserId { get; set; }

        // Email cannot be null and must be unique
        [Required]
        [MaxLength(255)]
        public string FullEmail { get; set; } = string.Empty;

        // Username cannot be null and must be unique
        [Required]
        [MaxLength(100)]
        public string UserName { get; set; } = string.Empty;

        // GoogleSubject is optional (null for non‑Google users)
        [MaxLength(255)]
        public string? GoogleSubject { get; set; }
        [MaxLength(500)]
        public string? Bio { get; set; }
        [MaxLength(500)]
        [Column("PhotoURL")]
        public string? PhotoUrl { get; set; }
        [Required]
        public DateTime JoinDate { get; set; }
    }
}