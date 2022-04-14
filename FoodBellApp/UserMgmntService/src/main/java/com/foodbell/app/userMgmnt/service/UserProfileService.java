package com.foodbell.app.userMgmnt.service;

import com.foodbell.app.userMgmnt.entity.UserProfile;


public interface UserProfileService {
    public UserProfile findUserProfileByEmail(String email) throws Exception;
}