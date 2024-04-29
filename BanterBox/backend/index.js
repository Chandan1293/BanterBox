const express = require("express");
const cors = require("cors");
const {default: axios} = require('axios')
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const {username} = req.body;
  try{
    const rr = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username , secret: username , first_name: username },
        { headers: { "Private-key": "af95d3b8-4149-4c78-9a19-4b04be379874"} }
    )
    return res.status(rr.status).json(rr.data)
  } catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);