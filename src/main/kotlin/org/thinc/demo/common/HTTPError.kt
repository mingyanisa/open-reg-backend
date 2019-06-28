package org.thinc.demo.common

import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException

fun errorBuilder(status: HttpStatus) = { message: String -> ResponseStatusException(status, message) }


val badRequest = errorBuilder(HttpStatus.BAD_REQUEST)

val unauthorized = errorBuilder(HttpStatus.FORBIDDEN)