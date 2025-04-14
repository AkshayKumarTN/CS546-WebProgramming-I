/*
import express and express router as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the array sort page.

you just need one route to send the static homepage.html file using the res.sendFile method. 
*/
import { Router } from 'express';
import path, { dirname } from 'path';
import {fileURLToPath} from 'url'

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const router = Router();



router.route('/')
  .get(async (req, res) => {
    try {
      return res.sendFile(path.join(_dirname,'..','static','homepage.html'));
      // return res.sendFile('../static/homepage.html');
      // return res.json('../static/homepage.html');
    } catch (e) {
      return res.status(500).json(e);
    }
    //code here for GET
  });

  export default router;