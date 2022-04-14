package com.foodbell.app.orderMgmnt.repository;

import com.foodbell.app.orderMgmnt.entity.Subscription;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    Subscription findSubscriptionBySubscriptionId(Long id);
    Subscription[] findSubscriptionByCustomerEmail(String customerEmail);
    Subscription[] findSubscriptionByVendorEmail(String vendorEmail);
    Subscription[] findSubscriptionByCustomerEmailAndActive (String customerEmail, String active);
    Subscription[] findSubscriptionByVendorEmailAndActive (String vendorEmail, String active);
}
