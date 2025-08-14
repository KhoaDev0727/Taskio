package com.saas.workmgmt.domain.service;

import com.saas.workmgmt.web.dto.AuthDto.*;

public interface AuthService {
    TokenResponse register(RegisterRequest req);
    TokenResponse login(LoginRequest req);
    TokenResponse refresh(String refreshToken);
}
