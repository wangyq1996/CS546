const express = require('express');
const router = express.Router();
const data = require('../data');
const bandsData = data.bands;

router.get('/:id', async (req, res) => {
    try{
        const band = await bandsData.getBandPost(req.params.id);
        res.json(band);
    }catch(e){
        res.status(404).json({message: 'Band not found'});
    }
});

router.get('/', async (req, res) =>{
    try{
        const allBands = await bandsData.getAllBands();
        res.json(allBands);
    }catch(e){
        res.status(500).json({error:error});
    }
});

router.post('/', async (req,res) => {
    const bandPostData = req.body;
    try{
        const{bandName, bandMembers, yearFormed, genres, recordLabel} = bandPostData;
        const newPost = await bandsData.addBand(bandName, bandMembers, yearFormed, genres, recordLabel);

        res.json(newPost);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    const {bandName,bandMembers,yearFormed,genres,recordLabel} = updatedData;
    let album;
    try{
        const band = await bandsData.getBandById(req.params.id);
        album = band.albums;
    }catch(e){
        res.status(404).json({error:'Bands not found'});
    }

    try{
        const updatedBand = await bandsData.updateBand(req.params.id,bandName,bandMembers,yearFormed,genres,album,recordLabel);
        res.json(updatedBand);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.delete('/:id',async (req, res) =>{
    let band;
    try{
        band = await bandsData.getBandPost(req.params.id);
    }catch(e){
        res.status(404).json({error: 'Bands not found'});
    }
    const output = {
        deleted:true,
        data:band
    }
    try{
        output.delete = await bandsData.removeBand(req.params.id);
        res.json(output);
    }catch(e){
        res.status(500).json({error:e});
    }
});


module.exports = router;