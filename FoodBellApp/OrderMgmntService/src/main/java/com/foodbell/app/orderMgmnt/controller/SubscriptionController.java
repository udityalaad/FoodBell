package com.foodbell.app.orderMgmnt.controller;

import com.foodbell.app.orderMgmnt.entity.PackageSelection;
import com.foodbell.app.orderMgmnt.entity.Subscription;
import com.foodbell.app.orderMgmnt.service.SubscriptionService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/subscriptions")
@Slf4j
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/addSubscription")
    public Subscription addSubscriptionConnection (@RequestBody Subscription subscription) throws Exception {
//      log.info("In: Subscription Controller -> addSubscriptionConnection");
        return subscriptionService.addSubscriptionConnection(subscription);
    }

    @GetMapping("/getSubscription/{subscriptionId}")
    public Subscription findSubscriptionBySubscriptionId (@PathVariable("subscriptionId") Long subscriptionId) throws Exception {
//      log.info("In: Subscription Controller -> findSubscriptionBySubscriptionId");
        return subscriptionService.findSubscriptionBySubscriptionId(subscriptionId);
    }

    @GetMapping("/getSubscriptionByCustomerEmail/{customerEmail}")
    public Subscription[] findSubscriptionByCustomerEmail (@PathVariable("customerEmail") String customerEmail) throws Exception {
//      log.info("In: Subscription Controller -> findSubscriptionByCustomerEmail");
        return subscriptionService.findSubscriptionByCustomerEmail(customerEmail);
    }
    
    @GetMapping("/getSubscriptionByVendorEmail/{vendorEmail}")
    public Subscription[] findSubscriptionByVendorEmail (@PathVariable("vendorEmail") String vendorEmail) throws Exception {
//      log.info("In: Subscription Controller -> findSubscriptionByVendorEmail");
        return subscriptionService.findSubscriptionByVendorEmail(vendorEmail);
    }
    
    @GetMapping("/getAllSubscriptions")
    public List<Subscription> findAllSubscriptions () throws Exception {
//      log.info("In: Subscription Controller -> findAllSubscriptions");
        return subscriptionService.findAllSubscriptions();
    }
    
    
    
    
    @GetMapping("/getActiveSubscriptionByCustomerEmail/{customerEmail}")
    public Subscription[] findActiveSubscriptionByCustomerEmail (@PathVariable("customerEmail") String customerEmail) throws Exception {
//      log.info("In: Subscription Controller -> findSubscriptionByCustomerEmail");
        return subscriptionService.findActiveSubscriptionByCustomerEmail(customerEmail);
    }
    
    @GetMapping("/getActiveSubscriptionByVendorEmail/{vendorEmail}")
    public Subscription[] findActiveSubscriptionByVendorEmail (@PathVariable("vendorEmail") String vendorEmail) throws Exception {
//      log.info("In: Subscription Controller -> findSubscriptionByVendorEmail");
        return subscriptionService.findActiveSubscriptionByVendorEmail(vendorEmail);
    }
    
    @PostMapping("/activateSubscription/{subscriptionId}")
    public Subscription activateSubscription (@PathVariable("subscriptionId") Long subscriptionId) throws Exception {
//      log.info("In: Subscription Controller -> activateSubscription");
    	return subscriptionService.activateSubscription(subscriptionId);
	}
		  
		  
    @PostMapping("/deactivateSubscription/{subscriptionId}")
    public Subscription deactivateSubscription (@PathVariable("subscriptionId") Long subscriptionId) throws Exception {
//      log.info("In: Subscription Controller -> deactivateSubscription");
    	return subscriptionService.deactivateSubscription(subscriptionId);
	}
    
    
    
    
    
    @GetMapping("/getPendingOrdersByCustomerEmail/{customerEmail}")
    public Subscription[] findPendingOrdersByCustomerEmail (@PathVariable("customerEmail") String email) throws Exception {
//      log.info("In: Subscription Service -> findPendingOrdersByCustomerEmail");
        return subscriptionService.findPendingOrdersByEmail(email, "Customer");
    }
    
    @GetMapping("/getPendingOrdersByVendorEmail/{vendorEmail}")
    public Subscription[] findPendingOrdersByVendorEmail (@PathVariable("vendorEmail") String email) throws Exception {
//      log.info("In: Subscription Service -> findPendingOrdersByVendorEmail");
        return subscriptionService.findPendingOrdersByEmail(email, "Vendor");
    }
    
    @GetMapping("/getCompletedOrdersByCustomerEmail/{customerEmail}")
    public Subscription[] findCompletedOrdersByCustomerEmail (@PathVariable("customerEmail") String email) throws Exception {
//      log.info("In: Subscription Service -> findCompletedOrdersByCustomerEmail");
        return subscriptionService.findCompletedOrdersByEmail(email, "Customer");
    }
    
    @GetMapping("/getCompletedOrdersByVendorEmail/{vendorEmail}")
    public Subscription[] findCompletedOrdersByVendorEmail (@PathVariable("vendorEmail") String email) throws Exception {
//      log.info("In: Subscription Service -> findCompletedOrdersByVendorEmail");
        return subscriptionService.findCompletedOrdersByEmail(email, "Vendor");
    }
    
    
    
    
    
    @PostMapping("/markDelivered/{subscriptionId}")
    public Subscription markDelivered (@PathVariable("subscriptionId") Long subscriptionId) throws Exception {
//      log.info("In: Subscription Service -> markDelivered");
        return subscriptionService.markDelivered(subscriptionId);
    }
    
    
    @GetMapping("/getCost/{size}/{basicFoodSelection}/{advancedFoodSelection}/{noDays}")
    public int getCost (@PathVariable("size") String size, @PathVariable("basicFoodSelection") String basicFoodSelection, @PathVariable("advancedFoodSelection") String advancedFoodSelection, @PathVariable("noDays") int noDays) throws Exception {
    	// log.info("In: Subscription Service -> getCost");
        return subscriptionService.getCost(size, basicFoodSelection, advancedFoodSelection, noDays);
    }
    
    
    @ExceptionHandler(value=Exception.class)
    public ResponseEntity handleAllExceptions(Exception exception) {
        Map<String, Object> body = new LinkedHashMap();
        body.put("error", true);
        body.put("time", LocalDateTime.now());
        body.put("message", exception.getMessage());

        return new ResponseEntity(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	
	
}