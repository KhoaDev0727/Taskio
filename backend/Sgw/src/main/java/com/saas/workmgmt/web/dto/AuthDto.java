package com.saas.workmgmt.web.dto;

import lombok.Data;

@Data
public class AuthDto {
    public record RegisterRequest(String name, String email, String password, String tenant) {}
    public record LoginRequest(String email, String password) {}
    public record TokenResponse(String accessToken, String refreshToken) {}
    public record RefreshRequest(String refreshToken) {}
}
