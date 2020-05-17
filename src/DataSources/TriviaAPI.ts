import {
    RESTDataSource
} from 'apollo-datasource-rest'
import {stringify} from 'qs'
import {
    Category
} from '../types/schema-def'

class JserviceAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'https://opentdb.com/'
    }

    async getCategories():Promise<Array<Category>>{
        try{
            const { trivia_categories } = await this.get('api_category.php')
            return trivia_categories
        }catch(e){
            return e
        }
    }
}

export default JserviceAPI