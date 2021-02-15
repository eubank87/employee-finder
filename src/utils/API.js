import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,email,location,cell,picture,login&results=200&nat=us";

export default {
    search: function(){
        return axios.get(BASEURL);
    }
};