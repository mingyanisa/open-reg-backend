package org.thinc.demo.user.auth

import org.springframework.stereotype.Service
import org.thinc.demo.user.User
import org.thinc.demo.user.UserRepository

@Service
class AuthService(private val userRepository: UserRepository) : IAuthService {
    override fun register(user: User, id: String): User {
        return userRepository.save(user.copy(id = id))
    }

    override fun validateTicket(ticket: String): TokenPayload {
        // TODO("request to sso server")
        return TokenPayload(issueToken("1112"))
    }

}