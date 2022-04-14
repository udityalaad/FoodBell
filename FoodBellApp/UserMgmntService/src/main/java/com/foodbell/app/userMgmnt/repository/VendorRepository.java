package com.foodbell.app.userMgmnt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbell.app.userMgmnt.entity.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    Vendor findVendorByVendorId(Long vendorId);
    
    Vendor findVendorByVendorEmail(String vendorEmail);
    Vendor findVendorByVendorPhone(String vendorPhone);
}
