import {Router, json} from 'express';
import Tip from '../models/Tip';
import { genRndNumber } from '../functions/RandomNumberGenerate';

//genRndNumber(1, 9);

const router = Router();

router.get("/tips/details", async (req, res) => {
    const tips = await Tip.find();
    console.log(tips);
    res.send(tips);
});


router.post("/tips", async (req, res) => {
    
    req.body["id_paid_tip"] = genRndNumber(0,9);

    const {id_paid_tip, date_paid, total_amount} = req.body;

    const tips = new Tip({id_paid_tip, date_paid, total_amount});

    await tips.save();
    
    console.log(req.body);

    res.json(tips);
});

router.get("/tips/:id", async (req, res) => {
    try{
        const tip = await Tip.findById(req.params.id);

        if (!tip) {
            return res.status(404).json({message: "Tips not found"});
        }

            res.json(tip);
        

    }catch(error){
        return res.status(500).send(error);
    }
});

router.delete("/tips/:id", async (req, res) => {
    try{
        const tip = await Tip.findByIdAndDelete(req.params.id);

        if (!tip) {
            return res.status(404).json({message: "Tips not found"});
        }

        return  res.json(tip);

    }catch(error){
        return res.status(500).send(error);
    }
    
});

router.put("/tips/:id", async (req, res) => {
    try {
        const updatedTip = await Tip.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json(updatedTip);
    } catch (error) {
        console.error(error);
    }
});

export default router;