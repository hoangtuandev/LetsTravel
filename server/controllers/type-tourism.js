import { TypeTourismModel } from "../models/TypeTourismModel.js";

export const getTypesTourism = async (req, res) => {
    try {
        // const typeTourism = new TypeTourismModel({
        //     lht_ma: 'LHT0001',
        //     lht_ten: 'Tour tham quan',
        // })
        // typeTourism.save();

        const typesTourism = await TypeTourismModel.find();
        res.status(200).json(typesTourism)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createTypeTourism = (req, res) => {
    res.send('CREATE TypeTourism');
}