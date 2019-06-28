package org.thinc.demo.common

import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException


fun badRequest(message: String) = ResponseStatusException(HttpStatus.BAD_REQUEST,message)