module.exports = {
    store(req, res){
        const { username } = req.body;

        //time 45:00 
        
        return res.json({ ok: true });
    }
};