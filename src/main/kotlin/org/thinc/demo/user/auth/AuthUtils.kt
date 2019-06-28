package org.thinc.demo.user.auth

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.SignatureException
import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException

const val SECRET = "VERY SECRETIVE SECRET"

fun issueToken(id: String): String =
        Jwts.builder().setSubject("user id").claim("id", id).signWith(SignatureAlgorithm.HS256, SECRET).compact()

fun validateToken(tokenBearer: String): String {
    val token = tokenBearer.replace("Bearer ", "")
    return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).body["id"] as String
}

fun authenticate(token: String): String {
    try {
        return validateToken(token)
    } catch (e: SignatureException) {
        throw ResponseStatusException(HttpStatus.UNAUTHORIZED,"invalid token", e)
    }
}