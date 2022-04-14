package com.foodbell.app.userMgmnt.entity;


import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "vendor")
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "vendorId")
    private Long vendorId;

    @Column(name = "vendorName")
    private String vendorName;

    @Column(name = "vendorEmail", unique = true, nullable = false)
    private String vendorEmail;

    @Column(name = "vendorPhone", unique = true, nullable = false)
    private String vendorPhone;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "addressId", referencedColumnName = "addressId")
    private Address address;

    @Column(name = "vendorBasicFoodOptions")
    private String[] vendorBasicFoodOptions;

    @Column(name = "vendorAdvancedFoodOptions")
    private String[] vendorAdvancedFoodOptions;

    @Column(name = "vendorPeriodicityOptions")
    private String[] vendorPeriodicityOptions;

    @Column(name = "vendorAvailability")
    private String[] vendorAvailability;

    @Column(name = "vendorOfferedSize")
    private String[] vendorOfferedSize;
    

    public Vendor () {
        super();
    }

    public Vendor(Long vendorId, String vendorName, String vendorEmail, String vendorPhone, Address address, String[] vendorBasicFoodOptions, String[] vendorAdvancedFoodOptions, String[] vendorPeriodicityOptions, String[] vendorAvailability, String[] vendorOfferedSize) {
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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
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
