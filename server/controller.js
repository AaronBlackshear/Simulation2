module.exports = {
    getHouses: (req,res) => {
        const db = req.app.get('db');
        // console.log(req.session.user)
        db.get_houses()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
    },
    addHouse: (req,res) => {
        const db = req.app.get('db');
        const { wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode } = req.body;
        
        db.add_house([wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode])
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
    },
    deleteHouse: (req,res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        
        db.delete_house([id])
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
    },
    addFavorite: (req,res) => {
        const { user } = req.session;
        const { name,address,city,state,zip } = req.body

        user.push({name,address,city,state,zip});
        console.log(req.session.user)
    },
    searchHouses: (req,res) => {
        const db = req.app.get('db');
        const { address } = req.query;
        
        db.search_houses([`%${address}%`])
        .then(response => {console.log(response), res.status(200).json(response)})
        .catch(err => res.status(500).json(err));
    },
    editHouse: (req,res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { newName,newAddress,newCity,newState,newZipcode } = req.body;

        db.edit_house([id,newName,newAddress,newCity,newState,newZipcode])
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
    }
}