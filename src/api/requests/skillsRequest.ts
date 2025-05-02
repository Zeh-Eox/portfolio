import API_URL from "../client";


export const getSkills = async () => {
    const response = await fetch(`${API_URL}/skills`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des compétences');
    }
    const data = await response.json();
    return data;
}

export const addSkill = async (data: object) => {
    const response = await fetch(`${API_URL}/skills`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la compétence');
    }
    const result = await response.json();
    return result;
}