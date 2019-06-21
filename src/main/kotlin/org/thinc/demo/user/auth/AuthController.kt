package org.thinc.demo.user.auth

import org.springframework.web.bind.annotation.*
import org.thinc.demo.user.User

interface IAuthService {
    fun register(user: User): User
    fun validateTicket(ticket: String): String
}

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: IAuthService) {
    @PostMapping("register")
    fun register(@RequestBody user: User): User {
        return authService.register(user)
    }

}
