package com.foodbell.app.userMgmnt.entity;

public class UserProfile {
    private String profileType;
    private Object profile;

	
    public UserProfile() {
        super();
    }

	public UserProfile(String profileType, Object profile) {
		this.profileType = profileType;
		this.profile = profile;
	}
	

	public String getProfileType() {
		return profileType;
	}

	public void setProfileType(String profileType) {
		this.profileType = profileType;
	}

	public Object getProfile() {
		return profile;
	}

	public void setProfile(Object profile) {
		this.profile = profile;
	}
    
	
}
