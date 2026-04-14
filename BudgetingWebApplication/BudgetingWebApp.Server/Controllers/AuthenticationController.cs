using BudgetingWebApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BudgetingWebApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AppDatabaseContents bugetingWebAppDatabase;

        public AuthenticationController(AppDatabaseContents _bugetingWebAppDatabase)
        {
            bugetingWebAppDatabase = _bugetingWebAppDatabase;
        }
        [HttpPost("LoginUsingGoogle")]
        public async Task<IActionResult> GoogleLogin([FromBody] GoogleAuthRequest request)
        {
            // so before we used to have registeration page , we dont need that anymore cus we will authomatically register them if they are not registered to our database
            if (string.IsNullOrWhiteSpace(request.GoogleSubject))
                return BadRequest(new { message = "Google Subject is required." });

            // Try to find user by using their google subject from our db userprofile table 
            var user = await bugetingWebAppDatabase.UserInformation
                .FirstOrDefaultAsync(u => u.GoogleSubject == request.GoogleSubject);

            //  If user does NOT exist then we will auto-register
            if (user == null)
            {
                user = new UserInformation
                {
                    Email = request.Email,
                    UserName = request.Name,
                    GoogleSubject = request.GoogleSubject,
                    PhotoUrl = request.PhotoUrl,
                    JoinDate = DateTime.UtcNow
                };

                bugetingWebAppDatabase.UserInformation.Add(user);
                await bugetingWebAppDatabase.SaveChangesAsync();
            }
            else
            {
                // Set photo url if not present
                if (string.IsNullOrWhiteSpace(user.PhotoUrl))
                {
                    user.PhotoUrl = request.PhotoUrl;
                    await bugetingWebAppDatabase.SaveChangesAsync();
                }
            }

            // then at the last i will return final user
            return Ok(new
            {
                message = "Login successful.",
                userId = user.UserId,
                email = user.Email,
                userName = user.UserName,
                photoUrl = user.PhotoUrl
            });
        }


    }
}
