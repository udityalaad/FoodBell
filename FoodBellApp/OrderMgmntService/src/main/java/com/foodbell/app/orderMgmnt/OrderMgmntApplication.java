package com.foodbell.app.orderMgmnt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class OrderMgmntApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderMgmntApplication.class, args);
	}

}
