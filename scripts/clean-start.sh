# WhatTheFar/modularizing-graphql-boilerplate
if [ "$(docker ps -q)" ]; then
    echo '[-] Stopping running container(s)...'
    docker stop $(docker ps -q)
fi
if [ "$(docker ps -aq)" ]; then
    echo '[-] Removing exited container(s)...'
    docker rm $(docker ps -aq)
fi
docker-compose down
if [ "$(docker network ls)" ]; then
    echo '[-] Removing unused network(s)...'
    docker network prune -f
fi
echo '[-] Cleaning up...'
docker image prune -f
echo '[+] Starting container(s)...'
docker-compose up -d
echo '[*] Done!'