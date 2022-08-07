<!-- Reference:
https://github.com/othneildrew/Best-README-Template -->
<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="Read_Me_Content/TopLogo.jpg" alt="TopLogo.jpg" width="200">


  
  <img src="Read_Me_Content/top_label.jpg" alt="top_label.jpg">
  .

  <p align="center">
    An end-to-end solution to decode everyday hunger demands !
  </p>
</div>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#license-or-author">License or Author</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br>

<!-- ABOUT THE PROJECT -->
## About The Project
  ‘FoodBell’ is an asynchronous solution for facilitating subscription-based (recurring) meal services – using a dedicated application, secure micro-service architecture and CI/CD approach.
  * Created an optimal ‘vendor-consumer’ model & leveraged it to design the user application with targeted functionalities.
  * Architected a secure Micro-service model, with a Gateway facilitating 3 different services (consumer, vendor, auth).
  * Allowed real time communication between vendor & consumer platforms; used Cron jobs to facilitate automated changes.

  <p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With
  &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/Java.JPG" alt="Java_Logo" width="70"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/SpringBoot.png" alt="Spring_Boot_Logo" width="75"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/MySql.jpg" alt="MySQL_Logo" width="110"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/React.png" alt="React_Logo" width="70"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/js.jpg" alt="JS_Logo" width="60"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="Read_Me_Content/Tech/selenium.png" alt="Selenium_Logo" width="65">

  &nbsp; &nbsp; &nbsp; &nbsp; <b><i> Java </i></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><i> Spring Boot </i></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><i> MySQL </i></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><i> React </i></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><i> JavaScript </i></b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b><i> Selenium </i></b>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
  #### Prerequisites
  * Java, Spring Boot Framework, MySQL Workbench, Selenium Extension
  * Apache Tomcat Server
  * Node.js
  * IDE - Eclipse or IntelliJ (Preferred)
  * Minimum - 4GB RAM, Intel i5 CPU (or Equivalent)

  #### Setup & Use
  1. ##### Set-up Microservices and and UIClient
     1. Get <b>'FoodBellApp'</b> from the parent directory.
     2. Import <b>'FoodBellApp'</b> to IDE.

  2. ##### Set-up Database
     1. Get <b>'Important Files/SQL_PreTest_Commands.txt'</b>.
     2. Set-up a new Database in SQL Workbench.
     3. Start the database.
     4. Copy the DB credentials.

  3. ##### Connect Database and Microservices
     1. Update the following files (corresponding to each microservice) with newly set-up database credentials:
        * FoodBellApp/OrderMgmntService/src/main/resources/application.properties
        * FoodBellApp/UserMgmntService/src/main/resources/application.properties
     2. Run commands from <b>'Important Files/SQL_PreTest_Commands.txt'</b> in SQL workbench.
     
  <p align="center"><img src="Read_Me_Content/Overview/flow.JPG" alt="Flow"></p>

  4. ##### Run and use the application
     1. Start the following microservices (in squence):
        * UserMgmntService
        * OrderMgmntService
     2. Start the Application Gateway & End-application (UIClient)
     3. Open the respective port in a web-browser.
     4. You are all set.

  <p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Overview -->
## Overview
  #### Objectives
  * The Objective is to create a unified solution ‘Food Bell’ -a web application that provides an interface for facilitating subscription-based meal services by connecting customers to the right vendors.
  * This system will save the major effort involvedin exploring meal and vendor options for the customers.
  * With the help of this system, vendors would have a hassle-free experience in managing and trackingall their orders.
  * The solution aims at fulfilling the demand and supply gap in the food industry.

  <p align="center"><img src="Read_Me_Content/Overview/scenario.jfif" alt="Scenario"></p>

  .

  #### Detailed Architecture
  <p align="center"><img src="Read_Me_Content/Overview/architecture.jpg" alt="Detailed rchitecture"></p>

  .

  #### Sample Run
  <p align="center"><img src="Read_Me_Content/Overview/sample_run.jpg" alt="Sample Run" width="800"></p>
  .
  <p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License or Author
  * Uditya Laad
  * Shubhanki Gupta
  * Harpreet Jolly
  * Vijiithaa Sasidharan
  * Premchander Satheesh
  * Varun Seem

  <p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
  <b>Uditya Laad</b> &nbsp; [@linkedin.com/in/uditya-laad-222680148](https://www.linkedin.com/in/uditya-laad-222680148/)
  
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [@github.com/udityalaad](https://github.com/udityalaad)
  
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; udityalaad123@gmail.com

  <b>Project Link</b> &nbsp; [https://github.com/udityalaad/FeedForward_MLP_Classifier](https://github.com/udityalaad/FeedForward_MLP_Classifier)

  <p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
  * Many thanks to Prof. Krzysztof Czarnecki (ECE 653, University of Waterloo) for his guidance and assistance throughout the project.

  <p align="right">(<a href="#readme-top">back to top</a>)</p>