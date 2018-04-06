module.exports = {
    getHouses: (req,res) => {
        const db = req.app.get('db');

        db.get_houses()
        .then()
        .catch();
    }
}