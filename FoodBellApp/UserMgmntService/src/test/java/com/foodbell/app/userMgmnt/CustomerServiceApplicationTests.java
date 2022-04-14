package com.foodbell.app.userMgmnt;

import com.foodbell.app.userMgmnt.entity.Address;
import com.foodbell.app.userMgmnt.entity.Customer;
import com.foodbell.app.userMgmnt.service.CustomerService;
 
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.internal.matchers.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@SpringBootTest
@Slf4j
class CustomerServiceApplicationTests {
	@Autowired
	private CustomerService customerService; //= Mockito.mock(AuthenticationService.class);

	@Test
	void contextLoads() {
	}

	@Test
	void checkAddCustomer() throws Exception {
		// ----------------------- Case 1 -----------------------
		/* 1.1 - Exception - Adding customer w/o email */
		Address address1 = new Address(null, "1", "Street 1", "Waterloo", "ON", "CA", "N2J 4L4");
		
		final Customer customer1 = new Customer(null, "Test 1 Name", null, "+11111111111", address1,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
			);

		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			customerService.addCustomer(customer1);
		});
		Assertions.assertEquals(e1.getMessage(), "Email is a mandatory field");


		/* 1.2 - Success - Adding customer with email */
		customer1.setCustomerEmail("test1@_test_email.com");
		String strCustomer1 =  customer1.toString();
		Assertions.assertEquals((customerService.addCustomer(customer1)).toString(), strCustomer1);
		// ------------------------------------------------------



		// ----------------------- Case 2 -----------------------
		/* 2.1 - Exception - Adding customer with existing email */
		Address address2 = new Address(null, null, null, "Toronto", "ON", "CA", null);

		final Customer customer2 = new Customer(null, "Test 2 Name", "test1@_test_email.com", "+12222222222", address2,
				"2002-11-17",
				"veg","Italian", "Weekly,Monday"
			);

		Exception e2 = Assertions.assertThrows(Exception.class, () -> {
			customerService.addCustomer(customer2);
		});
		Assertions.assertEquals(e2.getMessage(), "Customer with email '" + customer2.getCustomerEmail() + "' already exists.");


		/* 2.2 - Success - Adding customer with unique email */
		customer2.setCustomerEmail("test2@_test_email.com");
		String strCustomer2 =  customer2.toString();
		Assertions.assertEquals((customerService.addCustomer(customer2)).toString(), strCustomer2);
		// ------------------------------------------------------



		// ----------------------- Case 3 -----------------------
		/* 3.1 - Exception - Adding customer w/o phone */
		Address address3 = new Address(null, "5", "Street 5", "Waterloo", "ON", "CA", "N2J 4L4");

		final Customer customer3 = new Customer(null, "Test 5 Name", "test5@_test_email.com", null, address3,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		Exception e3 = Assertions.assertThrows(Exception.class, () -> {
			customerService.addCustomer(customer3);
		});
		Assertions.assertEquals(e3.getMessage(), "Phone is a mandatory field");


		/* 3.2 - Success - Adding customer with phone */
		customer3.setCustomerPhone("+15555555555");
		String strCustomer3 =  customer3.toString();
		Assertions.assertEquals((customerService.addCustomer(customer3)).toString(), strCustomer3);
		// ------------------------------------------------------



		// ----------------------- Case 4 -----------------------
		/* 4.1 - Exception - Adding customer with existing phone */
		Address address4 = new Address(null, null, null, "Toronto", "ON", "CA", null);

		final Customer customer4 = new Customer(null, "Test 6 Name", "test6@_test_email.com", "+15555555555", address4,
				"2002-11-17",
				"veg","Italian", "Weekly,Monday"
		);

		Exception e4 = Assertions.assertThrows(Exception.class, () -> {
			customerService.addCustomer(customer4);
		});
		Assertions.assertEquals(e4.getMessage(), "Customer with phone '" + customer4.getCustomerPhone() + "' already exists.");


		/* 4.2 - Success - Adding customer with unique email */
		customer4.setCustomerPhone("+16666666666");
		String strCustomer4 =  customer4.toString();
		Assertions.assertEquals((customerService.addCustomer(customer4)).toString(), strCustomer4);
		// ------------------------------------------------------
	}


	@Test
	void checkFindCustomerById() throws Exception {
		Address address3 = new Address(null, null, null, "Ottawa", "ON", "CA", null);

		Customer customer3 = new Customer(null, "Test 3 Name", "test3@_test_email.com", "+13333333333", address3,
				"1997-08-08",
				"veg", "Italian", "Weekly,Monday"
			);

		String strCustomer3 =  customer3.toString();
		Customer resCus = customerService.addCustomer(customer3);
		Assertions.assertEquals(resCus.toString(), strCustomer3);

		/* 1.1 - Failure - Find customer who does not exist */
		Assertions.assertNull(customerService.findCustomerByCustomerId(Long.parseLong("1231121212")));

		/* 1.2 - Success - Find customer that exists */
		Customer resCus2 = customerService.findCustomerByCustomerId(resCus.getCustomerId());
		Assertions.assertEquals(resCus2.toString(), strCustomer3);
	}



	@Test
	void checkUpdateCustomer() throws Exception {
		// Create accounts to check against (Unrelated)
		Address addressA = new Address(null, "1", "Street Unrelated initialCustomer", "Waterloo", "ON", "CA", "N2J 4L4");

		Customer customerA = new Customer(null, "Test initialCustomer Unrelated Name", "initialCustomerUnrelated@_test_email.com", "+19999888810", addressA,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomerA =  customerA.toString();
		Assertions.assertEquals((customerService.addCustomer(customerA)).toString(), strCustomerA);

		// Create accounts to check against
		Address address0 = new Address(null, "1", "Street initialCustomer", "Waterloo", "ON", "CA", "N2J 4L4");

		Customer customer0 = new Customer(null, "Test initialCustomer Name", "initialCustomer@_test_email.com", "+19999888877", address0,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomer0 =  customer0.toString();
		Assertions.assertEquals((customerService.addCustomer(customer0)).toString(), strCustomer0);

		Long customerId = customer0.getCustomerId();
		Long addressId = customer0.getAddress().getAddressId();


		// ----------------------- Case 1 -----------------------
		/* 1.0 - Exception - Updating Customer with null customerID */
		Address address1Null = new Address(addressId, "11", "Street Customer Update 1", "Waterloo", "ON", "CA", "N2J 4L4");

		final Customer customer1Null = new Customer( null, "Test Update1 Name", "updateCustomerEmail1@_test_email.com", "+19999888871", address1Null,
				"1997-08-08",
				"Non-veg", "Italian", "Daily"
		);

		Exception e1Null = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1Null);
		});
		Assertions.assertEquals(e1Null.getMessage(), "Customer Id cannot be empty");


		/* 1.1 - Exception - Updating Customer with non-existing customerID (Non-existing Customer) */
		Address address1 = new Address(addressId, "11", "Street Customer Update 1", "Waterloo", "ON", "CA", "N2J 4L4");

		final Customer customer1 = new Customer(Long.parseLong("378234"), "Test Update1 Name", "updateCustomerEmail1@_test_email.com", "+19999888871", address1,
				"1997-08-08",
				"Non-veg", "Italian", "Daily"
		);

		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1);
		});
		Assertions.assertEquals(e1.getMessage(), "Customer with id '" + customer1.getCustomerId() + "' does not exists.");

		/* 1.2 - Exception - Updating Customer with existing customerID, but no email */
		customer1.setCustomerId(customerId);	// No longer exception due to non-existing customerId
		customer1.setCustomerEmail(null);		// No email
		Exception e12 = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1);
		});
		Assertions.assertEquals(e12.getMessage(), "Email is a mandatory field");

		/* 1.3 - Exception - Updating Customer with already existing email */
		customer1.setCustomerEmail("initialCustomerUnrelated@_test_email.com");		// Existing email
		Exception e13 = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1);
		});
		Assertions.assertEquals(e13.getMessage(), "Customer with email '" + customer1.getCustomerEmail() + "' already exists.");

		/* 1.4 - Exception - Updating Customer with valid email, but no phone */
		customer1.setCustomerEmail("updateCustomerEmail1@_test_email.com");	// No longer exception due to email
		customer1.setCustomerPhone(null);		// No phone
		Exception e14 = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1);
		});
		Assertions.assertEquals(e14.getMessage(), "Phone is a mandatory field");

		/* 1.5 - Exception - Updating Customer with already existing phone */
		customer1.setCustomerPhone("+19999888810");		// No phone
		Exception e15 = Assertions.assertThrows(Exception.class, () -> {
			customerService.updateCustomer(customer1);
		});
		Assertions.assertEquals(e15.getMessage(), "Customer with phone '" + customer1.getCustomerPhone() + "' already exists.");

		/* 1.4 - Success - Updating customer with valid phone */
		customer1.setCustomerPhone("+19999888871");
		String strCustomer1 =  customer1.toString();
		Assertions.assertEquals((customerService.updateCustomer(customer1)).toString(), strCustomer1);
		// ------------------------------------------------------


		// ----------------------- Case 2 -----------------------
		/* 2.1 - Success - Updating Customer address = null, different email & phone */
		/* ----> Should delete previous address from DB */
		Customer customer2 = new Customer(customerId, "Test Update2 Name", "updateCustomerEmail2@_test_email.com", "+19999888872", null,
				"1997-08-08",
				"Non-veg", "Italian", "Daily"
		);

		String strCustomer2 =  customer2.toString();
		Assertions.assertEquals((customerService.updateCustomer(customer2)).toString(), strCustomer2);
		// ------------------------------------------------------

		// ----------------------- Case 3 -----------------------
		/* 3.1 - Success - Updating Customer with same email & phone, new address (with  addressID = null) */
		Address address3 = new Address(null, "11", "Street Customer Update 2", "Waterloo", "ON", "CA", "N2J 4L4");

		Customer customer3 = new Customer(customerId, "Test Update2 Name", "updateCustomerEmail2@_test_email.com", "+19999888872", address3,
				"1997-08-08",
				"Non-veg", "Italian", "Daily"
		);

		String strCustomer3 =  customer3.toString();
		Assertions.assertEquals((customerService.updateCustomer(customer3)).toString(), strCustomer3);
		// ------------------------------------------------------
	}
	
	
	@Test
	void checkFindAllCustomers() throws Exception {
		// Create accounts to check against (1)
		Address address1 = new Address(null, "1", "Street AllCust1 initialCustomer", "Waterloo", "ON", "CA", "N2J 4L4");

		Customer customer1 = new Customer(null, "Test initialCustomer AllCust1 Name", "initialCustomerAllCust1@_test_email.com", "+19999888110", address1,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomer1 =  customer1.toString();
		Assertions.assertEquals((customerService.addCustomer(customer1)).toString(), strCustomer1);

		// Create accounts to check against (2)
		Address address2 = new Address(null, "1", "Street AllCust2 initialCustomer", "Waterloo", "ON", "CA", "N2J 4L4");

		Customer customer2 = new Customer(null, "Test initialCustomer AllCust2 Name", "initialCustomerAllCust2@_test_email.com", "+19999888177", address2,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomer2 =  customer2.toString();
		Assertions.assertEquals((customerService.addCustomer(customer2)).toString(), strCustomer2);

//		Long customerId = customer2.getCustomerId();
//		Long addressId = customer2.getAddress().getAddressId();


		// ----------------------- Test -----------------------
		List<Customer> custList = customerService.findAllCustomers();
		int lenList = custList.size();
		
		// Testing that the list has atleast 2 elements
		Assertions.assertTrue(lenList >= 2);
		
		long createdCustIds[] = {customer1.getCustomerId(), customer2.getCustomerId()};
		
		// Testing that the list has the correct elements
		for (int i = lenList - 1, j = 1; i >= lenList - 2; i--, j--) {
			Assertions.assertEquals((long) custList.get(i).getCustomerId(), createdCustIds[j]);
		}
		// ------------------------------------------------------
	}
	
	
	@Test
	void checkFindCustomerByEmail() throws Exception {
		// Create customer to check against
		Address address1 = new Address(null, null, null, "Ottawa", "ON", "CA", null);
		
		Customer customer1 = new Customer(null, "Test initialCustomer CustByEmail2 Name", "initialCustomerCustByEmail1@_test_email.com", "+19999889177", address1,
				"1997-08-08",
				"Non-veg", "Indian", "Daily"
		);

		String strCustomer1 =  customer1.toString();
		Customer resCus = customerService.addCustomer(customer1);
		Assertions.assertEquals(resCus.toString(), strCustomer1);

		/* 1.1 - Failure - Find customer with email that does not exist */
		String testEmail = "initialCustomerCustByEmail1_randomEmail@_test_email.com";
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			customerService.findCustomerByCustomerEmail(testEmail);
		});
		Assertions.assertEquals(e1.getMessage(), "Customer with email '" + testEmail + "' does not exist.");

		/* 1.2 - Success - Find customer with email that exists */
		Customer resCus1 = customerService.findCustomerByCustomerEmail(resCus.getCustomerEmail());
		Assertions.assertEquals(resCus1.toString(), strCustomer1);
	}
}