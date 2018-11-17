
import axios from 'axios'
let request = {
    getData(Kind,AdvertCode,PageIndex,PageSize){
        axios
        .post("/api/Advert/LoadAdvertList", {
            Kind:Kind,
            AdvertCode: AdvertCode,
            PageIndex: PageIndex,
            PageSize: PageSize
        })
        .then(function (res) {
            return res 
        });
    }
}

export default{
    install:function(vm){
        vm.prototype.$local = request
    }
}
