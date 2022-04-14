package com.foodbell.app.userMgmnt;

import com.foodbell.app.userMgmnt.entity.Address;
import com.foodbell.app.userMgmnt.entity.Customer;
import com.foodbell.app.userMgmnt.entity.UserProfile;
import com.foodbell.app.userMgmnt.entity.Vendor;
import com.foodbell.app.userMgmnt.service.CustomerService;
import com.foodbell.app.userMgmnt.service.UserProfileService;
import com.foodbell.app.userMgmnt.service.VendorService;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;

@SpringBootTest
@Slf4j
class UserProfileServiceApplicationTests {
	@Autowired
	private UserProfileService userProfileService; //= Mockito.mock(UserProfileService.class);
	
	@Autowired
	private CustomerService customerService; //= Mockito.mock(CustomerService.class);
	
	@Autowired
	private VendorService vendorService; //= Mockito.mock(VendorService.class);

	@Test
	void contextLoads() {
	}
	
	
	@Test
	void checkFindUserProfileByEmail() throws Exception {
		// Create customer to check against
		Address addressCus1 = new Address(null, null, null, "Ottawa", "ON", "CA", null);
		
		Customer customer1 = new Customer(null, "Test initialCustomer UserProfileByEmail1 Name", "initialCustomerUserProfileByEmail1@_test_email.com", "+11111889170", addressCus1,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomer1 =  customer1.toString();
		Customer resCus1 = customerService.addCustomer(customer1);
		Assertions.assertEquals(resCus1.toString(), strCustomer1);
		
		
		// Create vendor to check against
		Address addressVen1 = new Address(null, null, null, "Ottawa", "ON", "CA", null);
		
		Vendor vendor1 = new Vendor(null, "Test initialVendor UserProfileByEmail1 Name", "initialVendorUserProfileByEmail1@_test_email.com", "+11111889171", addressVen1,
				new String[] {"Veg"},
				new String[] {"Mexican", "Indian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor1 =  vendor1.toString();
		Vendor resVen1 = vendorService.addVendor(vendor1);
		Assertions.assertEquals(resVen1.toString(), strVendor1);
		

		/* 1.1 - Success - Find UserProfile with Customer's email */
		UserProfile resUserProfile1 = userProfileService.findUserProfileByEmail(customer1.getCustomerEmail());
		Assertions.assertEquals(resUserProfile1.getProfileType(), "Customer");
		Assertions.assertEquals(resUserProfile1.getProfile().toString(), strCustomer1);
		
		
		/* 1.2 - Success - Find UserProfile with Vendor's email */
		UserProfile resUserProfile2 = userProfileService.findUserProfileByEmail(vendor1.getVendorEmail());
		Assertions.assertEquals(resUserProfile2.getProfileType(), "Vendor");
		Assertions.assertEquals(resUserProfile2.getProfile().toString(), strVendor1);
		
		
		/* 1.3 - Failure - Find UserProfile with email that does not exist in either customer/vendor */
		String testEmail = "userprofile_dummy_email_invalid_@_test_email.com";
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			userProfileService.findUserProfileByEmail(testEmail);
		});
		Assertions.assertEquals(e1.getMessage(), "User Profile with email '" + testEmail + "' does not exist.");
	}
}