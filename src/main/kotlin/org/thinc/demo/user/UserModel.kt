package org.thinc.demo.user

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User(@Id val id: String? = null, val gender: GENDER, val name_th: Name, val name_en: Name,
                val contact: Contact, val health: Health, val studentInfo: StudentInfo)

enum class GENDER {
    MALE, FEMALE
}

data class Name(val firstName: String, val lastName: String, val nickName: String)
data class Contact(val phone: String, val emergency: String, val email: String, val address: String,
                   val facebook: String, val line: String)

data class Health(val weight: Int, val height: Int, val bloodType: BLOODTYPE)
enum class BLOODTYPE {
    A, B, AB, O
}

data class StudentInfo(val studentID: String, val major_en: String, val major_th: String)