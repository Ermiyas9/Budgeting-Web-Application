using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BudgetingWebApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class CreatingUserInformationTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserInformation",
                columns: table => new
                {
                    UserInformationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullEmail = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    GoogleSubject = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Bio = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    PhotoURL = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    JoinDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInformation", x => x.UserInformationID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserInformation");
        }
    }
}
