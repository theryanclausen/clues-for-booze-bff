import {
    RESTDataSource
} from 'apollo-datasource-rest'
import {
    Drink
} from '../types/schema-def'

class CocktailAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'https://www.thecocktaildb.com/api/'
    }

    async getDrink():Promise<Drink>{
        try{
            const { drinks } = await this.get('json/v1/1/random.php')
            const {
                idDrink:id, 
                strDrink:name, 
                strDrinkThumb:thumbnail, 
                strInstructions:instructions, 
                ...rest } = drinks[0]
            let idx = 1
            const ingredients = []
            while(rest[`strIngredient${idx}`]){
                ingredients.push(rest[`strMeasure${idx}`]? rest[`strMeasure${idx}`]+rest[`strIngredient${idx}`]:rest[`strIngredient${idx}`])
                idx ++
            }
            return { id, name, thumbnail, instructions, ingredients }
        }catch(e){
            return e
        }
    }

}

export default CocktailAPI