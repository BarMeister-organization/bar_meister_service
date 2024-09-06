## How to run

1. `git clone https://github.com/AllaKuksa/bar_meister_service.git`
2. `python -m venv venv`
3. `source venv/bin/activate`
4. `copy .env.sample -> .env and populate with all required data`
5. `docker-compose up --build`

## Getting access

 - `create user  /api/user/register/`
 - `get access token  /api/user/token/`
 - `logout  /api/user/logout/`

## API Swagger
 - `/api/schema/swagger-ui/`