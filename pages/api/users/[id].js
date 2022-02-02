import data from "../../../data.json"

export default (req,res) => {
    const {id }= req.query;
    const user = data.find(video=>video.id.toString() === id);

    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({
            message:"Error"
        })
    }
  res.status(200).json(data)
}