using BudgetingWebApp.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BudgetingWebApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AppDatabaseContents _bugetingWebAppDatabase;

        public AuthenticationController(AppDatabaseContents bugetingWebAppDatabase)
        {
            _bugetingWebAppDatabase = bugetingWebAppDatabase;
        }


  
    }
}
