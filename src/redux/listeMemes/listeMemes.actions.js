export const LISTE_MEMES_GET = "LISTE_MEMES_GET"

// Fonction qui va renvoyer les données et le type de l'action
export const get = payload => {
    return {type: LISTE_MEMES_GET, payload}
}

// Implémentation du fetch
export const getMemes = () => dispatch => {
    return fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(json => {
        return dispatch(get(json.data.memes))
    })
}
