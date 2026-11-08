# Delete a showcase project

Deleting by ID removes one row from the PostgreSQL `project` table. The project disappears from the database-backed showcase. Demo projects are generated in memory and cannot be deleted through this API.

## Where the admin key lives

| Scope | Server configuration | Request header |
| --- | --- | --- |
| Shared calendar and showcase admin | `ADMIN_API_KEY` in the API process environment. Production Compose can read it from a private `deployment/api-deployment/.env` file. | `X-Admin-Key` |
| Legacy showcase-only admin | `SHOWCASE_ADMIN_API_KEY` in the API process environment. On the local Windows setup, the source file is `%LOCALAPPDATA%\BCCS-Showcase-Local\showcase-admin-key`. | `X-Showcase-Admin-Key` |

Keep the key in the API environment and authorized clients. Use HTTPS outside localhost. The frontend and project JSON do not need the key.

## Delete by exact ID

Use the public slug lookup to find the ID. In PowerShell, replace `course-tab-organizer` with the intended project slug:

```powershell
$api = 'http://127.0.0.1:8090/v1/showcase/projects'
$project = Invoke-RestMethod "$api/slug/course-tab-organizer"
$project | Select-Object id, title, slug
```

After verifying the project, send the authenticated delete request:

```powershell
$keyPath = Join-Path $env:LOCALAPPDATA 'BCCS-Showcase-Local/showcase-admin-key'
$headers = @{ 'X-Showcase-Admin-Key' = Get-Content -Raw $keyPath }
Invoke-WebRequest -Method Delete -Uri "$api/$($project.id)" -Headers $headers |
  Select-Object StatusCode
```

For a shared admin key, use `$headers = @{ 'X-Admin-Key' = $env:ADMIN_API_KEY }` instead.

## Responses

| Status | Meaning |
| --- | --- |
| 204 | The project was deleted. |
| 400 | The project ID is invalid. |
| 403 | The request lacks a valid admin key. |
| 404 | No project has that ID. |
