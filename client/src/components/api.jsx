// getting data from server
const api = async (query) => {
    const data = await fetch(query).then(response => response.json())

    return (
        data
    )
}

export default api