package com.foodbell.app.userMgmnt;

import com.foodbell.app.userMgmnt.entity.Address;
import com.foodbell.app.userMgmnt.entity.Vendor;
import com.foodbell.app.userMgmnt.service.VendorService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
class VendorServiceApplicationTests {
	@Autowired
	private VendorService vendorService;

	@Test
	void contextLoads() {
	}

	@Test
	void checkAddVendor() throws Exception {
		String arr[];

		// ----------------------- Case 1 -----------------------
		/* 1.1 - Exception - Adding vendor w/o email */
		Address address1 = new Address(null, "1", "Street 1", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendor1 = new Vendor(null, "Test 1 Name", null, "+10111111111", address1,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Indian", "Italian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday"},
				new String[] {"Standard", "Large"}
		);

		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.addVendor(vendor1);
		});
		Assertions.assertEquals(e1.getMessage(), "Email is a mandatory field");


		/* 1.2 - Success - Adding vendor with email */
		vendor1.setVendorEmail("testV1@_test_email.com");
		String strVendor1 =  vendor1.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor1)).toString(), strVendor1);
		// ------------------------------------------------------


		// ----------------------- Case 2 -----------------------
		/* 2.1 - Exception - Adding vendor with existing email */
		Address address2 = new Address(null, null, null, "Kitchener", "ON", "CA", null);

		final Vendor vendor2 = new Vendor(null, "Test 2 Name", "testV1@_test_email.com", "+10222222222", address2,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Italian", "Indian"},
				new String[] {"Daily", "Weekly"},
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				new String[] {"Small", "Standard"}
		);

		Exception e2 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.addVendor(vendor2);
		});
		Assertions.assertEquals(e2.getMessage(), "Vendor with email '" + vendor2.getVendorEmail() + "' already exists.");


		/* 2.2 - Success - Adding vendor with unique email */
		vendor2.setVendorEmail("testV2@_test_email.com");
		String strVendor2 =  vendor2.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor2)).toString(), strVendor2);
		// ------------------------------------------------------


		// ----------------------- Case 3 -----------------------
		/* 3.1 - Exception - Adding vendor w/o Phone */
		Address address3 = new Address(null, "5", "Street 5", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendor3 = new Vendor(null, "Test 5 Name", "testV5@_test_email.com", null, address3,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Indian", "Italian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday"},
				new String[] {"Small", "Large"}
		);

		Exception e3 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.addVendor(vendor3);
		});
		Assertions.assertEquals(e3.getMessage(), "Phone is a mandatory field");


		/* 3.2 - Success - Adding vendor with Phone */
		vendor3.setVendorPhone("+10555555555");
		String strVendor3 =  vendor3.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor3)).toString(), strVendor3);
		// ------------------------------------------------------


		// ----------------------- Case 4 -----------------------
		/* 4.1 - Exception - Adding vendor with existing Phone */
		Address address4 = new Address(null, null, null, "Kitchener", "ON", "CA", null);

		final Vendor vendor4 = new Vendor(null, "Test 6 Name", "testV6@_test_email.com", "+10555555555", address4,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Chinese", "Italian", "Indian"},
				new String[] {"Daily", "Weekly"},
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"},
				new String[] {"Large"}
		);

		Exception e4 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.addVendor(vendor4);
		});
		Assertions.assertEquals(e4.getMessage(), "Vendor with phone '" + vendor4.getVendorPhone() + "' already exists.");


		/* 4.2 - Success - Adding vendor with unique Phone */
		vendor4.setVendorPhone("+10666666666");
		String strVendor4 =  vendor4.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor4)).toString(), strVendor4);
		// ------------------------------------------------------
	}



	@Test
	void checkFindVendorById() throws Exception {
		Address address3 = new Address(null, null, null, "Kitchener","ON", "CA", null);

		Vendor vendor3 = new Vendor(null, "Test 3 Name", "testV3@_test_email.com", "+10333333333", address3,
				new String[] {"Veg"},
				new String[] {"Indian"},
				new String[] {"Daily"},
				new String[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"},
				new String[] {"Standard"}
		);

		String strVendor3 =  vendor3.toString();
		Vendor resVen = vendorService.addVendor(vendor3);
		Assertions.assertEquals(resVen.toString(), strVendor3);

		/* 1.1 - Failure - Find vendor who does not exist */
		Assertions.assertNull(vendorService.findVendorByVendorId(Long.parseLong("1231121212")));

		/* 1.2 - Success - Find vendor that exists */
		Vendor resVen2 = vendorService.findVendorByVendorId(resVen.getVendorId());
		Assertions.assertEquals(resVen2.toString(), strVendor3);
	}



	@Test
	void checkUpdateVendor() throws Exception {
		// Create Vendor to check against (Unrelated Vendor)
		Address addressA = new Address(null, "1", "Street Unrelated initialVendor", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendorA = new Vendor(null, "Test initialUnrelatedVendor Name", "initialVendorUnrelated@_test_email.com", "+10000888810", addressA,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Indian", "Italian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday"},
				new String[] {"Small"}
		);

		String strVendorA =  vendorA.toString();
		Assertions.assertEquals((vendorService.addVendor(vendorA)).toString(), strVendorA);


		// Create Vendor to check against
		Address address0 = new Address(null, "1", "Street initialVendor", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendor0 = new Vendor(null, "Test initialVendor Name", "initialVendor@_test_email.com", "+10000888877", address0,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Indian", "Italian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor0 =  vendor0.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor0)).toString(), strVendor0);

		Long vendorId = vendor0.getVendorId();
		Long addressId = vendor0.getAddress().getAddressId();



		// ----------------------- Case 1 -----------------------
		/* 1.0 - Exception - Updating Vendor with null vendorID */
		Address address1Null = new Address(addressId, "11", "Street Vendor Update 1", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendor1Null = new Vendor(null, "Test Update1 Name", "updateVendorEmail1@_test_email.com", "+10000888871", address1Null,
				new String[] {"Veg"},
				new String[] {"Italian", "Indian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		Exception e1Null = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1Null);
		});
		Assertions.assertEquals(e1Null.getMessage(), "Vendor Id cannot be empty");


		/* 1.1 - Exception - Updating Vendor with non-existing vendorID (Non-existing Vendor) */
		Address address1 = new Address(addressId, "11", "Street Vendor Update 1", "Waterloo", "ON", "CA", "N2J 4L4");

		final Vendor vendor1 = new Vendor(Long.parseLong("82173"), "Test Update1 Name", "updateVendorEmail1@_test_email.com", "+10000888871", address1,
				new String[] {"Veg"},
				new String[] {"Indian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1);
		});
		Assertions.assertEquals(e1.getMessage(), "Vendor with id '" + vendor1.getVendorId() + "' does not exists.");

		/* 1.2 - Exception - Updating Vendor with correct vendorID, no email */
		vendor1.setVendorId(vendorId);		// No longer error due to vendorId
		vendor1.setVendorEmail(null);		// No Email
		Exception e12 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1);
		});
		Assertions.assertEquals(e12.getMessage(), "Email is a mandatory field");

		/* 1.3 - Exception - Updating Vendor with already existing email */
		vendor1.setVendorEmail("initialVendorUnrelated@_test_email.com");		// Already Existing Email
		Exception e13 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1);
		});
		Assertions.assertEquals(e13.getMessage(), "Vendor with email '" + vendor1.getVendorEmail() + "' already exists.");

		/* 1.4 - Exception - Updating Vendor with valid email, but no phone */
		vendor1.setVendorEmail("initialVendor@_test_email.com");		// No longer error due to Email
		vendor1.setVendorPhone(null);		// No Phone
		Exception e14 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1);
		});
		Assertions.assertEquals(e14.getMessage(), "Phone is a mandatory field");

		/* 1.5 - Exception - Updating Vendor with already existing phone */
		vendor1.setVendorPhone("+10000888810");		// Already Existing Phone
		Exception e15 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.updateVendor(vendor1);
		});
		Assertions.assertEquals(e15.getMessage(), "Vendor with phone '" + vendor1.getVendorPhone() + "' already exists.");

		/* 1.6 - Success - Updating vendor with valid phone */
		vendor1.setVendorPhone("+10000888871");
		String strVendor1 =  vendor1.toString();
		Assertions.assertEquals((vendorService.updateVendor(vendor1)).toString(), strVendor1);
		// ------------------------------------------------------


		// ----------------------- Case 2 -----------------------
		/* 2.1 - Success - Updating Vendor address = null, different email & phone */
		/* ----> Should delete previous address from DB */
		Vendor vendor2 = new Vendor(vendorId, "Test Update2 Name", "updateVendorEmail2@_test_email.com", "+10000888872", null,
				new String[] {"Veg"},
				new String[] {"Italian", "Indian"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor2 =  vendor2.toString();
		Assertions.assertEquals((vendorService.updateVendor(vendor2)).toString(), strVendor2);
		// ------------------------------------------------------

		// ----------------------- Case 3 -----------------------
		/* 3.1 - Success - Updating Vendor with same email & phone, new address (with  addressID = null) */
		Address address3 = new Address(null, "11", "Street Vendor Update 2", "Waterloo", "ON", "CA", "N2J 4L4");

		Vendor vendor3 = new Vendor(vendorId, "Test Update2 Name", "updateVendorEmail2@_test_email.com", "+10000888872", address3,
				new String[] {"Veg"},
				new String[] {"Indian"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor3 =  vendor3.toString();
		Assertions.assertEquals((vendorService.updateVendor(vendor3)).toString(), strVendor3);
		// ------------------------------------------------------
	}
	
	
	@Test
	void checkFindAllVendors() throws Exception {
		// Create vendors to check against (1)
		Address address1 = new Address(null, "1", "Street AllVend1 initialVendor", "Waterloo", "ON", "CA", "N2J 4L4");

		Vendor vendor1 = new Vendor(null, "Test initialVendor AllVend1 Name", "initialVendorAllVend1@_test_email.com", "+10000881110", address1,
				new String[] {"Veg", "Non-veg"},
				new String[] {"Indian", "Italian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor1 =  vendor1.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor1)).toString(), strVendor1);

		// Create accounts to check against (2)
		Address address2 = new Address(null, "1", "Street AllVend2 initialVendor", "Waterloo", "ON", "CA", "N2J 4L4");

		Vendor vendor2 = new Vendor(null, "Test initialVendor AllVend2 Name", "initialVendorAllVend2@_test_email.com", "+10000881171", address2,
				new String[] {"Veg"},
				new String[] {"Indian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor2 =  vendor2.toString();
		Assertions.assertEquals((vendorService.addVendor(vendor2)).toString(), strVendor2);


		// ----------------------- Test -----------------------
		List<Vendor> vendList = vendorService.findAllVendors();
		int lenList = vendList.size();
		
		// Testing that the list has atleast 2 elements
		Assertions.assertTrue(lenList >= 2);
		
		long createdVendIds[] = {vendor1.getVendorId(), vendor2.getVendorId()};
		
		// Testing that the list has the correct elements
		for (int i = lenList - 1, j = 1; i >= lenList - 2; i--, j--) {
			Assertions.assertEquals((long) vendList.get(i).getVendorId(), createdVendIds[j]);
		}
		// ------------------------------------------------------
	}
	
	
	@Test
	void checkFindVendorByEmail() throws Exception {
		// Create vendor to check against
		Address address1 = new Address(null, null, null, "Ottawa", "ON", "CA", null);
		
		Vendor vendor1 = new Vendor(null, "Test initialVendor vendorByEmail2 Name", "initialVendorByEmail1@_test_email.com", "+10000882171", address1,
				new String[] {"Veg"},
				new String[] {"Indian", "Chinese"},
				new String[] {"Weekly"},
				new String[] {"Monday", "Tuesday", "Saturday"},
				new String[] {"Standard", "Large"}
		);

		String strVendor1 =  vendor1.toString();
		Vendor resVen = vendorService.addVendor(vendor1);
		Assertions.assertEquals(resVen.toString(), strVendor1);

		/* 1.1 - Failure - Find vendor with email that does not exist */
		String testEmail = "initialVendorByEmail1_randomEmail@_test_email.com";
		Exception e1 = Assertions.assertThrows(Exception.class, () -> {
			vendorService.findVendorByVendorEmail(testEmail);
		});
		Assertions.assertEquals(e1.getMessage(), "Vendor with email '" + testEmail + "' does not exist.");

		/* 1.2 - Success - Find vendor with email that exists */
		Vendor resVen1 = vendorService.findVendorByVendorEmail(resVen.getVendorEmail());
		Assertions.assertEquals(resVen1.toString(), strVendor1);
	}
}
