package org.thinc.demo.example

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Cat(@Id val id: String? = null, val name: String, val age: Int)