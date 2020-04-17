const express = require('express');
const router = express.Router();
const data = require('../data');
const albumsData = data.albums;

router.get('/:id', async (req, res) => {
    try{
        const album = await albumsData.getAlbumPost(req.params.id);
        res.json(album);
    }catch(e){
        res.status(404).json({message: 'Album not found'});
    }
});

router.get('/', async (req, res) =>{
    try{
        const allAlbums = await albumsData.getAllAlbums();
        res.json(allAlbums);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.post('/', async (req,res) => {
    const albumPostData = req.body;
    try{
        const{title,author,songs} = albumPostData;
        const newPost = await albumsData.addAlbum(title,author,songs);

        res.json(newPost);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    const{title,author,songs} = updatedData;
    try{
        await albumsData.getAlbumById(req.params.id);
    }catch(e){
        res.status(404).json({error:'Album not found'});
    }
    try{
        const updatedAlbum = await albumsData.updateAlbum(req.params.id,title,author,songs);
        res.json(updatedAlbum);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.patch('/:id', async (req, res) => {
    const updatedData = req.body;
    const{newTitle,newSongs} = updatedData;
    if(newTitle === undefined && newSongs === undefined) res.status(404).json({error:'No Input'});
    let oldAlbum;
    try{
        oldAlbum = await albumsData.getAlbumById(req.params.id);
    }catch(e){
        res.status(404).json({error:'Album not found'});
    }
    try{
        if(newTitle === undefined){
            if(typeof newSongs !== 'string') throw 'Invalid newSongs';
            oldAlbum.songs.push(newSongs);
            await albumsData.updateAlbum(req.params.id,oldAlbum.title,oldAlbum.author,oldAlbum.songs);
        } 
        else if(newSongs === undefined) {
            if(typeof newTitle !== 'string') throw 'Invalid newTitle';
            await albumsData.updateAlbum(req.params.id,newTitle,oldAlbum.author,oldAlbum.songs);
        }
        else {
            if(typeof newTitle !== 'string' || typeof newSongs !== 'string') throw 'Invalid Input';
            oldAlbum.songs.push(newSongs);
            await albumsData.updateAlbum(req.params.id,newTitle,oldAlbum.author,oldAlbum.songs);
        }
        const newAlbum = await albumsData.getAlbumPost(req.params.id);
        res.json(newAlbum);
    }catch(e){
        res.status(500).json({error:e});
    }
});

router.delete('/:id',async (req, res) =>{
    let album;
    try{
        album = await albumsData.getAlbumPost(req.params.id);
    }catch(e){
        res.status(404).json({error: 'Bands not found'});
    }
    const output = {
        deleted:true,
        data:album
    };
    try{
        await albumsData.removeAlbum(req.params.id);
        res.json(output);
    }catch(e){
        res.status(500).json({error:e});
    }
});


module.exports = router;