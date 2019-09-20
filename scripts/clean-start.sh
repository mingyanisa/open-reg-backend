if [ "$(docker ps -q)" ]; then
    echo 'Stop running container(s)'
    docker stop $(docker ps -q)
fi
if [ "$(docker ps -aq)" ]; then
    echo 'Remove exited container(s)'
    docker rm $(docker ps -aq)
fi
docker-compose down