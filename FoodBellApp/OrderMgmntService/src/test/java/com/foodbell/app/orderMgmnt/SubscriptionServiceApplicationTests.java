package com.foodbell.app.orderMgmnt;

import com.foodbell.app.orderMgmnt.entity.AddressPojo;
import com.foodbell.app.orderMgmnt.entity.CustomerPojo;
import com.foodbell.app.orderMgmnt.entity.Subscription;
import com.foodbell.app.orderMgmnt.entity.VendorPojo;
import com.foodbell.app.orderMgmnt.service.SubscriptionService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@SpringBootTest
class SubscriptionServiceApplicationTests {
	@Autowired
	private SubscriptionService subscriptionService; //= Mockito.mock(SubscriptionService.class);

//	private final String uri_customer = "http://localhost:8090/customers/";
//	private final String uri_vendor = "http://localhost:8090/vendors/";
//
//	//@Autowired
//	RestTemplate restTemplate = new RestTemplate();

	@Test
	void contextLoads() {
	}

	@Test
	void checkaddSubscriptionConnectionLastStep() throws Exception {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

//		// Adding First Customer to be used
//		AddressPojo address1 = new AddressPojo(null, null, "Cus Sub Test 1", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer1 = new CustomerPojo(null, "Test CusSub 1 Name", "test1CusSub@_test_email.com", "+15555666601", address1,
//				(new SimpleDateFormat("yyyy-MM-dd")).parse("2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntity1 = new HttpEntity(customer1, headers);
//
//		String strCustomer1 =  customer1.toString();
//		CustomerPojo resCus1 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntity1, CustomerPojo.class);
//		Assertions.assertEquals(resCus1.toString(), strCustomer1);
//
//		// Adding First Vendor to be used
//		AddressPojo address2 = new AddressPojo(null, "10", "Ven Sub Test 2", "Kitchener","ON", "CA", null);
//		VendorPojo vendor2 = new VendorPojo(null, "Test VenSub 2 Name", "test2VenSub@_test_email.com", "+15555666602", address2,
//				new String[] {"Veg"},
//				new String[] {"Chinese", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntity2 = new HttpEntity(vendor2, headers);
//
//		String strVendor2 =  vendor2.toString();
//		VendorPojo resVen2 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntity2, VendorPojo.class);
//		Assertions.assertEquals(resVen2.toString(), strVendor2);
//
//		// Adding Second Customer to be used
//		AddressPojo address3 = new AddressPojo(null, null, "Cus Sub Test 3", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer3 = new CustomerPojo(null, "Test CusSub 3 Name", "test3CusSub@_test_email.com", "+15555666603", address3,
//				(new SimpleDateFormat("yyyy-MM-dd")).parse("2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntity3 = new HttpEntity(customer3, headers);
//
//		String strCustomer3 =  customer3.toString();
//		CustomerPojo resCus3 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntity3, CustomerPojo.class);
//		Assertions.assertEquals(resCus3.toString(), strCustomer3);
//
//		// Adding Second Vendor to be used
//		AddressPojo address4 = new AddressPojo(null, "10", "Ven Sub Test 4", "Kitchener","ON", "CA", null);
//		VendorPojo vendor4 = new VendorPojo(null, "Test VenSub 4 Name", "test4VenSub@_test_email.com", "+15555666604", address4,
//				new String[] {"Veg"},
//				new String[] {"Chinese", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Large"}
//		);
//		HttpEntity<VendorPojo> httpEntity4 = new HttpEntity(vendor4, headers);
//
//		String strVendor4 =  vendor4.toString();
//		VendorPojo resVen4 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntity4, VendorPojo.class);
//		Assertions.assertEquals(resVen4.toString(), strVendor4);




		// ----------------------- Case 1 -----------------------
		/* 1.1 - Exception - Adding subscription w/o vendorEmail */
		final Subscription subscription1 = new Subscription(null, null, "test1@_test_email.com",
				"2020-10-01",
				"Veg", "Indian", "Weekly",
				new String[] {"Monday"}, "Small", "true",
				null
			);

		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		});
		Assertions.assertEquals(e1.getMessage(), "Vendor Email is a Mandatory Field.");


		/* 1.2 - Success - Adding subscription with vendorEmail */
		subscription1.setVendorEmail("testV1@_test_email.com");
		String strSubscription1 =  subscription1.toString();
		Assertions.assertEquals((subscriptionService.addSubscriptionConnectionLastStep(subscription1)).toString(), strSubscription1);
		// ------------------------------------------------------


		// ----------------------- Case 2 -----------------------
		/* 2.1 - Exception - Adding subscription w/o customerEmail */
		final Subscription subscription2 = new Subscription(null, "testV2@_test_email.com", null,
				"2021-07-25",
				"Non-veg", "Chinese", "Weekly",
				new String[] {"Wednesday"},  "Standard", "true",
				null
		);

		Exception e2 = Assertions.assertThrows(Exception.class, () -> {
			subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		});
		Assertions.assertEquals(e2.getMessage(), "Customer Email is a Mandatory Field.");


		/* 2.2 - Success - Adding subscription with customerEmail */
		subscription2.setCustomerEmail("test2@_test_email.com");
		String strSubscription2 =  subscription2.toString();
		Assertions.assertEquals((subscriptionService.addSubscriptionConnectionLastStep(subscription2)).toString(), strSubscription2);
		// ------------------------------------------------------



//		// ----------------------- Case 3 -----------------------
//		/* 3.1 - Exception - Adding subscription with vendorEmail which does not exist in Vendor DB */
//		final Subscription subscription3 = new Subscription(null, "ufwebiew_random_vendor@_test_email.com", "test3@_test_email.com",
//				"2021-02-08"),
//				"Non-veg", "Chinese", "Weekly",
//				new String[] {"Friday"}, "true",
//				null
//		);
//
//		Exception e3 = Assertions.assertThrows(Exception.class, () -> {
//			subscriptionService.addSubscriptionConnectionLastStep(subscription3);
//		});
//		Assertions.assertEquals(e3.getMessage(), "Vendor with email '" + subscription3.getVendorEmail() + "' does not exist.");
//
//		/* 3.2 - Success - Adding subscription with vendorEmail which exists in Vendor DB */
//		subscription3.setVendorEmail("testV3@_test_email.com");
//		String strSubscription3 =  subscription3.toString();
//		Assertions.assertEquals((subscriptionService.addSubscriptionConnectionLastStep(subscription3)).toString(), strSubscription3);
//		// ------------------------------------------------------


//		// ----------------------- Case 4 -----------------------
//		/* 4.1 - Exception - Adding subscription with customerEmail which does not exist in Customer DB */
//		final Subscription subscription4 = new Subscription(null, "testV5@_test_email.com", "ufwebiew_random_customer@_test_email.com",
//				"2019-01-11"),
//				"Veg", "Indian", "Weekly",
//				new String[] {"Wednesday"}, "true",
//				null
//		);
//
//		Exception e4 = Assertions.assertThrows(Exception.class, () -> {
//			subscriptionService.addSubscriptionConnectionLastStep(subscription4);
//		});
//		Assertions.assertEquals(e4.getMessage(), "Customer with email '" + subscription4.getCustomerEmail() + "' does not exist.");
//
//
//		/* 4.2 - Success - Adding subscription with customerEmail which exists in Customer DB */
//		subscription4.setCustomerEmail("test5@_test_email.com");
//		String strSubscription4 =  subscription4.toString();
//		Assertions.assertEquals((subscriptionService.addSubscriptionConnectionLastStep(subscription4)).toString(), strSubscription4);
//		// ------------------------------------------------------


		// ----------------------- Case 5 -----------------------
		/* 4.1 - Exception - Adding another subscription for customer and vendor who already have one between them */
		// TBD To be decided
		// ------------------------------------------------------
	}



	@Test
	void checkFindSubscriptionBySubscriptionId() throws Exception {
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		// Adding First Customer to be used
//		AddressPojo address1 = new AddressPojo(null, null, "Cus Sub Test 11", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer1 = new CustomerPojo(null, "Test CusSub 11 Name", "test11CusSub@_test_email.com", "+15555666611", address1,
//				"2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntity1 = new HttpEntity(customer1, headers);
//
//		String strCustomer1 =  customer1.toString();
//		CustomerPojo resCus1 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntity1, CustomerPojo.class);
//		Assertions.assertEquals(resCus1.toString(), strCustomer1);
//
//		// Adding First Vendor to be used
//		AddressPojo address2 = new AddressPojo(null, "10", "Ven Sub Test 12", "Kitchener","ON", "CA", null);
//		VendorPojo vendor2 = new VendorPojo(null, "Test VenSub 12 Name", "test12VenSub@_test_email.com", "+15555666612", address2,
//				new String[] {"Veg"},
//				new String[] {"Italian", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntity2 = new HttpEntity(vendor2, headers);
//
//		String strVendor2 =  vendor2.toString();
//		VendorPojo resVen2 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntity2, VendorPojo.class);
//		Assertions.assertEquals(resVen2.toString(), strVendor2);


		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "testV6@_test_email.com", "test6@_test_email.com",
				"2022-01-12",
				"Non-veg", "Chinese", "Weekly",
				new String[] {"Tuesday"}, "Standard",  "true",
				null
		);

		String strSubscription3 =  subscription3.toString();
		Subscription resSub = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub.toString(), strSubscription3);


		/* 1.1 - Failure - Find subscriptions of customer who has no subscriptions --or-- is not a customer at all */
		Assertions.assertTrue(subscriptionService.findSubscriptionByCustomerEmail("iqoqwhdoq_random@_test_email.com").length == 0);
		
		/* 1.2 - Success - Find subscriptions of valid customer who has 1 or more subscriptions */
		Subscription resSub2 = subscriptionService.findSubscriptionBySubscriptionId(resSub.getSubscriptionId());
		Assertions.assertEquals(resSub2.getSubscriptionId(), resSub.getSubscriptionId());
		Assertions.assertEquals(resSub2.toString(), resSub.toString());
	}



	@Test
	void checkFindSubscriptionByCustomerEmail() throws Exception {
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		// Adding First Customer to be used
//		AddressPojo address1 = new AddressPojo(null, null, "Cus Sub Test 21", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer1 = new CustomerPojo(null, "Test CusSub 21 Name", "test21CusSub@_test_email.com", "+15555666621", address1,
//				"2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntity1 = new HttpEntity(customer1, headers);
//
//		String strCustomer1 =  customer1.toString();
//		CustomerPojo resCus1 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntity1, CustomerPojo.class);
//		Assertions.assertEquals(resCus1.toString(), strCustomer1);
//
//		// Adding First Vendor to be used
//		AddressPojo address2 = new AddressPojo(null, "10", "Ven Sub Test 22", "Kitchener","ON", "CA", null);
//		VendorPojo vendor2 = new VendorPojo(null, "Test VenSub 22 Name", "test22VenSub@_test_email.com", "+15555666622", address2,
//				new String[] {"Veg"},
//				new String[] {"Italian", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntity2 = new HttpEntity(vendor2, headers);
//
//		String strVendor2 =  vendor2.toString();
//		VendorPojo resVen2 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntity2, VendorPojo.class);
//		Assertions.assertEquals(resVen2.toString(), strVendor2);


		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "initialVendorUnrelated@_test_email.com", "initialCustomerUnrelated@_test_email.com",
					"2021-11-12",
					"Non-veg", "Italian", "Weekly",
					new String[] {"Tuesday"}, "Large", "false",
					null
			);

		String strSubscription3 =  subscription3.toString();
		Subscription resSub = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub.toString(), strSubscription3);


		/* 1.1 - Failure - Find subscriptions of customer who has no subscriptions --or-- is not a customer at all */
		Assertions.assertTrue(subscriptionService.findSubscriptionByCustomerEmail("iqoqwhdoq_random@_test_email.com").length == 0);

		/* 1.2 - Success - Find subscriptions of valid customer who has 1 or more subscriptions */
		Subscription[] resSub2 = subscriptionService.findSubscriptionByCustomerEmail(subscription3.getCustomerEmail());
		for (Subscription sub : resSub2) {
			Assertions.assertEquals(sub.getCustomerEmail(), resSub.getCustomerEmail());
		}
	}



	@Test
	void checkFindSubscriptionByVendorEmail() throws Exception {
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		// Adding First Customer to be used
//		AddressPojo address1 = new AddressPojo(null, null, "Cus Sub Test 31", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer1 = new CustomerPojo(null, "Test CusSub 31 Name", "test31CusSub@_test_email.com", "+15555666631", address1,
//				"2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntity1 = new HttpEntity(customer1, headers);
//
//		String strCustomer1 =  customer1.toString();
//		CustomerPojo resCus1 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntity1, CustomerPojo.class);
//		Assertions.assertEquals(resCus1.toString(), strCustomer1);
//
//		// Adding First Vendor to be used
//		AddressPojo address2 = new AddressPojo(null, "10", "Ven Sub Test 32", "Kitchener","ON", "CA", null);
//		VendorPojo vendor2 = new VendorPojo(null, "Test VenSub 32 Name", "test32VenSub@_test_email.com", "+15555666632", address2,
//				new String[] {"Veg"},
//				new String[] {"Chinese", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntity2 = new HttpEntity(vendor2, headers);
//
//		String strVendor2 =  vendor2.toString();
//		VendorPojo resVen2 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntity2, VendorPojo.class);
//		Assertions.assertEquals(resVen2.toString(), strVendor2);


		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "updateVendorEmail2@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "false",
				null
		);

		String strSubscription3 =  subscription3.toString();
		Subscription resSub = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub.toString(), strSubscription3);

		/* 1.1 - Failure - Find subscriptions of Vendor who has no subscriptions --or-- is not a Vendor at all */
		Assertions.assertTrue(subscriptionService.findSubscriptionByVendorEmail("gcuegfiwu_random@_test_email.com").length == 0);

		/* 1.2 - Success - Find subscriptions of valid Vendor who has 1 or more subscriptions */
		Subscription[] resSub2 = subscriptionService.findSubscriptionByVendorEmail(subscription3.getVendorEmail());
		for (Subscription sub : resSub2) {
			Assertions.assertEquals(sub.getVendorEmail(), resSub.getVendorEmail());
		}
	}
	
	
	@Test
	void checkFindAllSubscriptions() throws Exception {
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//
//		// Adding 1st Customer to be used
//		AddressPojo addressCustomer1 = new AddressPojo(null, null, "CusAllSubs 1 Test 41", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer1 = new CustomerPojo(null, "Test CusAllSubs 1 31 Name", "test31CusAllSubs1@_test_email.com", "+15555666141", addressCustomer1,
//				"2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntityCustomer1 = new HttpEntity(customer1, headers);
//
//		String strCustomer1 =  customer1.toString();
//		CustomerPojo resCus1 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntityCustomer1, CustomerPojo.class);
//		Assertions.assertEquals(resCus1.toString(), strCustomer1);
//		
//		
//		// Adding 2nd Customer to be used
//		AddressPojo addressCustomer2 = new AddressPojo(null, null, "CusAllSubs 2 Test 41", "Ottawa", "ON", "CA", null);
//		CustomerPojo customer2 = new CustomerPojo(null, "Test CusAllSubs 2 31 Name", "test31CusAllSubs2@_test_email.com", "+15555666241", addressCustomer2,
//				"2001-05-11"),
//				"veg", "Italian", "Weekly,Monday"
//		);
//		HttpEntity<CustomerPojo> httpEntityCustomer2 = new HttpEntity(customer2, headers);
//
//		String strCustomer2 =  customer2.toString();
//		CustomerPojo resCus2 = restTemplate.postForObject(uri_customer + "addCustomer", httpEntityCustomer2, CustomerPojo.class);
//		Assertions.assertEquals(resCus2.toString(), strCustomer2);
//		
//		
//		
//
//		// Adding 1st Vendor to be used
//		AddressPojo addressVendor1 = new AddressPojo(null, "10", "VenAllSubs 1 Test 42", "Kitchener","ON", "CA", null);
//		VendorPojo vendor1 = new VendorPojo(null, "Test VenAllSubs 1 32 Name", "test32VenAllSubs1@_test_email.com", "+15555666142", addressVendor1,
//				new String[] {"Veg"},
//				new String[] {"Chinese", "Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntityVendor1 = new HttpEntity(vendor1, headers);
//
//		String strVendor1 =  vendor1.toString();
//		VendorPojo resVen1 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntityVendor1, VendorPojo.class);
//		Assertions.assertEquals(resVen1.toString(), strVendor1);
//		
//		
//		// Adding 2nd Vendor to be used
//		AddressPojo addressVendor2 = new AddressPojo(null, "10", "VenAllSubs 2 Test 42", "Kitchener","ON", "CA", null);
//		VendorPojo vendor2 = new VendorPojo(null, "Test VenAllSubs 2 32 Name", "test32VenAllSubs2@_test_email.com", "+15555666242", addressVendor2,
//				new String[] {"Veg"},
//				new String[] {"Indian"},
//				new String[] {"Daily"},
//				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
//				new String[] {"Standard", "Large"}
//		);
//		HttpEntity<VendorPojo> httpEntityVendor2 = new HttpEntity(vendor2, headers);
//
//		String strVendor2 =  vendor2.toString();
//		VendorPojo resVen2 = restTemplate.postForObject(uri_vendor + "addVendor", httpEntityVendor2, VendorPojo.class);
//		Assertions.assertEquals(resVen2.toString(), strVendor2);

		
		

		// Adding 1st Subscription to check against
		Subscription subscription1 = new Subscription(null, "initialVendorByEmail1@_test_email.com", "initialCustomerCustByEmail1@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "false",
				null
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		
		// Adding 2nd Subscription to check against
		Subscription subscription2 = new Subscription(null, "initialVendorAllVend1@_test_email.com", "initialCustomerAllCust1@_test_email.com",
				"2020-04-17",
				"Veg", "Italian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Small", "false",
				null
		);
		

		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);


		// ----------------------- Test -----------------------
		List<Subscription> subsList = subscriptionService.findAllSubscriptions();
		int lenList = subsList.size();
		
		// Testing that the list has atleast 2 elements
		Assertions.assertTrue(lenList >= 2);
		
		long createdSubsIds[] = {resSub1.getSubscriptionId(), resSub2.getSubscriptionId()};
		
		// Testing that the list has the correct elements
		for (int i = lenList - 1, j = 1; i >= lenList - 2; i--, j--) {
			Assertions.assertEquals((long) subsList.get(i).getSubscriptionId(), createdSubsIds[j]);
		}
		// ------------------------------------------------------
	}
	
	
	
	
	
	@Test
	void checkFindActiveSubscriptionByCustomerEmail() throws Exception {
		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "testV6@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "true",
				null
		);
		
		String strSubscription3 =  subscription3.toString();
		Subscription resSub3 = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub3.toString(), strSubscription3);
		
		// Adding Subscription to check against
		Subscription subscription4 = new Subscription(null, "testV2@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "false",
				null
		);

		String strSubscription4 =  subscription4.toString();
		Subscription resSub4 = subscriptionService.addSubscriptionConnectionLastStep(subscription4);
		Assertions.assertEquals(resSub4.toString(), strSubscription4);

		/* 1.1 - Failure - Find subscriptions of Customer who has no subscriptions --or-- is not a Customer at all */
		Assertions.assertTrue(subscriptionService.findActiveSubscriptionByCustomerEmail("gcuegfiwu_random@_test_email.com").length == 0);

		/* 1.2 - Success - Find subscriptions of valid Customer who has 1 or more subscriptions */
		Subscription[] result = subscriptionService.findActiveSubscriptionByCustomerEmail(subscription4.getCustomerEmail());
		for (Subscription sub : result) {
			Assertions.assertEquals(sub.getCustomerEmail(), resSub3.getCustomerEmail());
			Assertions.assertEquals(sub.getActive(), "true");
		}
	}
	
	
	@Test
	void checkFindActiveSubscriptionByVendorEmail() throws Exception {
		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "testV6@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "true",
				null
		);
		
		String strSubscription3 =  subscription3.toString();
		Subscription resSub3 = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub3.toString(), strSubscription3);
		
		// Adding Subscription to check against
		Subscription subscription4 = new Subscription(null, "testV6@_test_email.com", "initialCustomerUnrelated@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "false",
				null
		);

		String strSubscription4 =  subscription4.toString();
		Subscription resSub4 = subscriptionService.addSubscriptionConnectionLastStep(subscription4);
		Assertions.assertEquals(resSub4.toString(), strSubscription4);

		/* 1.1 - Failure - Find subscriptions of Vendor who has no subscriptions --or-- is not a Vendor at all */
		Assertions.assertTrue(subscriptionService.findActiveSubscriptionByVendorEmail("gcuegfiwu_random@_test_email.com").length == 0);

		/* 1.2 - Success - Find subscriptions of valid Vendor who has 1 or more subscriptions */
		Subscription[] result = subscriptionService.findActiveSubscriptionByVendorEmail(subscription4.getVendorEmail());
		for (Subscription sub : result) {
			Assertions.assertEquals(sub.getVendorEmail(), resSub3.getVendorEmail());
			Assertions.assertEquals(sub.getActive(), "true");
		}
	}
	
	
	
	
	
	@Test
	void checkActivateSubscription() throws Exception {
		// Adding Subscription to check against
		Subscription subscription1 = new Subscription(null, "testV2@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "true",
				null
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		
		// Adding Subscription to check against
		Subscription subscription2 = new Subscription(null, "testV5@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Small", "false",
				null
		);

		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);

		
		/* 1.1 - Failure - Activate subscription with subscription-id that does not exist */
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			subscriptionService.activateSubscription(Long.parseLong("192122"));
		});
		Assertions.assertEquals(e1.getMessage(), "Subscription with the given Subscription-Id does not exist.");
		
		/* 1.2 - Success - Activate an already-active subscription */
		Subscription resSub1_activate = subscriptionService.activateSubscription(resSub1.getSubscriptionId());
		Assertions.assertEquals(resSub1_activate.getActive(), "true");
		
		/* 1.2 - Success - Activate an already-active subscription */
		Subscription resSub2_activate = subscriptionService.activateSubscription(resSub2.getSubscriptionId());
		Assertions.assertEquals(resSub2_activate.getActive(), "true");
	}
	
	
	@Test
	void checkDeactivateSubscription() throws Exception {
		// Adding Subscription to check against
		Subscription subscription1 = new Subscription(null, "testV5@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "false",
				null
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		
		// Adding Subscription to check against
		Subscription subscription2 = new Subscription(null, "testV2@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "true",
				null
		);

		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);

		
		/* 1.1 - Failure - Deactivate subscription with subscription-id that does not exist */
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			subscriptionService.deactivateSubscription(Long.parseLong("192122"));
		});
		Assertions.assertEquals(e1.getMessage(), "Subscription with the given Subscription-Id does not exist.");
		
		/* 1.2 - Success - Deactivate an already-active subscription */
		Subscription resSub1_deactivate = subscriptionService.deactivateSubscription(resSub1.getSubscriptionId());
		Assertions.assertEquals(resSub1_deactivate.getActive(), "false");
		
		/* 1.2 - Success - Deactivate an already-active subscription */
		Subscription resSub2_deactivate = subscriptionService.deactivateSubscription(resSub2.getSubscriptionId());
		Assertions.assertEquals(resSub2_deactivate.getActive(), "false");
	}
	
	
	
	
	
	@Test
	void checkFindPendingOrdersByEmail () throws Exception {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		
		Calendar cal = Calendar.getInstance();
        cal.setTime(today);
        String currentDayOfWeek = subscriptionService.intToDay(cal.get(Calendar.DAY_OF_WEEK));
		
		// Adding Subscription to check against
		Subscription subscription1 = new Subscription(null, "initialVendorByEmail2@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Chinese", "Daily",
				new String[] {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "true",
				null
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		// Adding Subscription to check against
		Subscription subscription2 = new Subscription(null, "initialVendorByEmail2@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Saturday", "Monday", "Tuesday"},
				"Standard", "true",
				"2020-03-15"
		);
		
		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);
		
		
		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "initialVendorByEmail2@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Italian", "Daily",
				new String[] {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Small", "true",
				formatter.format(today)
		);
		
		String strSubscription3 =  subscription3.toString();
		Subscription resSub3 = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub3.toString(), strSubscription3);
		
		
		/* 1.1 - Success - Find Pending Orders by Customer Email */
		Subscription[] result1 = subscriptionService.findPendingOrdersByEmail(subscription1.getCustomerEmail(), "Customer");
		Assertions.assertTrue(result1.length >= 1);
		for (Subscription sub : result1) {
			Assertions.assertEquals(sub.getCustomerEmail(), resSub3.getCustomerEmail());
			Assertions.assertEquals(sub.getActive(), "true");
			Assertions.assertTrue(Arrays.asList(sub.getAvailedDays()).contains(currentDayOfWeek));
			
			if (sub.getLastDeliveryDate() != null) {
				Assertions.assertNotEquals(sub.getLastDeliveryDate(), formatter.format(today));
			}
		}
		
		
		/* 1.2 - Success - Find Pending Orders by Vendor Email */
		Subscription[] result2 = subscriptionService.findPendingOrdersByEmail(subscription1.getVendorEmail(), "Vendor");
		Assertions.assertTrue(result1.length >= 1);
		for (Subscription sub : result2) {
			Assertions.assertEquals(sub.getVendorEmail(), resSub3.getVendorEmail());
			Assertions.assertEquals(sub.getActive(), "true");
			Assertions.assertTrue(Arrays.asList(sub.getAvailedDays()).contains(currentDayOfWeek));
			
			if (sub.getLastDeliveryDate() != null) {
				Assertions.assertNotEquals(sub.getLastDeliveryDate(), formatter.format(today));
			}
		}
	}
	
	
	@Test
	void checkFindCompletedOrdersByEmail () throws Exception {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		
		Calendar cal = Calendar.getInstance();
        cal.setTime(today);
        String currentDayOfWeek = subscriptionService.intToDay(cal.get(Calendar.DAY_OF_WEEK));
        
		
		// Adding Subscription to check against
		Subscription subscription1 = new Subscription(null, "initialVendorByEmail1@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "true",
				null
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		// Adding Subscription to check against
		Subscription subscription2 = new Subscription(null, "initialVendorByEmail1@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Italian", "Daily",
				new String[] {"Saturday", "Monday", "Tuesday"},
				"Small", "true",
				"2020-03-15"
		);
		
		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);
		
		// Adding Subscription to check against
		Subscription subscription3 = new Subscription(null, "initialVendorByEmail1@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Italian", "Daily",
				new String[] {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "true",
				formatter.format(today)
		);
		
		String strSubscription3 =  subscription3.toString();
		Subscription resSub3 = subscriptionService.addSubscriptionConnectionLastStep(subscription3);
		Assertions.assertEquals(resSub3.toString(), strSubscription3);
		
		/* 1.1 - Success - Find Completed Orders by Customer Email */
		Subscription[] result1 = subscriptionService.findCompletedOrdersByEmail(subscription1.getCustomerEmail(), "Customer");
		Assertions.assertTrue(result1.length >= 1);
		for (Subscription sub : result1) {
			Assertions.assertEquals(sub.getCustomerEmail(), resSub3.getCustomerEmail());
			Assertions.assertEquals(sub.getActive(), "true");
			
			if (Arrays.asList(sub.getAvailedDays()).contains(currentDayOfWeek)) {
				Assertions.assertEquals(sub.getLastDeliveryDate(), formatter.format(today));
			}
		}
		
		
		/* 1.2 - Success - Find Completed Orders by Vendor Email */
		Subscription[] result2 = subscriptionService.findCompletedOrdersByEmail(subscription1.getVendorEmail(), "Vendor");
		Assertions.assertTrue(result2.length >= 1);
		for (Subscription sub : result2) {
			Assertions.assertEquals(sub.getVendorEmail(), resSub3.getVendorEmail());
			Assertions.assertEquals(sub.getActive(), "true");
			
			if (Arrays.asList(sub.getAvailedDays()).contains(currentDayOfWeek)) {
				Assertions.assertEquals(sub.getLastDeliveryDate(), formatter.format(today));
			}
		}
	}
	
	
	
	
	
	@Test
	void checkMarkDelivered() throws Exception {
		// Adding Subscription to check against
		Subscription subscription1 = new Subscription(null, "testV2@_test_email.com", "updateCustomerEmail2@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Standard", "true",
				"2020-10-03"
		);
		
		String strSubscription1 =  subscription1.toString();
		Subscription resSub1 = subscriptionService.addSubscriptionConnectionLastStep(subscription1);
		Assertions.assertEquals(resSub1.toString(), strSubscription1);
		
		
		// Adding Subscription to check against
		Subscription subscription2 = new Subscription(null, "testV5@_test_email.com", "test3@_test_email.com",
				"2020-04-17",
				"Veg", "Indian", "Daily",
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				"Large", "true",
				null
		);

		String strSubscription2 =  subscription2.toString();
		Subscription resSub2 = subscriptionService.addSubscriptionConnectionLastStep(subscription2);
		Assertions.assertEquals(resSub2.toString(), strSubscription2);
		
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date today = new Date();

		
		/* 1.1 - Failure - markDelivered subscription with subscription-id that does not exist */
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			subscriptionService.markDelivered(Long.parseLong("192122"));
		});
		Assertions.assertEquals(e1.getMessage(), "Subscription with the given Subscription-Id does not exist.");
		
		/* 1.2 - Success - markDelivered */
		Subscription resSub1_activate = subscriptionService.markDelivered(resSub1.getSubscriptionId());
		Assertions.assertEquals(resSub1_activate.getLastDeliveryDate(), formatter.format(today));
		
		/* 1.3 - Success - markDelivered */
		Subscription resSub2_activate = subscriptionService.markDelivered(resSub2.getSubscriptionId());
		Assertions.assertEquals(resSub2_activate.getLastDeliveryDate(), formatter.format(today));
	}
	
	
	@Test
	void checkGetCost() throws Exception {
		Assertions.assertEquals(subscriptionService.getCost("Standard", "Veg", "Indian", 2), 140);
		Assertions.assertEquals(subscriptionService.getCost("Large", "Non-veg", "Italian", 6), 250);
	}
	
}
