package com.foodbell.app.userMgmnt.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customerId")
    private Long customerId;

    @Column(name = "customerName")
    private String customerName;

    @Column(name = "customerEmail", unique=true, nullable = false)
    private String customerEmail;

    @Column(name = "customerPhone", unique=true, nullable = false)
    private String customerPhone;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "addressId", referencedColumnName = "addressId")
    private Address address;

    @Column(name = "customerDOB")
//    @Temporal(TemporalType.DATE)
//    @JsonFormat(shape=JsonFormat.Shape.STRING, timezone="EST")
    private String customerDOB;

    @Column(name = "foodPreference")
    private String foodPreference;

    @Column(name = "advancedFoodPreference")
    private String advancedFoodPreference;

    @Column(name = "periodicityPreference")
    private String periodicityPreference;


    public Customer() {
        super();
    }

    public Customer(Long customerId, String customerName, String customerEmail, String customerPhone, Address address, String customerDOB, String foodPreference, String advancedFoodPreference, String periodicityPreference) {
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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
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
