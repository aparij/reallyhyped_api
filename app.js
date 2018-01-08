import express from 'express';
import tagData from './public/tagdata.json';
import _ from 'lodash';

const app = express()

const top20 = _.sortBy(Object.keys(tagData).filter(key=>tagData[key][tagData[key].length -1].rank<21)
                    .map(key=>{return {name: key, value: tagData[key][tagData[key].length -1 ]}}),
                    ['value.rank']);
                    

app.get('/tags', (req, res) => {
  let responseData={};
  if(req.query.keywords){
    const queryLength = req.query.keywords.length;
    const tags = req.query.keywords.split(",");
    for(let tag of tags){
      responseData[tag]=tagData[tag];
    }
  }else{
    responseData = top20;
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.json({data:responseData})
}

)

app.listen(3001, () => console.log('Example app listening on port 3001!'))