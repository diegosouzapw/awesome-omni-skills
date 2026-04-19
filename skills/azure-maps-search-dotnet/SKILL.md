---
name: azure-maps-search-dotnet
description: "Azure Maps (.NET) workflow skill. Use this skill when the user needs Azure Maps SDK for .NET. Location-based services including geocoding, routing, rendering, geolocation, and weather. Use for address search, directions, map tiles, IP geolocation, and weather data and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["azure-maps-search-dotnet", "azure", "maps", "sdk", "for", "net", "location-based", "services"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Maps (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-maps-search-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Maps (.NET) Azure Maps SDK for .NET providing location-based services: geocoding, routing, rendering, geolocation, and weather.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Maps SDK for .NET. Location-based services including geocoding, routing, rendering, geolocation, and weather. Use for address search, directions, map tiles, IP geolocation, and weather data.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Azure.Maps.Search: v2.0.0-beta.5
2. Azure.Maps.Routing: v1.0.0-beta.4
3. Azure.Maps.Rendering: v2.0.0-beta.1
4. Azure.Maps.Geolocation: v1.0.0-beta.3
5. Azure.ResourceManager.Maps: v1.1.0-beta.2
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Search (geocoding, reverse geocoding)
dotnet add package Azure.Maps.Search --prerelease

# Routing (directions, route matrix)
dotnet add package Azure.Maps.Routing --prerelease

# Rendering (map tiles, static images)
dotnet add package Azure.Maps.Rendering --prerelease

# Geolocation (IP to location)
dotnet add package Azure.Maps.Geolocation --prerelease

# Weather
dotnet add package Azure.Maps.Weather --prerelease

# Resource Management (account management, SAS tokens)
dotnet add package Azure.ResourceManager.Maps --prerelease

# Required for authentication
dotnet add package Azure.Identity
```

**Current Versions**:
- `Azure.Maps.Search`: v2.0.0-beta.5
- `Azure.Maps.Routing`: v1.0.0-beta.4
- `Azure.Maps.Rendering`: v2.0.0-beta.1
- `Azure.Maps.Geolocation`: v1.0.0-beta.3
- `Azure.ResourceManager.Maps`: v1.1.0-beta.2

#### Imported: Core Workflows

### 1. Geocoding (Address to Coordinates)

```csharp
using Azure;
using Azure.Maps.Search;

var credential = new AzureKeyCredential(subscriptionKey);
var client = new MapsSearchClient(credential);

Response<GeocodingResponse> result = client.GetGeocoding("1 Microsoft Way, Redmond, WA 98052");

foreach (var feature in result.Value.Features)
{
    Console.WriteLine($"Coordinates: {string.Join(",", feature.Geometry.Coordinates)}");
    Console.WriteLine($"Address: {feature.Properties.Address.FormattedAddress}");
    Console.WriteLine($"Confidence: {feature.Properties.Confidence}");
}
```

### 2. Batch Geocoding

```csharp
using Azure.Maps.Search.Models.Queries;

List<GeocodingQuery> queries = new List<GeocodingQuery>
{
    new GeocodingQuery() { Query = "400 Broad St, Seattle, WA" },
    new GeocodingQuery() { Query = "1 Microsoft Way, Redmond, WA" },
    new GeocodingQuery() { AddressLine = "Space Needle", Top = 1 },
};

Response<GeocodingBatchResponse> results = client.GetGeocodingBatch(queries);

foreach (var batchItem in results.Value.BatchItems)
{
    foreach (var feature in batchItem.Features)
    {
        Console.WriteLine($"Coordinates: {string.Join(",", feature.Geometry.Coordinates)}");
    }
}
```

### 3. Reverse Geocoding (Coordinates to Address)

```csharp
using Azure.Core.GeoJson;

GeoPosition coordinates = new GeoPosition(-122.138685, 47.6305637);
Response<GeocodingResponse> result = client.GetReverseGeocoding(coordinates);

foreach (var feature in result.Value.Features)
{
    Console.WriteLine($"Address: {feature.Properties.Address.FormattedAddress}");
    Console.WriteLine($"Locality: {feature.Properties.Address.Locality}");
}
```

### 4. Get Boundary Polygon

```csharp
using Azure.Maps.Search.Models;

GetPolygonOptions options = new GetPolygonOptions()
{
    Coordinates = new GeoPosition(-122.204141, 47.61256),
    ResultType = BoundaryResultTypeEnum.Locality,
    Resolution = ResolutionEnum.Small,
};

Response<Boundary> result = client.GetPolygon(options);

Console.WriteLine($"Boundary copyright: {result.Value.Properties?.Copyright}");
Console.WriteLine($"Polygon count: {result.Value.Geometry.Count}");
```

### 5. Route Directions

```csharp
using Azure;
using Azure.Core.GeoJson;
using Azure.Maps.Routing;
using Azure.Maps.Routing.Models;

var client = new MapsRoutingClient(new AzureKeyCredential(subscriptionKey));

List<GeoPosition> routePoints = new List<GeoPosition>()
{
    new GeoPosition(-122.34, 47.61),  // Seattle
    new GeoPosition(-122.13, 47.64)   // Redmond
};

RouteDirectionQuery query = new RouteDirectionQuery(routePoints);
Response<RouteDirections> result = client.GetDirections(query);

foreach (var route in result.Value.Routes)
{
    Console.WriteLine($"Distance: {route.Summary.LengthInMeters} meters");
    Console.WriteLine($"Duration: {route.Summary.TravelTimeDuration}");
    
    foreach (RouteLeg leg in route.Legs)
    {
        Console.WriteLine($"Leg points: {leg.Points.Count}");
    }
}
```

### 6. Route Directions with Options

```csharp
RouteDirectionOptions options = new RouteDirectionOptions()
{
    RouteType = RouteType.Fastest,
    UseTrafficData = true,
    TravelMode = TravelMode.Bicycle,
    Language = RoutingLanguage.EnglishUsa,
    InstructionsType = RouteInstructionsType.Text,
};

RouteDirectionQuery query = new RouteDirectionQuery(routePoints)
{
    RouteDirectionOptions = options
};

Response<RouteDirections> result = client.GetDirections(query);
```

### 7. Route Matrix

```csharp
RouteMatrixQuery routeMatrixQuery = new RouteMatrixQuery
{
    Origins = new List<GeoPosition>()
    {
        new GeoPosition(-122.34, 47.61),
        new GeoPosition(-122.13, 47.64)
    },
    Destinations = new List<GeoPosition>() 
    { 
        new GeoPosition(-122.20, 47.62),
        new GeoPosition(-122.40, 47.65)
    },
};

// Synchronous (up to 100 route combinations)
Response<RouteMatrixResult> result = client.GetImmediateRouteMatrix(routeMatrixQuery);

foreach (var cell in result.Value.Matrix.SelectMany(row => row))
{
    Console.WriteLine($"Distance: {cell.Response?.RouteSummary?.LengthInMeters}");
    Console.WriteLine($"Duration: {cell.Response?.RouteSummary?.TravelTimeDuration}");
}

// Asynchronous (up to 700 route combinations)
RouteMatrixOptions routeMatrixOptions = new RouteMatrixOptions(routeMatrixQuery)
{
    TravelTimeType = TravelTimeType.All,
};
GetRouteMatrixOperation asyncResult = client.GetRouteMatrix(WaitUntil.Completed, routeMatrixOptions);
```

### 8. Route Range (Isochrone)

```csharp
RouteRangeOptions options = new RouteRangeOptions(-122.34, 47.61)
{
    TimeBudget = new TimeSpan(0, 20, 0)  // 20 minutes
};

Response<RouteRangeResult> result = client.GetRouteRange(options);

// result.Value.ReachableRange contains the polygon
Console.WriteLine($"Boundary points: {result.Value.ReachableRange.Boundary.Count}");
```

### 9. Get Map Tiles

```csharp
using Azure;
using Azure.Maps.Rendering;

var client = new MapsRenderingClient(new AzureKeyCredential(subscriptionKey));

int zoom = 10;
int tileSize = 256;

// Convert coordinates to tile index
MapTileIndex tileIndex = MapsRenderingClient.PositionToTileXY(
    new GeoPosition(13.3854, 52.517), zoom, tileSize);

// Fetch map tile
GetMapTileOptions options = new GetMapTileOptions(
    MapTileSetId.MicrosoftImagery,
    new MapTileIndex(tileIndex.X, tileIndex.Y, zoom)
);

Response<Stream> mapTile = client.GetMapTile(options);

// Save to file
using (FileStream fileStream = File.Create("./MapTile.png"))
{
    mapTile.Value.CopyTo(fileStream);
}
```

### 10. IP Geolocation

```csharp
using System.Net;
using Azure;
using Azure.Maps.Geolocation;

var client = new MapsGeolocationClient(new AzureKeyCredential(subscriptionKey));

IPAddress ipAddress = IPAddress.Parse("2001:4898:80e8:b::189");
Response<CountryRegionResult> result = client.GetCountryCode(ipAddress);

Console.WriteLine($"Country ISO Code: {result.Value.IsoCode}");
```

### 11. Current Weather

```csharp
using Azure;
using Azure.Core.GeoJson;
using Azure.Maps.Weather;

var client = new MapsWeatherClient(new AzureKeyCredential(subscriptionKey));

var position = new GeoPosition(-122.13071, 47.64011);
var options = new GetCurrentWeatherConditionsOptions(position);

Response<CurrentConditionsResult> result = client.GetCurrentWeatherConditions(options);

foreach (var condition in result.Value.Results)
{
    Console.WriteLine($"Temperature: {condition.Temperature.Value} {condition.Temperature.Unit}");
    Console.WriteLine($"Weather: {condition.Phrase}");
    Console.WriteLine($"Humidity: {condition.RelativeHumidity}%");
}
```

#### Imported: Environment Variables

```bash
AZURE_MAPS_SUBSCRIPTION_KEY=<your-subscription-key>
AZURE_MAPS_CLIENT_ID=<your-client-id>  # For Entra ID auth
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-maps-search-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-maps-search-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-maps-search-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-maps-search-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Entra ID for production — Prefer over subscription keys
- Batch operations — Use batch geocoding for multiple addresses
- Cache results — Geocoding results don't change frequently
- Use appropriate tile sizes — 256 or 512 pixels based on display
- Handle rate limits — Implement exponential backoff
- Use async route matrix — For large matrix calculations (>100)
- Consider traffic data — Set UseTrafficData = true for accurate ETAs

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID for production** — Prefer over subscription keys
2. **Batch operations** — Use batch geocoding for multiple addresses
3. **Cache results** — Geocoding results don't change frequently
4. **Use appropriate tile sizes** — 256 or 512 pixels based on display
5. **Handle rate limits** — Implement exponential backoff
6. **Use async route matrix** — For large matrix calculations (>100)
7. **Consider traffic data** — Set `UseTrafficData = true` for accurate ETAs

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-maps-search-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Types Reference

### Search Package

| Type | Purpose |
|------|---------|
| `MapsSearchClient` | Main client for search operations |
| `GeocodingResponse` | Geocoding result |
| `GeocodingBatchResponse` | Batch geocoding result |
| `GeocodingQuery` | Query for batch geocoding |
| `ReverseGeocodingQuery` | Query for batch reverse geocoding |
| `GetPolygonOptions` | Options for polygon retrieval |
| `Boundary` | Boundary polygon result |
| `BoundaryResultTypeEnum` | Boundary type (Locality, AdminDistrict, etc.) |
| `ResolutionEnum` | Polygon resolution (Small, Medium, Large) |

### Routing Package

| Type | Purpose |
|------|---------|
| `MapsRoutingClient` | Main client for routing operations |
| `RouteDirectionQuery` | Query for route directions |
| `RouteDirectionOptions` | Route calculation options |
| `RouteDirections` | Route directions result |
| `RouteLeg` | Segment of a route |
| `RouteMatrixQuery` | Query for route matrix |
| `RouteMatrixResult` | Route matrix result |
| `RouteRangeOptions` | Options for isochrone |
| `RouteRangeResult` | Isochrone result |
| `RouteType` | Route type (Fastest, Shortest, Eco, Thrilling) |
| `TravelMode` | Travel mode (Car, Truck, Bicycle, Pedestrian) |

### Rendering Package

| Type | Purpose |
|------|---------|
| `MapsRenderingClient` | Main client for rendering |
| `GetMapTileOptions` | Map tile options |
| `MapTileIndex` | Tile coordinates (X, Y, Zoom) |
| `MapTileSetId` | Tile set identifier |

### Common Types

| Type | Purpose |
|------|---------|
| `GeoPosition` | Geographic position (longitude, latitude) |
| `GeoBoundingBox` | Bounding box for geographic area |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| Azure Maps Documentation | https://learn.microsoft.com/azure/azure-maps/ |
| Search API Reference | https://learn.microsoft.com/dotnet/api/azure.maps.search |
| Routing API Reference | https://learn.microsoft.com/dotnet/api/azure.maps.routing |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/maps |
| Pricing | https://azure.microsoft.com/pricing/details/azure-maps/ |

#### Imported: Authentication

### Subscription Key (Shared Key)

```csharp
using Azure;
using Azure.Maps.Search;

var subscriptionKey = Environment.GetEnvironmentVariable("AZURE_MAPS_SUBSCRIPTION_KEY");
var credential = new AzureKeyCredential(subscriptionKey);

var client = new MapsSearchClient(credential);
```

### Microsoft Entra ID (Recommended for Production)

```csharp
using Azure.Identity;
using Azure.Maps.Search;

var credential = new DefaultAzureCredential();
var clientId = Environment.GetEnvironmentVariable("AZURE_MAPS_CLIENT_ID");

var client = new MapsSearchClient(credential, clientId);
```

### Shared Access Signature (SAS)

```csharp
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Maps;
using Azure.ResourceManager.Maps.Models;
using Azure.Maps.Search;

// Authenticate with Azure Resource Manager
ArmClient armClient = new ArmClient(new DefaultAzureCredential());

// Get Maps account resource
ResourceIdentifier mapsAccountResourceId = MapsAccountResource.CreateResourceIdentifier(
    subscriptionId, resourceGroupName, accountName);
MapsAccountResource mapsAccount = armClient.GetMapsAccountResource(mapsAccountResourceId);

// Generate SAS token
MapsAccountSasContent sasContent = new MapsAccountSasContent(
    MapsSigningKey.PrimaryKey, 
    principalId, 
    maxRatePerSecond: 500, 
    start: DateTime.UtcNow.ToString("O"), 
    expiry: DateTime.UtcNow.AddDays(1).ToString("O"));

Response<MapsAccountSasToken> sas = mapsAccount.GetSas(sasContent);

// Create client with SAS token
var sasCredential = new AzureSasCredential(sas.Value.AccountSasToken);
var client = new MapsSearchClient(sasCredential);
```

#### Imported: Client Hierarchy

```
Azure.Maps.Search
└── MapsSearchClient
    ├── GetGeocoding()                    → Geocode addresses
    ├── GetGeocodingBatch()               → Batch geocoding
    ├── GetReverseGeocoding()             → Coordinates to address
    ├── GetReverseGeocodingBatch()        → Batch reverse geocoding
    └── GetPolygon()                      → Get boundary polygons

Azure.Maps.Routing
└── MapsRoutingClient
    ├── GetDirections()                   → Route directions
    ├── GetImmediateRouteMatrix()         → Route matrix (sync, ≤100)
    ├── GetRouteMatrix()                  → Route matrix (async, ≤700)
    └── GetRouteRange()                   → Isochrone/reachable range

Azure.Maps.Rendering
└── MapsRenderingClient
    ├── GetMapTile()                      → Map tiles
    ├── GetMapStaticImage()               → Static map images
    └── GetCopyrightCaption()             → Copyright info

Azure.Maps.Geolocation
└── MapsGeolocationClient
    └── GetCountryCode()                  → IP to country/region

Azure.Maps.Weather
└── MapsWeatherClient
    ├── GetCurrentWeatherConditions()     → Current weather
    ├── GetDailyForecast()                → Daily forecast
    ├── GetHourlyForecast()               → Hourly forecast
    └── GetSevereWeatherAlerts()          → Weather alerts
```

#### Imported: Error Handling

```csharp
try
{
    Response<GeocodingResponse> result = client.GetGeocoding(address);
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Status: {ex.Status}");
    Console.WriteLine($"Error: {ex.Message}");
    
    switch (ex.Status)
    {
        case 400:
            // Invalid request parameters
            break;
        case 401:
            // Authentication failed
            break;
        case 429:
            // Rate limited - implement backoff
            break;
    }
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
