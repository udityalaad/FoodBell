package com.foodbell.app.userMgmnt.service;

import java.util.List;

import com.foodbell.app.userMgmnt.entity.Vendor;

public interface VendorService {
    public Vendor addVendor(Vendor vendor) throws Exception;
    public Vendor findVendorByVendorId(Long vendorId);
    public Vendor updateVendor(Vendor vendor) throws Exception;
    public List<Vendor> findAllVendors ();
    public Vendor findVendorByVendorEmail(String venEmail)  throws Exception;
}
