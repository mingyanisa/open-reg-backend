package org.thinc.demo.user

import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(val userRepository: UserRepository) : IUserService {
    override fun viewProfile(id: String): Optional<User> {
        return userRepository.findById(id)
    }

    override fun editProfile(user: User): Optional<User> {
        return userRepository.findById(user.id!!).map { userRepository.save(user) }
    }
}