# Getting started with the Multiverse Part 3 - Hackathon 

Part 3 to the Multiverse Program closing off with a Hackathon.
This was inspired by terrible budgeting and montly expenses. The project stack contains: Java, Spring boot (web, JPA, and Security), Maven, SQL, & React.


## Demo
- Still working out Google Cloud Console deployed link

## Features

- Create a new expense
- Read all & singular expense
- Update a pre-existing expense
- Delete any available expense

## Prerequisites

MySQL set-up:
- Create database in MySQLWorkbench
- Adjust JDBC url to match db name in application.properties file (springboot-backend/src/main/resources)

VSCode IDE extensions:
- Spring boot tools
- Sring boot dashboard
- IntelliCode
- Debugger for Java
- Maven for Java

Technologies Versions:
- Java version 19
- React version 9.0+

Installing react dependencies:
- Navigate to react-frontend folder and install all dependencies

```bash
npm i
```

## Starting on your local machine

- Clone the repository
- Install all react dependencies
- Start Java/Spring boot project (springboot-backend directory)
```
./mvnw spring-boot:run
```
- Start React server (react-frontend directory)
```
npm start
```
