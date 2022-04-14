package com.foodbell.app.orderMgmnt.entity;
 

import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

public class VendorPojo {
    private Long vendorId;
    private String vendorName;
    private String vendorEmail;
    private String vendorPhone;
    private AddressPojo address;
    private String[] vendorBasicFoodOptions;
    private String[] vendorAdvancedFoodOptions;
    private String[] vendorPeriodicityOptions;
    private String[] vendorAvailability;
    private String[] vendorOfferedSize;
    

    public VendorPojo () {
        super();
    }

    public VendorPojo (Long vendorId, String vendorName, String vendorEmail, String vendorPhone, AddressPojo address, String[] vendorBasicFoodOptions, String[] vendorAdvancedFoodOptions, String[] vendorPeriodicityOptions, String[] vendorAvailability, String[] vendorOfferedSize) {
        this.vendorId = vendorId;
        this.vendorName = vendorName;
        this.vendorEmail = vendorEmail;
        this.vendorPhone = vendorPhone;
        this.address = address;
        this.vendorBasicFoodOptions = vendorBasicFoodOptions;
        this.vendorAdvancedFoodOptions = vendorAdvancedFoodOptions;
        this.vendorPeriodicityOptions = vendorPeriodicityOptions;
        this.vendorAvailability = vendorAvailability;
        this.vendorOfferedSize = vendorOfferedSize;
    }

    public Long getVendorId() {
        return vendorId;
    }

    public void setVendorId(Long vendorId) {
        this.vendorId = vendorId;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getVendorEmail() {
        return vendorEmail;
    }

    public void setVendorEmail(String vendorEmail) {
        this.vendorEmail = vendorEmail;
    }

    public String getVendorPhone() {
        return vendorPhone;
    }

    public void setVendorPhone(String vendorPhone) {
        this.vendorPhone = vendorPhone;
    }

    public AddressPojo getAddress() {
        return address;
    }

    public void setAddress(AddressPojo address) {
        this.address = address;
    }

    public String[] getVendorBasicFoodOptions() {
        return vendorBasicFoodOptions;
    }

    public void setVendorBasicFoodOptions(String[] vendorBasicFoodOptions) {
        this.vendorBasicFoodOptions = vendorBasicFoodOptions;
    }

    public String[] getVendorAdvancedFoodOptions() {
        return vendorAdvancedFoodOptions;
    }

    public void setVendorAdvancedFoodOptions(String[] vendorAdvancedFoodOptions) {
        this.vendorAdvancedFoodOptions = vendorAdvancedFoodOptions;
    }

    public String[] getVendorPeriodicityOptions() {
        return vendorPeriodicityOptions;
    }

    public void setVendorPeriodicityOptions(String[] vendorPeriodicityOptions) {
        this.vendorPeriodicityOptions = vendorPeriodicityOptions;
    }

    public String[] getVendorAvailability() {
        return vendorAvailability;
    }

    public void setVendorAvailability(String[] vendorAvailability) {
        this.vendorAvailability = vendorAvailability;
    }

    public String[] getVendorOfferedSize() {
		return vendorOfferedSize;
	}

	public void setVendorOfferedSize(String[] vendorOfferedSize) {
		this.vendorOfferedSize = vendorOfferedSize;
	}

	@Override
    public String toString() {
        return "Vendor{" +
//                "vendorId=" + vendorId +
                ", vendorName='" + vendorName + '\'' +
                ", vendorEmail='" + vendorEmail + '\'' +
                ", vendorPhone='" + vendorPhone + '\'' +
                ", address=" + address +
                ", vendorBasicFoodOptions=" + Arrays.toString(vendorBasicFoodOptions) +
                ", vendorAdvancedFoodOptions=" + Arrays.toString(vendorAdvancedFoodOptions) +
                ", vendorPeriodicityOptions=" + Arrays.toString(vendorPeriodicityOptions) +
                ", vendorAvailability=" + Arrays.toString(vendorAvailability) +
                ", vendorOfferedSize=" + Arrays.toString(vendorOfferedSize) +
                '}';
    }
}
