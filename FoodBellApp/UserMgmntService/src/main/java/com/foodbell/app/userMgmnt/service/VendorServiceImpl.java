package com.foodbell.app.userMgmnt.service;

import com.foodbell.app.userMgmnt.entity.Vendor;
import com.foodbell.app.userMgmnt.repository.VendorRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class VendorServiceImpl  implements VendorService {
    @Autowired
    private VendorRepository vendorRepository;

    public Vendor addVendor(Vendor vendor) throws Exception {
//        log.info("In: Vendor Service -> addVendor");

        String venEmail = vendor.getVendorEmail();
        if (venEmail == null) {
            throw new Exception("Email is a mandatory field");
        }
        if (vendorRepository.findVendorByVendorEmail(venEmail) != null)  {
            throw new Exception("Vendor with email '" + venEmail + "' already exists.");
        }

        String venPhone = vendor.getVendorPhone();
        if (venPhone == null) {
            throw new Exception("Phone is a mandatory field");
        }
        if (vendorRepository.findVendorByVendorPhone(venPhone) != null)  {
            throw new Exception("Vendor with phone '" + venPhone + "' already exists.");
        }


        return vendorRepository.save(vendor);
    }

    public Vendor findVendorByVendorId(Long vendorId) {
//        log.info("In: Vendor Service -> findVendorByVendorId");
        return vendorRepository.findVendorByVendorId(vendorId);
    }


    public Vendor updateVendor(Vendor vendor) throws Exception {
//        log.info("In: Vendor Service -> updateVendor");

        Long venId = vendor.getVendorId();
        Vendor newVendor = vendorRepository.findVendorByVendorId(venId);

        if (venId == null)  {
            throw new Exception("Vendor Id cannot be empty");
        }

        if (newVendor == null)  {
            throw new Exception("Vendor with id '" + venId + "' does not exists.");
        }

        String venEmail = vendor.getVendorEmail();
        if (venEmail == null) {
            throw new Exception("Email is a mandatory field");
        }
        Vendor newVendorEmail = vendorRepository.findVendorByVendorEmail(venEmail);
        if (newVendorEmail != null)  {
            if (!newVendorEmail.getVendorId().equals(venId)) {
                throw new Exception("Vendor with email '" + venEmail + "' already exists.");
            }
        }

        String venPhone = vendor.getVendorPhone();
        if (venPhone == null) {
            throw new Exception("Phone is a mandatory field");
        }
        Vendor newVendorPhone = vendorRepository.findVendorByVendorPhone(venPhone);
        if (newVendorPhone != null)  {
            if (!newVendorPhone.getVendorId().equals(venId)) {
                throw new Exception("Vendor with phone '" + venPhone + "' already exists.");
            }
        }

        return vendorRepository.save(vendor);
    }
    
    public List<Vendor> findAllVendors () {
//    	log.info("In: Vendor Service -> findAllVendors");
    	return vendorRepository.findAll();
    }
    
    public Vendor findVendorByVendorEmail(String venEmail)  throws Exception {
//      log.info("In: Vendor Service -> findVendorByVendorEmail");      
      Vendor newVendorEmail = vendorRepository.findVendorByVendorEmail(venEmail);
      
      if (newVendorEmail == null)  {
          throw new Exception("Vendor with email '" + venEmail + "' does not exist.");
      }
      
      return newVendorEmail;
    }
}
