function adventureToItem(adventureObject){
    return `
    <div class="row justify-content-start top-buffer mb-4">
    <div class="col-sm">
    ${adventureObject.name}
    </div>
    <form action="/start" method="POST">
    <input type="submit" value="Start!">
    <input type="hidden" name="adventureObject" value=${adventureObject.id}>
    </form>
    </div>
    `
}

function userAdventureList(arrayOfAdventures){
    const adventureItems = arrayOfAdventures.map(adventureToItem).join('');
        return `

        <div class="container">
            ${adventureItems}
        </div>
        `
}


module.exports = userAdventureList