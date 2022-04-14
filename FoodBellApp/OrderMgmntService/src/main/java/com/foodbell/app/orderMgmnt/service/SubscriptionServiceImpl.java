package com.foodbell.app.orderMgmnt.service;

import com.foodbell.app.orderMgmnt.entity.PackageSelection;
import com.foodbell.app.orderMgmnt.entity.Subscription;
import com.foodbell.app.orderMgmnt.repository.SubscriptionRepository;

import lombok.extern.slf4j.Slf4j;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
@Slf4j
public class SubscriptionServiceImpl implements SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    // @Autowired
    RestTemplate restTemplate = new RestTemplate();

    private final String uri_getCustomerByEmail = "http://localhost:8090/customers/getCustomerByEmail/";
    private final String uri_getVendorByEmail = "http://localhost:8090/vendors/getVendorByEmail/";

    public Subscription addSubscriptionConnection(Subscription subscription) throws Exception {
        // log.info("In: Subscription Service -> addSubscriptionConnection");

        String cusEmail = subscription.getCustomerEmail();
        String venEmail = subscription.getVendorEmail();
        if (venEmail == null) {
            throw new Exception("Vendor Email is a Mandatory Field.");
        }
        if (cusEmail == null) {
            throw new Exception("Customer Email is a Mandatory Field.");
        }

        // Check if customer and vendor exists
        if (restTemplate.getForObject(uri_getCustomerByEmail + cusEmail, Object.class) == null) {
            throw new Exception("Customer with email '" + cusEmail + "' does not exist.");
        }
        if (restTemplate.getForObject(uri_getVendorByEmail + venEmail, Object.class) == null) {
            throw new Exception("Vendor with email '" + venEmail + "' does not exist.");
        }

        return this.addSubscriptionConnectionLastStep(subscription);
    }

    public Subscription addSubscriptionConnectionLastStep(Subscription subscription) throws Exception {
        // log.info("In: Subscription Service -> addSubscriptionConnectionLastStep");
    	
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    	
    	if (subscription.getStartDate() != null) {
    		String sD = formatter.format(formatter.parse(subscription.getStartDate()));
    		subscription.setStartDate(sD);
    	}
        
    	if (subscription.getLastDeliveryDate() != null) {
    		String lDD = formatter.format(formatter.parse(subscription.getLastDeliveryDate()));
    		subscription.setLastDeliveryDate(lDD);
    	}

        String cusEmail = subscription.getCustomerEmail();
        String venEmail = subscription.getVendorEmail();
        if (venEmail == null) {
            throw new Exception("Vendor Email is a Mandatory Field.");
        }
        if (cusEmail == null) {
            throw new Exception("Customer Email is a Mandatory Field.");
        }

        return subscriptionRepository.save(subscription);
    }
    
    
    public Subscription findSubscriptionBySubscriptionId(Long subscriptionId) throws Exception {
        // log.info("In: Subscription Service -> findSubscriptionBySubscriptionId");
        return subscriptionRepository.findSubscriptionBySubscriptionId(subscriptionId);
    }
    
    public List<Subscription> findAllSubscriptions() {
        // log.info("In: Subscription Service -> findAllSubscriptions");
        return subscriptionRepository.findAll();
    }
    
    
    

    public Subscription[] findSubscriptionByCustomerEmail(String customerEmail) {
        // log.info("In: Subscription Service -> findSubscriptionByCustomerEmail");
        return subscriptionRepository.findSubscriptionByCustomerEmail(customerEmail);
    }

    public Subscription[] findSubscriptionByVendorEmail(String vendorEmail) {
        // log.info("In: Subscription Service -> findSubscriptionByVendorEmail");
        return subscriptionRepository.findSubscriptionByVendorEmail(vendorEmail);
    }

    public Subscription[] findActiveSubscriptionByCustomerEmail(String customerEmail) throws Exception {
        // log.info("In: Subscription Service ->
        // findActiveSubscriptionByCustomerEmail");
        return subscriptionRepository.findSubscriptionByCustomerEmailAndActive(customerEmail, "true");
    }

    public Subscription[] findActiveSubscriptionByVendorEmail(String vendorEmail) {
        // log.info("In: Subscription Service -> findActiveSubscriptionByVendorEmail");
        return subscriptionRepository.findSubscriptionByVendorEmailAndActive(vendorEmail, "true");
    }

    public Subscription activateSubscription(Long subscriptionId) throws Exception {
        // log.info("In: Subscription Service -> activateSubscription");

        Subscription subscription = subscriptionRepository.findSubscriptionBySubscriptionId(subscriptionId);

        if (subscription == null) {
            throw new Exception("Subscription with the given Subscription-Id does not exist.");
        }

        subscription.setActive("true");

        return subscriptionRepository.save(subscription);
    }

    public Subscription deactivateSubscription(Long subscriptionId) throws Exception {
        // log.info("In: Subscription Service -> DeactivateSubscription");

        Subscription subscription = subscriptionRepository.findSubscriptionBySubscriptionId(subscriptionId);

        if (subscription == null) {
            throw new Exception("Subscription with the given Subscription-Id does not exist.");
        }

        subscription.setActive("false");

        return subscriptionRepository.save(subscription);
    }
    
    
    
    public String intToDay (int key) throws Exception {    	
    	Map<Integer, String> days = new HashMap<Integer, String>();
    	days.put(1, "Sunday");
    	days.put(2, "Monday");
    	days.put(3, "Tuesday");
    	days.put(4, "Wednesday");
    	days.put(5, "Thursday");
    	days.put(6, "Friday");
    	days.put(7, "Saturday");
    	
    	return days.get(key);
    }
    
    
    public Subscription[] findPendingOrCompletedOrdersByEmail (String email, String userType, String listType) throws Exception {
        // log.info("In: Subscription Service -> findPendingOrdersByEmail");
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date today = new Date();
        
        Calendar cal = Calendar.getInstance();
        cal.setTime(today);
        String currentDayOfWeek = intToDay(cal.get(Calendar.DAY_OF_WEEK));
        
        
    	List<Subscription> pending_subscriptions = new ArrayList<Subscription>();
    	List<Subscription> completed_subscriptions = new ArrayList<Subscription>();
    	
    	Subscription[] subscriptions;
        if (userType == "Customer") {
            subscriptions = subscriptionRepository.findSubscriptionByCustomerEmailAndActive(email, "true");
        } else {
            subscriptions = subscriptionRepository.findSubscriptionByVendorEmailAndActive(email, "true");
        }
        
        for (int i = 0; i < subscriptions.length; i++) {
        	String lastDeliveryDate = subscriptions[i].getLastDeliveryDate();
            
            if (subscriptions[i].getAvailedDays() == null) {
            	completed_subscriptions.add(subscriptions[i]);
            } else if (!Arrays.asList(subscriptions[i].getAvailedDays()).contains(currentDayOfWeek)) {
            	completed_subscriptions.add(subscriptions[i]);
            } else {
            	if (lastDeliveryDate == null) {
                	pending_subscriptions.add(subscriptions[i]);
            	} else if (!formatter.format(today).equals(lastDeliveryDate)) {
                	pending_subscriptions.add(subscriptions[i]);
                } else {
                	completed_subscriptions.add(subscriptions[i]);
                }
            }
        }
        
        if (listType.equals("Pending")) {
        	return pending_subscriptions.toArray(new Subscription[0]);
        } else {
        	return completed_subscriptions.toArray(new Subscription[0]);
        }
    }
    
    public Subscription[] findPendingOrdersByEmail(String email, String userType) throws Exception {
        // log.info("In: Subscription Service -> findPendingOrdersByEmail");
    	return findPendingOrCompletedOrdersByEmail(email, userType, "Pending");
    }
    
    public Subscription[] findCompletedOrdersByEmail(String email, String userType) throws Exception {
        // log.info("In: Subscription Service -> findCompletedOrdersByEmail");
    	return findPendingOrCompletedOrdersByEmail(email, userType, "Completed");
    }
    
    
    
    
    public Subscription markDelivered (Long subscriptionId) throws Exception {
    	// log.info("In: Subscription Service -> markDelivered");
    	Subscription subscription = subscriptionRepository.findSubscriptionBySubscriptionId(subscriptionId);
    	
        if (subscription == null) {
            throw new Exception("Subscription with the given Subscription-Id does not exist.");
        }
        
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    	Date today = new Date();
    	
        subscription.setLastDeliveryDate(formatter.format(today));
        
    	return subscriptionRepository.save(subscription);
    }
    
    
    
    public int getCost (String size, String basicFoodSelection, String advancedFoodSelection, int noDays) throws Exception {
    	// log.info("In: Subscription Service -> getCost");
    	Map<String, Integer> size_weight = new HashMap<String, Integer>();
    	size_weight.put("Small", 90);
    	size_weight.put("Standard", 120);
    	size_weight.put("Large", 150);
    	
    	Map<String, Integer> basicFoodSelection_weight = new HashMap<String, Integer>();
    	basicFoodSelection_weight.put("Veg", 0);
    	basicFoodSelection_weight.put("Non-veg", 30);
    	
    	Map<String, Integer> advancedFoodSelection_weight = new HashMap<String, Integer>();
    	advancedFoodSelection_weight.put("Indian", 0);
    	advancedFoodSelection_weight.put("Italian", 10);
    	advancedFoodSelection_weight.put("Chinese", 0);
    	
    	Map<Integer, Integer> noDays_weight = new HashMap<Integer, Integer>();
    	noDays_weight.put(1, 10);
    	noDays_weight.put(2, 20);
    	noDays_weight.put(3, 30);
    	noDays_weight.put(4, 40);
    	noDays_weight.put(5, 50);
    	noDays_weight.put(6, 60);
    	noDays_weight.put(7, 70);
    	
    	int cost = size_weight.get(size)
				+ basicFoodSelection_weight.get(basicFoodSelection)
				+ advancedFoodSelection_weight.get(advancedFoodSelection)
				+ noDays_weight.get(noDays);
    	
//        int cost = size_weight.get(packageSelection.getSize())
//        				+ basicFoodSelection_weight.get(packageSelection.getBasicFoodSelection())
//        				+ advancedFoodSelection_weight.get(packageSelection.getAdvancedFoodSelection())
//        				+ noDays_weight.get(packageSelection.getAvailedDays().length);
        
		
    	return cost;
    }
    
}