package org.thinc.demo.user

import org.springframework.web.bind.annotation.*
import org.thinc.demo.common.badRequest
import org.thinc.demo.common.unauthorized
import org.thinc.demo.user.auth.authenticate
import java.util.*

interface IUserService {
    fun viewProfile(id: String): Optional<User>
    fun editProfile(user: User): Optional<User>
}

@RequestMapping("/user")
@RestController
class UserController (val userService: IUserService){
    @GetMapping("/{id}")
    fun viewProfile(@RequestHeader("authorization") token: String, @PathVariable id: String): User{
        authenticate(token)
        return userService.viewProfile(id).orElseThrow { badRequest("User not found.") }
    }

    @PostMapping("")
    fun editProfile(@RequestHeader("authorization") token: String, @RequestBody user: User): User{
        val id = authenticate(token)
        if(id != user.id) throw unauthorized("Can only edit your own profile.")
        return userService.editProfile(user).orElseThrow { badRequest("User not found") }
    }
}