package com.saas.workmgmt.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;         // <-- thêm import này
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
  private final SecretKey key;
  private final long accessTtlMs;

  public JwtService(
      @Value("${app.jwt.secret}") String secret,                
      @Value("${app.jwt.access-ttl-ms:3600000}") long accessTtlMs
  ) {
    byte[] keyBytes;
    try {
      keyBytes = Decoders.BASE64.decode(secret);
    } catch (IllegalArgumentException e) {
      keyBytes = secret.getBytes(StandardCharsets.UTF_8);
    }
    this.key = Keys.hmacShaKeyFor(keyBytes); 
    this.accessTtlMs = accessTtlMs;
  }

  public String generateToken(String subject, Map<String, Object> claims) {
    Instant now = Instant.now();
    return Jwts.builder()
      .setClaims(claims)
      .setSubject(subject)
      .setIssuedAt(Date.from(now))
      .setExpiration(Date.from(now.plusMillis(accessTtlMs)))
      .signWith(key, SignatureAlgorithm.HS256)
      .compact();
  }

  public boolean isTokenValid(String token) {
    try { getAllClaims(token); return true; } catch (Exception e) { return false; }
  }

  public <T> T extract(String token, Function<Claims, T> extractor) {
    return extractor.apply(getAllClaims(token));
  }

  private Claims getAllClaims(String token) {
    return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
  }
}
