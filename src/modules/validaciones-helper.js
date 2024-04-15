class ValidacionesHelper {
    
    getIntegerOrDefault = (value, defaultValue) => {
    if(isInteger.isInteger(value)) {
        return value
    }   else {
        return defaultValue
    }
    };
    getStringOrDefault=(value,defaultValue)=>{
        if(typeof(value) === "string") {
            return value
        } else {
            return defaultValue
        }
    };
}

export default ValidacionesHelper