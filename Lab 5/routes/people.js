//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes
import * as dataMethods from '../data/data.js';
import helpers from '../helpers.js';
import {Router} from 'express';

//You can import your getPeople() function in the /data/data.js file to return the list of people.  You can also import your getPersonById(id) function and call it in the :/id route.
const router = Router();

router.route('/').get(async (req, res) => {
    try {
      const postList = await dataMethods.getPeople();
      return res.json(postList);
    } catch (e) {
      return res.status(500).send(e);
    }
  });
// Implement GET Request Method and send a JSON response  See lecture code!

router.route('/:id').get(async (req, res) => {
    try {
      req.params.id = helpers.checkId(req.params.id);
    } catch (e) {
      return res.status(400).json({error: e});
    }
    try {
      const post = await dataMethods.getPersonById(req.params.id);
      return res.json(post);
    } catch (e) {
      return res.status(404).json(e);
    }
  });
// Implement GET Request Method and send a JSON response See lecture code!

export default router;
