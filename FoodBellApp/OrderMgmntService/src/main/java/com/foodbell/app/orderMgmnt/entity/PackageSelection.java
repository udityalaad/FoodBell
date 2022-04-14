package com.foodbell.app.orderMgmnt.entity;

public class PackageSelection {
	String size;
	String basicFoodSelection;
	String advancedFoodSelection;
	String[] availedDays;
	 
	
	public PackageSelection() {
		super();
		// TODO Auto-generated constructor stub
	}


	public PackageSelection(String size, String basicFoodSelection, String advancedFoodSelection, String[] availedDays) {
		super();
		this.size = size;
		this.basicFoodSelection = basicFoodSelection;
		this.advancedFoodSelection = advancedFoodSelection;
		this.availedDays = availedDays;
	}
	

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
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

	public String[] getAvailedDays() {
		return availedDays;
	}

	public void setAvailedDays(String[] availedDays) {
		this.availedDays = availedDays;
	}
	
}
