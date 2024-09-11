## How to run

1. `git clone  https://github.com/BarMeister-organization/bar_meister_service `
2. `python3 -m venv venv`
3. `source venv/bin/activate`
4. `copy .env.sample -> .env and populate with all required data`
5. `docker-compose up --build`
6. http://127.0.0.1:8000/
7. `admin page /admin/` 
   `- password: admin`
   `- email: admin@admin.com`

## Getting access

 - `create user  /api/user/register/`
 - `get access token  /api/user/token/`
 - `logout  /api/user/logout/`
 - `refresh token /token/refresh/`

## API Swagger
 - `/api/schema/swagger-ui/`