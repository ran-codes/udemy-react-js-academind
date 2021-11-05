import {MongoClient} from 'mongodb';


// api/new-meeetup


async function handler(req, res) {
   

  if (req.method === 'POST') {
  
    const data = req.body;

    console.log('handler data');
    console.log(req.body);

    const client = await MongoClient.connect(
      'mongodb+srv://ranli2011:mangobub12@cluster0.lucol.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    
    const db = client.db();
    
    const meetupsCollections = db.collection('meetups');
   
    console.log(data);
    
    const results = await meetupsCollections.insertOne(data);

    console.log(results)

    client.close();

    res.status(201).json({message: "Meetup inserted!"})
  }
}

export default handler;