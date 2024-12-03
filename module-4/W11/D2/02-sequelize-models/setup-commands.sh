cd server

# Remove the database file (if run multiple times - not in README)

rm db/dev.db 2> /dev/null || true

# Getting started

npm install

# Create .env file to specify location of database
cp .env.example .env




# npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,
# <column2>:<type>,...



# npx sequelize-cli model:generate --name Color --attributes name:string
