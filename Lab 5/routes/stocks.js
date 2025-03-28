//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes

//You can import your getStocks() function in the /data/data.js file 3 to return the list of stocks and call it in the /stocks route.  You can also import your getStockById(id) function and call it in the :/id route.
import * as dataMethods from '../data/data.js';
import helpers from '../helpers.js';
import {Router} from 'express';

const router = Router();

router.route('/').get(async (req, res) => {
    try {
      const postList = await dataMethods.getStocks();
      return res.json(postList);
    } catch (e) {
      return res.status(500).send(e);
    }
  });
// Implement GET Request Method and send a JSON response See lecture code!

router.route('/:id').get(async (req, res) => {
    try {
      req.params.id = helpers.checkId(req.params.id);
    } catch (e) {
      return res.status(400).json({error: e});
    }
    try {
      const post = await dataMethods.getStockById(req.params.id);
      return res.json(post);
    } catch (e) {
      return res.status(404).json(e);
    }
  });
//Implement GET Request Method and send a JSON response See lecture code!

export default router;
