package com.foodbell.app.userMgmnt.service;

import com.foodbell.app.userMgmnt.entity.UserProfile;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserProfileServiceImpl  implements UserProfileService {
	@Autowired
    private CustomerService customerService;
	
	@Autowired
    private VendorService vendorService;
	
	
    public UserProfile findUserProfileByEmail(String email) throws Exception {
//      log.info("In: User Profile Service -> findUserProfileByEmail");
    	
    	// Check if userType == 'Customer'
    	try {
    		Object customer = customerService.findCustomerByCustomerEmail(email);
    		UserProfile customerProfile = new UserProfile("Customer", customer);
    		
    		return customerProfile;
    		
    	} catch (Exception e) {
    		if (!e.getMessage().equals("Customer with email '" + email + "' does not exist.")) {
    			throw e;
    		}
    	}
    	
    	// Check if userType == 'Vendor'
    	try {
    		Object vendor = vendorService.findVendorByVendorEmail(email);
    		UserProfile vendorProfile = new UserProfile("Vendor", vendor);
    		
    		return vendorProfile;
    		
    	} catch (Exception e) {
    		if (!e.getMessage().equals("Vendor with email '" + email + "' does not exist.")) {
    			throw e;
    		}
    	}
    	
    	throw new Exception("User Profile with email '" + email + "' does not exist.");
    }
}