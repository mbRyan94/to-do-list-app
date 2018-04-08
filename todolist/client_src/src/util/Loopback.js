


const Loopback = {
    displayItems() {
        return fetch('http://localhost:3000/api/todos').then(response => {
            return response.json();
        }).then(jsonResponse =>{
            if (!jsonResponse) {
                console.log("Keine Eintragungen vorhanden");
                return [];
            }
            console.log(jsonResponse);
            return jsonResponse.map(todo => ({
                title: todo.title,
                description: todo.description,
                date: todo.date
            }))
        })
    }
};

export default Loopback;