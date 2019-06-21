package org.thinc.demo.user.auth

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm

const val SECRET = "VERY SECRETIVE SECRET"

fun issueToken(id: String): String =
        Jwts.builder().setSubject("user id").claim("id", id).signWith(SignatureAlgorithm.HS256, SECRET).compact()

fun validateToken(tokenBearer: String): String {
    val token = tokenBearer.replace("Bearer ", "")
    println(tokenBearer)
    println(token)
    return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).body["id"] as String
}
