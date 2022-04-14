package com.foodbell.app.userMgmnt.entity;

import javax.persistence.*;

@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "addressId")
    private Long addressId;

    @Column(name = "propertyNo")
    private String propertyNo;

    @Column(name = "streetName")
    private String streetName;

    @Column(name = "city")
    private String city;

    @Column(name = "province")
    private String province;

    @Column(name = "country")
    private String country;

    @Column(name = "zipCode")
    private String zipCode;

    //@OneToOne(mappedBy = "address")
    //private Customer customer;

    public Address() {
        super();
    }

    public Address(Long addressId, String propertyNo, String streetName, String city, String province, String country, String zipCode) {
        this.addressId = addressId;
        this.propertyNo = propertyNo;
        this.streetName = streetName;
        this.city = city;
        this.province = province;
        this.country = country;
        this.zipCode = zipCode;
    }


    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public String getPropertyNo() {
        return propertyNo;
    }

    public void setPropertyNo(String propertyNo) {
        this.propertyNo = propertyNo;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }


//    @Override
//    public boolean equals(Object obj) {
//        Address other = (Address) obj;
//
//        return this.getPropertyNo().equals(other.getPropertyNo())
//                && this.getStreetName().equals(other.getStreetName())
//                && this.getCity().equals(other.getCity())
//                && this.getProvince().equals(other.getProvince())
//                && this.getCountry().equals(other.getCountry())
//                && this.getZipCode().equals(other.getZipCode());
//    }

    @Override
    public String toString() {
        return "Address{" +
//                "addressId=" + addressId +
                ", propertyNo='" + propertyNo + '\'' +
                ", streetName='" + streetName + '\'' +
                ", city='" + city + '\'' +
                ", province='" + province + '\'' +
                ", country='" + country + '\'' +
                ", zipCode='" + zipCode + '\'' +
                '}';
    }
}
