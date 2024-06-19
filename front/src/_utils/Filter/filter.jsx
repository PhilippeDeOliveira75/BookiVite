function Filter ( allLodgings, searchTerm, style, sortBy ) {
    
    let filteredLodgings = allLodgings

    filteredLodgings = allLodgings.filter(lodging =>

        lodging.title.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(searchTerm.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""))
    )

    if (style.length > 0) {
      filteredLodgings = filteredLodgings.filter((lodging) =>
        style.every((style) => lodging.style.includes(style))
      );
    }

    if (sortBy) {

        filteredLodgings = filteredLodgings.slice().sort((a, b) => {

            if (sortBy === 'prix') {
              return a.price - b.price
            } 
            
            else if (sortBy === '-prix') {
              return b.price - a.price;
            } 
            
            else if (sortBy === 'note') {
              return b.rating - a.rating;
            } 
            
            else {
              const nameA = a.title || ''
              const nameB = b.title || ''
              return nameA.localeCompare(nameB)
            }
            
          })

    }

    return filteredLodgings

} 

export default Filter