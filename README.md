# Link Cutter

## Getting Started

1. Download the dependencies

```sh
npm install
# or
yarn
```

2. Create a database using Docker

```sh
# Note: Make sure to have docker installed in your machine and properly configured
docker-compose up -d
```

3. Access .env and configure BASE_URL with your IPv4 address

```sh
# Note: Run "ipconfig" in your terminal to get ipv4
BASE_URL="http://000.000.0.00/"
```

4. Run the project

```sh
npm run build:start
# or
yarn build:start
```
