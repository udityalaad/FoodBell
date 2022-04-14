package com.foodbell.app.orderMgmnt.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.foodbell.app.orderMgmnt.entity.PackageSelection;
import com.foodbell.app.orderMgmnt.entity.Subscription;

public interface SubscriptionService {
    public Subscription addSubscriptionConnection (Subscription subscription) throws Exception;
    public Subscription addSubscriptionConnectionLastStep (Subscription subscription) throws Exception;
    
    public Subscription findSubscriptionBySubscriptionId (Long subscriptionId) throws Exception;
    public Subscription[] findSubscriptionByCustomerEmail (String customerEmail) throws Exception;
    public Subscription[] findSubscriptionByVendorEmail (String vendorEmail) throws Exception;
    public List<Subscription> findAllSubscriptions() throws Exception;
    
    public Subscription[] findActiveSubscriptionByCustomerEmail (String customerEmail) throws Exception;
    public Subscription[] findActiveSubscriptionByVendorEmail (String vendorEmail) throws Exception;
    public Subscription activateSubscription (Long subscriptionId) throws Exception;
    public Subscription deactivateSubscription (Long subscriptionId) throws Exception;
    
    public String intToDay (int key) throws Exception;
    public Subscription[] findPendingOrCompletedOrdersByEmail (String email, String userType, String listType) throws Exception;
    public Subscription[] findPendingOrdersByEmail(String email, String userType) throws Exception;
    public Subscription[] findCompletedOrdersByEmail(String email, String userType) throws Exception;
    
    public Subscription markDelivered (Long subscriptionId) throws Exception;
    
    public int getCost (String size, String basicFoodSelection, String advancedFoodSelection, int noDays) throws Exception;
}


