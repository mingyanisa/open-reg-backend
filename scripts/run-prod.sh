#!/usr/bin/env sh
chmod  +x wait-for.sh
export spring_profiles_active=prod
./wait-for.sh mongo:27017 && ./wait-for.sh postgres:5432 && java -jar /app/target/OpenRegBackend.jar