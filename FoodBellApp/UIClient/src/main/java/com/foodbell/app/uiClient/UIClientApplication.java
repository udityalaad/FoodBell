package com.foodbell.app.uiClient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class UIClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(UIClientApplication.class, args);
	}

}
