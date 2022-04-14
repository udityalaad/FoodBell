package com.foodbell.app.orderMgmnt.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
  
@Entity
@Table(name = "subscription")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "subscriptionId")
    private Long subscriptionId;

    @Column(name = "vendorEmail", nullable = false)
    private String vendorEmail;

    @Column(name = "customerEmail", nullable = false)
    private String customerEmail;

    @Column(name = "startDate")
//    @Temporal(TemporalType.DATE)
//    @JsonFormat(shape=JsonFormat.Shape.STRING, timezone="EST")
    private String startDate;

    @Column(name = "basicFoodSelection")
    private String basicFoodSelection;

    @Column(name = "advancedFoodSelection")
    private String advancedFoodSelection;

    @Column(name = "periodicity")
    private String periodicity;

    @Column(name = "availedDays")
    private String[] availedDays;
    
    @Column(name = "mealSize")
    private String mealSize;

    @Column(name = "active", nullable = false)
    private String active;
    
    @Column(name = "lastDeliveryDate")
//    @Temporal(TemporalType.DATE)
//    @JsonFormat(shape=JsonFormat.Shape.STRING, timezone="EST")
    private String lastDeliveryDate;
    
    

    public Subscription () {
        super();
    }

	public Subscription(Long subscriptionId, String vendorEmail, String customerEmail, String startDate,
			String basicFoodSelection, String advancedFoodSelection, String periodicity, String[] availedDays,
			String mealSize, String active, String lastDeliveryDate) {
		super();
		this.subscriptionId = subscriptionId;
		this.vendorEmail = vendorEmail;
		this.customerEmail = customerEmail;
		this.startDate = startDate;
		this.basicFoodSelection = basicFoodSelection;
		this.advancedFoodSelection = advancedFoodSelection;
		this.periodicity = periodicity;
		this.availedDays = availedDays;
		this.mealSize = mealSize;
		this.active = active;
		this.lastDeliveryDate = lastDeliveryDate;
	}

	public Long getSubscriptionId() {
		return subscriptionId;
	}

	public void setSubscriptionId(Long subscriptionId) {
		this.subscriptionId = subscriptionId;
	}

	public String getVendorEmail() {
		return vendorEmail;
	}

	public void setVendorEmail(String vendorEmail) {
		this.vendorEmail = vendorEmail;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getBasicFoodSelection() {
		return basicFoodSelection;
	}

	public void setBasicFoodSelection(String basicFoodSelection) {
		this.basicFoodSelection = basicFoodSelection;
	}

	public String getAdvancedFoodSelection() {
		return advancedFoodSelection;
	}

	public void setAdvancedFoodSelection(String advancedFoodSelection) {
		this.advancedFoodSelection = advancedFoodSelection;
	}

	public String getPeriodicity() {
		return periodicity;
	}

	public void setPeriodicity(String periodicity) {
		this.periodicity = periodicity;
	}

	public String[] getAvailedDays() {
		return availedDays;
	}

	public void setAvailedDays(String[] availedDays) {
		this.availedDays = availedDays;
	}

	public String getMealSize() {
		return mealSize;
	}

	public void setMealSize(String mealSize) {
		this.mealSize = mealSize;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public String getLastDeliveryDate() {
		return lastDeliveryDate;
	}

	public void setLastDeliveryDate(String lastDeliveryDate) {
		this.lastDeliveryDate = lastDeliveryDate;
	}

	@Override
    public String toString() {
        return "Subscription{" +
//                "subscriptionId=" + subscriptionId +
                ", vendorEmail=" + vendorEmail +
                ", customerEmail=" + customerEmail +
                ", startDate=" + startDate +
                ", basicFoodSelection='" + basicFoodSelection + '\'' +
                ", advancedFoodSelection='" + advancedFoodSelection + '\'' +
                ", periodicity='" + periodicity + '\'' +
                ", availedDays=" + Arrays.toString(availedDays) +
                ", active='" + active + '\'' +
                ", lastDeliveryDate='" + lastDeliveryDate + '\'' +
                '}';
    }
}