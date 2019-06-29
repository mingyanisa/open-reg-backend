package org.thinc.demo.example

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Service
import java.util.*

interface CatRepository : MongoRepository<Cat, String> {
    fun findByAgeLessThan(age: Int): List<Cat>
    fun findByName(name: String): Optional<Cat>
}

interface ICatService {
    fun adoptCat(cat: Cat): Cat
    fun changeName(id: String, name: String): Optional<Cat>
    fun runAway(id: String): Optional<Cat>
    fun listCatsByAge(age: Int): List<Cat>
    fun callCat(name: String): Optional<Cat>
}

@Service
class CatService(val catRepo: CatRepository) : ICatService {

    override fun adoptCat(cat: Cat) = catRepo.insert(cat)

    override fun changeName(id: String, name: String): Optional<Cat> =
            catRepo.findById(id).map { catRepo.save(it.copy(name = name)) }

    override fun callCat(name: String): Optional<Cat> = catRepo.findByName(name)

    override fun listCatsByAge(age: Int): List<Cat> = catRepo.findByAgeLessThan(age)

    override fun runAway(id: String): Optional<Cat> = catRepo.findById(id).map {
        catRepo.deleteById(id)
        it
    }


}