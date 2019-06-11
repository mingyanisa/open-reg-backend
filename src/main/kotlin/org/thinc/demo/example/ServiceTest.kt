package org.thinc.demo.example

import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.junit.MockitoJUnitRunner

@RunWith(MockitoJUnitRunner::class)
class ServiceTest {

    @Mock
    lateinit var repository: CatRepository

    @InjectMocks
    lateinit var service: CatService

    @Test
    fun testAdoptCat() {
        val cat = Cat(name = "meow", age = 1)
        `when`(repository.insert(cat)).thenReturn((cat.copy(id = "")))
        val dbCat = service.adoptCat(cat)
        assert(dbCat == cat.copy(id = ""))
    }
}