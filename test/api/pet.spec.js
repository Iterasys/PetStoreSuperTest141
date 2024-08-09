// Bibliotecas e Framework
const supertest = require('supertest')

const petId = 173218101

// Em JavaScript, Classe é opcional, mas pode agrupar em uma Describe
describe('API PetStore Swagger - Entidade Pet', () =>{

    // Atributos do grupo/describe
    const request = supertest('https://petstore.swagger.io/v2') // BaseURL
 
     // Funções ou Métodos: Its
    it('POST Pet', () => {
        
        // Atributos, Campos, Características, Configurações
        const pet = require('../../vendors/json/pet.json')

        // Função de teste em si 
        return request
            .post('/pet')
            .send(pet)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.id).toBe(petId)
                expect(res.body.name).toBe('Snoopy')
                expect(res.body.category.name).toBe('dog')
                expect(res.body.tags[0].name).toBe('vaccined')
            })
                // ---> Voltaremos 21:29

    }) // Final do método POST

    it('GET Pet', () => {
        return request
        // .get('/pet/' + petID) // tradicional
        .get(`/pet/${petId}`) // moderno: template literals
        .then((res) => {
    expect(res.statusCode).toBe(200)
            expect(res.body.id).toBe(petId)
            expect(res.body.status).toBe('available')
        })
    })

    it('PUT Pet', () => {
        const pet = require('../../vendors/json/petput.json')

        return request
            .put('/pet')
            .send(pet)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.status).toEqual('sold')
            })

    })

    it('DELETE Pet', () => {
        return request
            .delete(`/pet/${petId}`)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.code).toEqual(200)
                expect(res.body.message).toBe(petId.toString())
            })
    })


// Oi
}) // termina a describe

