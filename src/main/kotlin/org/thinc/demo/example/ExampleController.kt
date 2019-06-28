package org.thinc.demo.example

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import org.thinc.demo.common.badRequest

@RestController
@RequestMapping("/cat")
class CatController(private val catService: ICatService) {

    @PostMapping("")
    fun adoptCat(@RequestBody cat: Cat) = catService.adoptCat(cat)

    @GetMapping("{name}")
    fun callCat(@PathVariable name: String): Cat {
        val cat = catService.callCat(name)
        return cat.orElseThrow { badRequest( "cat not found.") }
    }

    @GetMapping("")
    fun listCats(@RequestParam(value = "age", defaultValue = "1") age: Int): List<Cat> {
        val cats = catService.listCatsByAge(age)
        return (cats)
    }

    @PatchMapping("")
    fun changeName(@RequestBody updateName: UpdateName): Cat {
        val cat = catService.changeName(updateName.id, updateName.name)
        return cat.orElseThrow { badRequest("cat not found") }
    }

    @DeleteMapping("{id}")
    fun runAway(@PathVariable id: String): Map<String, String> {
        val cat = catService.runAway(id)
        return cat.map { mapOf("message" to "${it.name} ran away :(") }
                .orElseThrow { badRequest("cat not found") }
    }

}

data class UpdateName(val id: String, val name: String)