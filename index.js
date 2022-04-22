import express from 'express';
import axios from 'axios'

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.static('public'));
//set ejs as templating engine
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',async (req,res)=>{
    res.render('home');
    });

app.get('/bestStories',async (req,res)=>{
    try
    {
    var url='https://newsmanager25.herokuapp.com/myBestStories';
    const response=await axios.get(url);
    res.render('stories',{articles:response.data.stories});
    }catch(error)
    {
        console.log(error);
    }
    });

app.get('/topStories',async (req,res)=>{
        try
        {
        var url='https://newsmanager25.herokuapp.com/myTopStories';
        const response=await axios.get(url);
        res.render('stories',{articles:response.data.stories});
        }catch(error)
        {
            console.log(error);
        }
        });
app.get('/newStories',async (req,res)=>{
    try
    {
    var url='https://newsmanager25.herokuapp.com/myNewStories';
    const response=await axios.get(url);
    res.render('stories',{articles:response.data.stories});
    }catch(error)
    {
        console.log(error);
    }
    });
    





    
    
    app.listen(PORT,()=>console.log(`Server running on Port: http://localhost:${PORT}`));