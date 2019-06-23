FROM maven:3.5.3-jdk-8-alpine as build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN export spring_profiles_active=prod && mvn package

FROM openjdk:8-jdk-alpine as runtime
WORKDIR /app
COPY --from=build /build/target ./target
COPY scripts  .
RUN chmod  +x run-prod.sh
CMD  ./run-prod.sh