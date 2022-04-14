package com.foodbell.app.orderMgmnt.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomerPojo {
    private Long customerId;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private AddressPojo address;
    private String customerDOB;
    private String foodPreference;
    private String advancedFoodPreference;
    private String periodicityPreference; 


    public CustomerPojo() {
        super();
    }

    public CustomerPojo(Long customerId, String customerName, String customerEmail, String customerPhone, AddressPojo address, String customerDOB, String foodPreference, String advancedFoodPreference, String periodicityPreference) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.address = address;
        this.customerDOB = customerDOB;
        this.foodPreference = foodPreference;
        this.advancedFoodPreference = advancedFoodPreference;
        this.periodicityPreference = periodicityPreference;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public AddressPojo getAddress() {
        return address;
    }

    public void setAddress(AddressPojo address) {
        this.address = address;
    }

    public String getCustomerDOB() {
        return customerDOB;
    }

    public void setCustomerDOB(String customerDOB) {
        this.customerDOB = customerDOB;
    }

    public String getFoodPreference() {
        return foodPreference;
    }

    public void setFoodPreference(String foodPreference) {
        this.foodPreference = foodPreference;
    }

    public String getAdvancedFoodPreference() {
        return advancedFoodPreference;
    }

    public void setAdvancedFoodPreference(String advancedFoodPreference) {
        this.advancedFoodPreference = advancedFoodPreference;
    }

    public String getPeriodicityPreference() {
        return periodicityPreference;
    }

    public void setPeriodicityPreference(String periodicityPreference) {
        this.periodicityPreference = periodicityPreference;
    }


//    @Override
//    public boolean equals(Object obj) {
//        Customer other = (Customer) obj;
//
//
//        return this.getCustomerName().equals(other.getCustomerName())
//                && this.getCustomerEmail().equals(other.getCustomerEmail())
//                && this.getCustomerPhone().equals(other.getCustomerPhone())
//                && (this.getAddress()).equals(other.getAddress())
//                //&& this.getCustomerDOB().equals(other.getCustomerDOB())
//                && this.getFoodPreference().equals(other.getFoodPreference())
//                && this.getAdvancedFoodPreference().equals(other.getAdvancedFoodPreference())
//                && this.getPeriodicityPreference().equals(other.getPeriodicityPreference());
//    }

    @Override
    public String toString() {
        return "Customer{" +
//                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerPhone='" + customerPhone + '\'' +
                ", address=" + address +
//                ", customerDOB=" + customerDOB +
                ", customerDOB=" + customerDOB +
                ", foodPreference='" + foodPreference + '\'' +
                ", advancedFoodPreference='" + advancedFoodPreference + '\'' +
                ", periodicityPreference='" + periodicityPreference + '\'' +
                '}';
    }
}
