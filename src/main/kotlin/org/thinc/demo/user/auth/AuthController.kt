package org.thinc.demo.user.auth

import org.springframework.web.bind.annotation.*
import org.thinc.demo.user.User
import java.util.*

interface IAuthService {
    fun register(user: User, id: String): User
    fun validateTicket(ticket: String): TokenPayload
}

data class TokenPayload(val token: String)

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: IAuthService) {
    @PostMapping("register")
    fun register(@RequestBody user: User, @RequestHeader("authorization") token: String): User {
        val id = authenticate(token)
        return authService.register(user, id)
    }

    @GetMapping("validate")
    fun validateTicket(@RequestParam("ticket") ticket: String): TokenPayload {
        return authService.validateTicket("ticket")
    }


}
