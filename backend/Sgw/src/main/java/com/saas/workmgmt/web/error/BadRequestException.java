package com.saas.workmgmt.web.error;

public class BadRequestException extends ApiException {
    private static final long serialVersionUID = 1L;

    public BadRequestException(String message) {
        super(message, 400);
    }
}
