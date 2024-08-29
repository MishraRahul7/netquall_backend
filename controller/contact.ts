import User from '../schema/contact';

export const AddContact=async(req,res)=>{
    const data=req.body;
    try {
        const result = await User.create(data);
        if(result){
            res.send({message:"Success",status:200,data:result})
        }
    } catch (error) {
        res.send({message:"Error",data:error})
    }
}
export const EditContact=async(req,res)=>{
    const data=req.body;
    try {
        const result = await User.update({where:{id:data.id}},data);
        if(result){
            res.send({message:"Success",status:200,data:result})
        }
    } catch (error) {
        res.send({message:"Error",data:error})
    }
}
export const DeleteContact= async(req,res)=>{
    const data=req.body;
    try {
        const result = await User.destroy({where:{id:data.id}});
        if(result){
            res.send({message:"Success",status:200,data:result})
        }
    } catch (error) {
        res.send({message:"Error",data:error})
    }
}