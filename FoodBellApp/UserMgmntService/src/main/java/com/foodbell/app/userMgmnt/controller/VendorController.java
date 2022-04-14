package com.foodbell.app.userMgmnt.controller;

import com.foodbell.app.userMgmnt.entity.Vendor;
import com.foodbell.app.userMgmnt.service.VendorService;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/vendors")
@Slf4j
@Data
public class VendorController {
    @Autowired
    private VendorService vendorService;

    @PostMapping("/addVendor")
    public Vendor addVendor (@RequestBody Vendor vendor) throws Exception {
//        log.info("In: Vendor Controller -> addVendor");
        return vendorService.addVendor(vendor);
    }
    

    @GetMapping("/getVendor/{vendorId}")
    public Vendor findVendorByVendorId (@PathVariable("vendorId") Long vendorId) {
//        log.info("In: Vendor Controller -> findVendorByVendorId");
        return vendorService.findVendorByVendorId(vendorId);
    }


    @PostMapping("/updateVendor")
    public Vendor updateVendor (@RequestBody Vendor vendor)  throws Exception {
//        log.info("In: Vendor Controller -> updateVendor");
        return vendorService.updateVendor(vendor);
    }
    
    
    @GetMapping("/getAllVendors")
    public List<Vendor> findAllVendors () {
//        log.info("In: Vendor Controller -> findAllVendors");
        return vendorService.findAllVendors();
    }
    
    
    @GetMapping("/getVendorByEmail/{vendorEmail}")
    public Vendor findVendorByVendorEmail(@PathVariable("vendorEmail") String vendorEmail)  throws Exception {
//      log.info("In: Vendor Service -> findVendorByVendorEmail");
    	return vendorService.findVendorByVendorEmail(vendorEmail);
    }
    

    @ExceptionHandler(value=Exception.class)
    public ResponseEntity handleAllExceptions(Exception exception){
        Map<String, Object> body = new LinkedHashMap();
        body.put("error", true);
        body.put("time", LocalDateTime.now());
        body.put("message", exception.getMessage());

        return new ResponseEntity(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
