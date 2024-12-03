##################################
# Stage 1: Build the application #
##################################

# Official Images for Maven
FROM maven:3.9.9-eclipse-temurin-21 AS builder

# Set the working directory inside the container
WORKDIR /build

# Copy the pom.xml file into the container
COPY pom.xml .

# Copy the source code into the container
COPY src ./src

# Build the application with Maven,
# skip the tests because we have not configured the database yet
RUN mvn clean package

################################
# Stage 2: Run the application #
################################

# Official Images for OpenJDK binaries built by Eclipse Temurin
FROM eclipse-temurin:21

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container
# COPY target/*.jar app.jar

# Copy the JAR file from the builder stage into the container
COPY --from=builder /build/target/*.jar app.jar

# Expose the port the app runs on (default 8080)
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "app.jar"]
