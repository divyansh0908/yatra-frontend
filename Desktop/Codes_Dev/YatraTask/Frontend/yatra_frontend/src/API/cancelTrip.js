export const cancelTrip = async (trip)  => {
    let err = null;
    let data = null;
    try {
        const response = await fetch("http://localhost:5000/trips/finalcancellation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        });
        // const response = await axios.post(
        // "http://localhost:5000/api/trips/finalcancellation",
        // trip
         data = await response.json();
        if (response.ok) {
            data = data;
            err= null;
            return [data, err]
        }else{
            data = null;
            
            err = data.message;
            return [data, err]
        }

        
        
    } catch (error) {
        err = error.message;
        return [data, err]
    }
    }
