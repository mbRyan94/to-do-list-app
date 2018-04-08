const endpoint = 'http://localhost:3000/api/todos';


const Loopback = {
    displayItems() {
        return fetch(endpoint).then(response => {
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
    },

    addItems(term) {
        return fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title: term})
        }).then(response => {
            console.log(response);
            return response.json();
        })
    }
};

export default Loopback;