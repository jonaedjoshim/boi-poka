const getStoredBook = () => {
    const storedBookString = localStorage.getItem("readList")
    if (storedBookString) {
        const storedBookData = JSON.parse(storedBookString)
        return storedBookData
    }
    else {
        return []
    }
}

const addStoredDB = (id) => {
    const storedBookData = getStoredBook()

    if(storedBookData.includes(id)){
        alert("The book has already been read")
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
    }
}

export {addStoredDB, getStoredBook}