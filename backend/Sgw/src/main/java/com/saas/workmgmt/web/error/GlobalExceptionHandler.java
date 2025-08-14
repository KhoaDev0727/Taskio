package com.saas.workmgmt.web.error;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.net.URI;
import java.time.Instant;
import java.util.List;
import java.util.Map;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<Object> handleApi(ApiException ex, HttpServletRequest req) {
        var problem = Map.of(
            "type", URI.create("https://saas.example.com/errors/" + ex.getStatus()),
            "title", HttpStatus.valueOf(ex.getStatus()).getReasonPhrase(),
            "status", ex.getStatus(),
            "detail", ex.getMessage(),
            "instance", req.getRequestURI(),
            "timestamp", Instant.now().toString()
        );
        return ResponseEntity.status(ex.getStatus())
            .header("Content-Type", "application/problem+json")
            .body(problem);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidation(MethodArgumentNotValidException ex, HttpServletRequest req) {
        List<Map<String, String>> errors = ex.getBindingResult().getFieldErrors().stream()
            .map(err -> Map.of("field", err.getField(), "message", err.getDefaultMessage()))
            .toList();

        var problem = Map.of(
            "type", URI.create("https://saas.example.com/errors/validation"),
            "title", "Validation Failed",
            "status", 400,
            "detail", "One or more fields are invalid",
            "errors", errors,
            "instance", req.getRequestURI(),
            "timestamp", Instant.now().toString()
        );
        return ResponseEntity.badRequest()
            .header("Content-Type", "application/problem+json")
            .body(problem);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Object> handleAccessDenied(AccessDeniedException ex, HttpServletRequest req) {
        var problem = Map.of(
            "type", URI.create("https://saas.example.com/errors/forbidden"),
            "title", "Forbidden",
            "status", 403,
            "detail", "You do not have permission to access this resource",
            "instance", req.getRequestURI(),
            "timestamp", Instant.now().toString()
        );
        return ResponseEntity.status(403)
            .header("Content-Type", "application/problem+json")
            .body(problem);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handle(Exception ex, HttpServletRequest req) {
        log.error("Unhandled exception", ex);

        var problem = Map.of(
            "type", URI.create("https://saas.example.com/errors/internal"),
            "title", "Internal Server Error",
            "status", 500,
            "detail", ex.getMessage(),
            "instance", req.getRequestURI(),
            "timestamp", Instant.now().toString()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .header("Content-Type", "application/problem+json")
            .body(problem);
    }
}
