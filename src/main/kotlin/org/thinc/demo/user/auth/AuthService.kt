package org.thinc.demo.user.auth

import org.springframework.stereotype.Service
import org.thinc.demo.user.User
import org.thinc.demo.user.UserRepository
@Service
class AuthService(private val userRepository: UserRepository) : IAuthService {
    override fun register(user: User): User {
        return userRepository.insert(user)
    }

    override fun validateTicket(ticket: String): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}