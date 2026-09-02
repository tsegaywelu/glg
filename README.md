MY Docker Commands
Goal,Command
Stop everything,docker compose down -v
Dev mode (hot reload),docker compose -f docker-compose-dev.yaml up --build
Prod mode (background),docker compose up -d --build
Stop prod,docker compose down
View logs,docker compose logs -f
Check running containers,docker ps
