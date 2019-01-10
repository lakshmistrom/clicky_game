import axios from "axios";
const BASEURL = "https://rickandmortyapi.com/api/";
const CHARACTERS = "character/[1,2,3,4,5,6,7,8,9,10,11,12]"; 
export default{
    search: function(){
        return axios.get(BASEURL + CHARACTERS);
    }
}