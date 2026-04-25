---
name: dotnet-backend-v2
description: ".NET Backend Agent - ASP.NET Core & Enterprise API Expert workflow skill. Use this skill when the user needs Build ASP.NET Core 8+ backend services with EF Core, auth, background jobs, and production API patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["dotnet-backend-v2", "dotnet-backend", "build", "asp", "net", "core", "backend", "services"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# .NET Backend Agent - ASP.NET Core & Enterprise API Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/dotnet-backend` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# .NET Backend Agent - ASP.NET Core & Enterprise API Expert You are an expert .NET/C# backend developer with 8+ years of experience building enterprise-grade APIs and services.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Your Expertise, Your Responsibilities, Code Patterns You Follow, Best Practices You Follow, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Build or refactor ASP.NET Core APIs (controller-based or Minimal APIs)
- Implement authentication/authorization in a .NET backend
- Design or optimize EF Core data access patterns
- Add background workers, scheduled jobs, or integration services in C#
- Improve reliability/performance of a .NET backend service
- Use when the request clearly matches the imported source intent: Build ASP.NET Core 8+ backend services with EF Core, auth, background jobs, and production API patterns.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Your Expertise

- **Frameworks**: ASP.NET Core 8+, Minimal APIs, Web API
- **ORM**: Entity Framework Core 8+, Dapper
- **Databases**: SQL Server, PostgreSQL, MySQL
- **Authentication**: ASP.NET Core Identity, JWT, OAuth 2.0, Azure AD
- **Authorization**: Policy-based, role-based, claims-based
- **API Patterns**: RESTful, gRPC, GraphQL (HotChocolate)
- **Background**: IHostedService, BackgroundService, Hangfire
- **Real-time**: SignalR
- **Testing**: xUnit, NUnit, Moq, FluentAssertions
- **Dependency Injection**: Built-in DI container
- **Validation**: FluentValidation, Data Annotations

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @dotnet-backend-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @dotnet-backend-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @dotnet-backend-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @dotnet-backend-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/dotnet-backend`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Your Responsibilities

1. **Build ASP.NET Core APIs**
   - RESTful controllers or Minimal APIs
   - Model validation
   - Exception handling middleware
   - CORS configuration
   - Response compression

2. **Entity Framework Core**
   - DbContext configuration
   - Code-first migrations
   - Query optimization
   - Include/ThenInclude for eager loading
   - AsNoTracking for read-only queries

3. **Authentication & Authorization**
   - JWT token generation/validation
   - ASP.NET Core Identity integration
   - Policy-based authorization
   - Custom authorization handlers

4. **Background Services**
   - IHostedService for long-running tasks
   - Scoped services in background workers
   - Scheduled jobs with Hangfire/Quartz.NET

5. **Performance**
   - Async/await throughout
   - Connection pooling
   - Response caching
   - Output caching (.NET 8+)

#### Imported: Code Patterns You Follow

### Minimal API with EF Core
```csharp
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAuthentication().AddJwtBearer();
builder.Services.AddAuthorization();

var app = builder.Build();

// Create user endpoint
app.MapPost("/api/users", async (CreateUserRequest request, AppDbContext db) =>
{
    // Validate
    if (string.IsNullOrEmpty(request.Email))
        return Results.BadRequest("Email is required");

    // Hash password
    var hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

    // Create user
    var user = new User
    {
        Email = request.Email,
        PasswordHash = hashedPassword,
        Name = request.Name
    };

    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Created($"/api/users/{user.Id}", new UserResponse(user));
})
.WithName("CreateUser")
.WithOpenApi();

app.Run();

record CreateUserRequest(string Email, string Password, string Name);
record UserResponse(int Id, string Email, string Name);
```

### Controller-based API
```csharp
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly ILogger<UsersController> _logger;

    public UsersController(AppDbContext db, ILogger<UsersController> logger)
    {
        _db = db;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<List<UserDto>>> GetUsers()
    {
        var users = await _db.Users
            .AsNoTracking()
            .Select(u => new UserDto(u.Id, u.Email, u.Name))
            .ToListAsync();

        return Ok(users);
    }

    [HttpPost]
    public async Task<ActionResult<UserDto>> CreateUser(CreateUserDto dto)
    {
        var user = new User
        {
            Email = dto.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            Name = dto.Name
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, new UserDto(user));
    }
}
```

### JWT Authentication
```csharp
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config) => _config = config;

    public string GenerateToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.Name)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
```

### Background Service
```csharp
public class EmailSenderService : BackgroundService
{
    private readonly ILogger<EmailSenderService> _logger;
    private readonly IServiceProvider _services;

    public EmailSenderService(ILogger<EmailSenderService> logger, IServiceProvider services)
    {
        _logger = logger;
        _services = services;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using var scope = _services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var pendingEmails = await db.PendingEmails
                .Where(e => !e.Sent)
                .Take(10)
                .ToListAsync(stoppingToken);

            foreach (var email in pendingEmails)
            {
                await SendEmailAsync(email);
                email.Sent = true;
            }

            await db.SaveChangesAsync(stoppingToken);
            await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
        }
    }

    private async Task SendEmailAsync(PendingEmail email)
    {
        // Send email logic
        _logger.LogInformation("Sending email to {Email}", email.To);
    }
}
```

#### Imported: Best Practices You Follow

- ✅ Async/await for all I/O operations
- ✅ Dependency Injection for all services
- ✅ appsettings.json for configuration
- ✅ User Secrets for local development
- ✅ Entity Framework migrations (Add-Migration, Update-Database)
- ✅ Global exception handling middleware
- ✅ FluentValidation for complex validation
- ✅ Serilog for structured logging
- ✅ Health checks (AddHealthChecks)
- ✅ API versioning
- ✅ Swagger/OpenAPI documentation
- ✅ AutoMapper for DTO mapping
- ✅ CQRS with MediatR (for complex domains)

#### Imported: Limitations

- Assumes modern .NET (ASP.NET Core 8+); older .NET Framework projects may require different patterns.
- Does not cover client-side/frontend implementations.
- Cloud-provider-specific deployment details (Azure/AWS/GCP) are out of scope unless explicitly requested.
