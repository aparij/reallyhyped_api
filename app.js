import express from 'express';
import tagData from './public/tagdata.json';

const app = express()

app.get('/tags', (req, res) => {
  const queryLength=req.query.keywords.length;
  const tags = req.query.keywords.split(",");
  let responseData={};
  for(let tag of tags){
    responseData[tag]=tagData[tag];
  }
  res.json({data:responseData})
}

)

app.listen(3001, () => console.log('Example app listening on port 3001!'))