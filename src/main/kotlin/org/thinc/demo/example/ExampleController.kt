package org.thinc.demo.example

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/cat")
class CatController(private val catService: ICatService) {

    @PostMapping("")
    fun adoptCat(@RequestBody cat: Cat) = catService.adoptCat(cat)

    @GetMapping("{name}")
    fun callCat(@PathVariable name: String): ResponseEntity<Any> {
        val cat = catService.callCat(name)
        return cat.map { ResponseEntity.ok<Any>(it) }.orElse(ResponseEntity.badRequest().body(mapOf("error" to "not found")))
    }

    @GetMapping("")
    fun listCats(@RequestParam(value = "age", defaultValue = "1") age: Int): ResponseEntity<List<Cat>> {
        val cats = catService.listCatsByAge(age)
        return ResponseEntity.ok(cats)
    }

    @PatchMapping("")
    fun changeName(@RequestBody updateName: UpdateName): ResponseEntity<Any> {
        val cat = catService.changeName(updateName.id, updateName.name)
        return cat.map { ResponseEntity.ok<Any>(it) }.orElse(ResponseEntity.badRequest().body(mapOf("error" to "not found")))
    }

    @DeleteMapping("{id}")
    fun runAway(@PathVariable id: String): ResponseEntity<Any> {
        val cat = catService.runAway(id)
        return cat.map { ResponseEntity.ok<Any>(mapOf("message" to "${it.name} ran away :(")) }.orElse(ResponseEntity.badRequest().body(mapOf("error" to "not found")))
    }

}

data class UpdateName(val id: String, val name: String)