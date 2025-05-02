import API_URL from "../client";


export const getProjects = async () => {
    const response = await fetch(`${API_URL}/projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des projets');
    }
    const data = await response.json();
    return data;
}

export const addProject = async (data: object) => {
    const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du projet');
    }
    const result = await response.json();
    return result;
}