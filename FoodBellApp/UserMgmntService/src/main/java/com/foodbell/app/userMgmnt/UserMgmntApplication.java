package com.foodbell.app.userMgmnt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class UserMgmntApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserMgmntApplication.class, args);
	}

}

